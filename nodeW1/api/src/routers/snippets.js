import express from "express";
import db from "../../../db.js";
const router = express.Router();
// GET /api/snippets
router.get("/", async (req, res) => {
  try {
    const snippets = await db("snippets").select("*");
    res.json(snippets);
  } catch (error) {
    console.error("GET /api/snippets error:", error);
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});
// GET /api/snippets/search?q=...
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    const { fields } = req.body || {};

    // ❗ If both q AND fields are provided → 400 Bad Request
    if (q && fields) {
      return res.status(400).json({
        error:
          "Provide either 'q' as query parameter OR 'fields' in body, not both.",
      });
    }

    // If no q → return all snippets
    if (!q) {
      const allSnippets = await db("snippets").select("*");
      return res.json(allSnippets);
    }

    // Search title OR content
    const results = await db("snippets")
      .where("title", "like", `%${q}%`)
      .orWhere("content", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("GET /api/snippets/search error:", error);
    res.status(500).json({ error: "Failed to search snippets" });
  }
});

// POST /api/snippets/search
router.post("/search", async (req, res) => {
  try {
    const { q, fields } = req.body;

    // ❗ If both q AND fields are provided → 400 Bad Request
    if (q && fields) {
      return res.status(400).json({
        error: "Provide either 'q' or 'fields', not both.",
      });
    }

    // If no q → return all snippets
    if (!q) {
      const allSnippets = await db("snippets").select("*");
      return res.json(allSnippets);
    }

    const results = await db("snippets")
      .where("title", "like", `%${q}%`)
      .orWhere("content", "like", `%${q}%`);

    res.json(results);
  } catch (error) {
    console.error("POST /api/snippets/search error:", error);
    res.status(500).json({ error: "Failed to search snippets" });
  }
});
// GET /api/snippets/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const snippet = await db("snippets").where({ id }).first();

    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }

    res.json(snippet);
  } catch (error) {
    console.error("GET /api/snippets/:id error:", error);
    res.status(500).json({ error: "Failed to fetch snippet" });
  }
});
// POST /api/snippets
router.post("/", async (req, res) => {
  try {
    const { title, content, tag_id } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const [id] = await db("snippets").insert({
      title,
      content,
      tag_id: tag_id || null,
    });

    const newSnippet = await db("snippets").where({ id }).first();
    res.status(201).json(newSnippet);
  } catch (error) {
    console.error("POST /api/snippets error:", error);
    res.status(500).json({ error: "Failed to create snippet" });
  }
});

// PUT /api/snippets/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tag_id } = req.body;

    const updated = await db("snippets")
      .where({ id })
      .update({
        title,
        content,
        tag_id: tag_id || null,
      });

    if (!updated) {
      return res.status(404).json({ error: "Snippet not found" });
    }

    const updatedSnippet = await db("snippets").where({ id }).first();
    res.json(updatedSnippet);
  } catch (error) {
    console.error("PUT /api/snippets/:id error:", error);
    res.status(500).json({ error: "Failed to update snippet" });
  }
});

// DELETE /api/snippets/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await db("snippets").where({ id }).del();

    if (!deleted) {
      return res.status(404).json({ error: "Snippet not found" });
    }

    res.json({ message: "Snippet deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/snippets/:id error:", error);
    res.status(500).json({ error: "Failed to delete snippet" });
  }
});

export default router;
