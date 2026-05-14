import jwt from "jsonwebtoken";
import db from "../../../db.js";

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  // Missing header
  if (!header) {
    console.error("Auth error: Missing Authorization header");
    return res.status(401).json({ error: "token_missing" });
  }

  const [scheme, token] = header.split(" ");

  // Wrong format
  if (scheme !== "Bearer" || !token) {
    console.error("Auth error: Malformed Authorization header:", header);
    return res.status(401).json({ error: "token_malformed" });
  }

  try {
    // Verify token
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    // Log server-side details (safe)
    console.error("JWT verification error:", err);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "token_expired" });
    }

    return res.status(401).json({ error: "token_invalid" });
  }
}
// User role middleware
export function requireRole(...allowed) {
  return (req, res, next) => {
    if (!allowed.includes(req.user.role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    next();
  };
}
// Snippets owner role
export async function requireSnippetOwner(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: "token_missing" });
  }
  const snippet = await db("snippets").where({ id: req.params.id }).first();

  if (!snippet) {
    return res.status(404).json({ error: "Snippet not found" });
  }

  // Admin or moderator bypass
  if (["admin", "moderator"].includes(req.user.role)) {
    return next();
  }

  //Owner check
  if (snippet.user_id !== req.user.id) {
    return res.status(403).json({ error: "forbidden" });
  }

  next();
}
