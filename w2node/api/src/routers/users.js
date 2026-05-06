import express from "express";
import db from "../../../db.js";
import { z } from "zod";

const router = express.Router();
//Validation schema
const userSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await db("users").select("*");
    res.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
// GET /api/users/search?q=...
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      const allUsers = await db("users").select("*");
      return res.json(allUsers);
    }

    const results = await db("users")
      .where("username", "like", `%${q}%`)
      .orWhere("email", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("GET /api/users/search error:", error);
    res.status(500).json({ error: "Failed to search users" });
  }
});

// POST /api/users/search
router.post("/search", async (req, res) => {
  try {
    const { q } = req.body;

    if (!q) {
      const allUsers = await db("users").select("*");
      return res.json(allUsers);
    }

    const results = await db("users")
      .where("username", "like", `%${q}%`)
      .orWhere("email", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("POST /api/users/search error:", error);
    res.status(500).json({ error: "Failed to search users" });
  }
});
// GET /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await db("users").where({ id: req.params.id }).first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("GET /api/user/:id error:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});
// POST /api/users
router.post("/", async (req, res) => {
  try {
    const data = userSchema.paras(req.body);

    const [id] = await db("users").insert(data);
    const created = await db("users").where({ id }).first();

    res.status(201).json(created);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    console.error("POST/api/users error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const updated = await db("users").where({ id: req.params.id }).update({
      username,
      email,
      password,
    });

    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await db("users").where({ id: req.params.id }).first();
    res.json(updatedUser);
  } catch (error) {
    console.error("PUT /api/users/:id error:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await db("users").where({ id: req.params.id }).del();

    if (!deleted) {
      return res.status(404).json({ error: "user not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/users/:id error:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
