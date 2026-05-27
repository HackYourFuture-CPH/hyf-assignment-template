import express from "express";
import db from "../../../db.js";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { requireRole } from "../middleware/auth.js";

const router = express.Router();

//Validation schema
const userSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

// GET /api/users
router.get("/", requireRole("admin"), async (req, res) => {
  try {
    const users = await db("users").select(
      "id",
      "username",
      "email",
      "created_at",
    );
    res.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
// GET /api/users/search?q=...
router.get("/search", requireRole("admin"), async (req, res) => {
  try {
    const { q } = req.query;

    const results = await db("users")
      .where("username", "like", `%${q || ""}%`)
      .orWhere("email", "like", `%${q || ""}%`);

    res.json(results);
  } catch (error) {
    console.error("GET /api/users/search error:", error);
    res.status(500).json({ error: "Failed to search users" });
  }
});

// POST /api/users
router.post("/", requireRole("admin"), async (req, res) => {
  try {
    const data = userSchema.parse(req.body);
    const existing = await db("users").where({ email: data.email }).first();
    if (existing) {
      return res.status(409).json({ error: "email_already_exists" });
    }

    const hashed = await bcrypt.hash(data.password, 10);

    const [id] = await db("users").insert({
      username: data.username,
      email: data.email,
      password: hashed,
    });

    const created = await db("users").where({ id }).first();
    res.status(201).json(created);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    console.error("POST /api/users error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/users/:id
router.put("/:id", requireRole("admin"), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (email) {
      const emailTaken = await db("users")
        .where({ email })
        .andWhereNot({ id: req.params.id })
        .first();

      if (emailTaken) {
        return res.status(409).json({ error: "email_already_exists" });
      }
    }

    const updateData = {
      username,
      email,
    };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const updated = await db("users")
      .where({ id: req.params.id })
      .update(updateData);

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
router.delete("/:id", requireRole("admin"), async (req, res) => {
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
