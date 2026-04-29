import express from "express";
import db from "../../../db.js";

const router = express.Router();
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
    const { fields } = req.body || {};

    // Prevent mixing query param + fields
    if (q && fields) {
      return res.status(400).json({
        error:
          "Provide either 'q' as query parameter OR 'fields' in body, not both.",
      });
    }

    // If no q → return all tags
    if (!q) {
      const allTags = await db("tags").select("*");
      return res.json(allTags);
    }

    // Search by tag name
    const results = await db("tags").where("name", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("GET /api/tags/search error:", error);
    res.status(500).json({ error: "Failed to search tags" });
  }
});

// POST /api/tags/search
router.post("/search", async (req, res) => {
  try {
    const { q, fields } = req.body;

    // ❗ If both q AND fields are provided → 400 Bad Request
    if (q && fields) {
      return res.status(400).json({
        error: "Provide either 'q' or 'fields', not both.",
      });
    }

    // If no q → return all tags
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
    const { id } = req.params;

    const tag = await db("tags").where({ id }).first();

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
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Tag name is required" });
    }

    const [id] = await db("tags").insert({ name });

    const newTag = await db("tags").where({ id }).first();
    res.status(201).json(newTag);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to create tag" });
  }
});

// PUT /api/tags/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await db("tags").where({ id }).update({ name });

    if (!updated) {
      return res.status(404).json({ error: "Tag not found" });
    }

    const updatedTag = await db("tags").where({ id }).first();
    res.json(updatedTag);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: "Failed to update tag" });
  }
});

// DELETE /api/tags/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await db("tags").where({ id }).del();

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
