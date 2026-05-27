import express from "express";
import db from "../../../db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const authRouter = express.Router();
//Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db("users").where({ email }).first();
  if (!user) {
    return res.status(401).json({ error: "wrong email or password" });
  }

  const isMatch = bcryptjs.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "wrong email or password" });
  }

  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" },
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" },
  );

  await db("tokens").insert({
    user_id: user.id,
    token: refreshToken,
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  res.status(200).json({ accessToken, refreshToken });
});
//Register
authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existing = await db("users").where({ email }).first();
  if (existing) {
    return res.status(409).json({ error: "user already exists" });
  }

  const hashedPass = await bcryptjs.hash(password, 10);

  await db("users").insert({
    email,
    password: hashedPass,
    role: "user",
  });

  res.status(201).json({ msg: "user created" });
});
//Auth middleware
export function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: "token_missing" });
  }

  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ error: "token_malformed" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "token_expired" });
    }
    return res.status(401).json({ error: "token_invalid" });
  }
}
//Refresh token
authRouter.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: "refresh_token_missing" });
  }

  const stored = await db("tokens").where({ token: refreshToken }).first();
  if (!stored) {
    return res.status(401).json({ error: "refresh_token_invalid" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { id: payload.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(401).json({ error: "refresh_token_expired" });
  }
});
//logout
authRouter.post("/logout", async (req, res) => {
  const { refreshToken } = req.body;

  await db("tokens").where({ token: refreshToken }).delete();

  res.json({ msg: "logged out" });
});
