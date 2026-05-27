import express from "express";
import db from "../../../db.js";
import { z } from "zod";

const router = express.Router();
//Validation schema
const tagSchema = z.object({
  name: z.string().min(2),
});
// GET /api/tags
router.get("/", async (req, res) => {
  try {
    const tags = await db("tags").select("*");
    res.json(tags);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to fetch tags" });
  }
});
// GET /api/tags/search?q=...
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      const allTags = await db("tags").select("*");
      return res.json(allTags);
    }
    const results = await db("tags").where("name", "like", `%${q}`);
    res.json(results);
  } catch (error) {
    console.error("GET /api/tags/search error:", error);
    res.status(500).json({ error: "Failed to search tags" });
  }
});

// POST /api/tags/search
router.post("/search", async (req, res) => {
  try {
    const { q } = req.body;

    if (!q) {
      const allTags = await db("tags").select("*");
      return res.json(allTags);
    }

    const results = await db("tags").where("name", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("POST /api/tags/search error:", error);
    res.status(500).json({ error: "Failed to search tags" });
  }
});
// GET /api/tags/:id
router.get("/:id", async (req, res) => {
  try {
    const tag = await db("tags").where({ id: req.params.id }).first();

    if (!tag) {
      return res.status(404).json({ error: "Tag not found" });
    }

    res.json(tag);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to fetch tag" });
  }
});
// POST /api/tags
router.post("/", async (req, res) => {
  try {
    const data = tagSchema.parse(req.body);

    const [id] = await db("tags").insert(data);
    const created = await db("tags").where({ id }).first();

    res.status(201).json(created);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    console.error("POST /api/tags error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/tags/:id
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;

    const updated = await db("tags")
      .where({ id: req.params.id })
      .update({ name });

    if (!updated) {
      return res.status(404).json({ error: "Tag not found" });
    }

    const updatedTag = await db("tags").where({ id: req.params.id }).first();
    res.json(updatedTag);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to update tag" });
  }
});

// DELETE /api/tags/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await db("tags").where({ id: req.params.id }).del();

    if (!deleted) {
      return res.status(404).json({ error: "Tag not found" });
    }

    res.json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to delete tag" });
  }
});

export default router;
