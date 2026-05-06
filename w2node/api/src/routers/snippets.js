import express from "express";
import db from "../../../db.js";
import { z } from "zod";

const router = express.Router();

const snippetCreateSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(6),
  user_id: z.number().min(1),
});

//Unsafe endpoint(intentionally vulnerable)

/*router.get("/", async (req, res) => {
  let query = db.select("*").from("snippets");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy); // Vulnerable!
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});
*/

//fixed version of the vulnerable end point
router.get("/", async (req, res) => {
  try {
    const allowedColumns = ["id", "title", "created_at", "user_id", "tag_id"];
    const allowedDirections = ["asc", "desc"];

    let query = db("snippets");

    if (req.query.sort) {
      const [column, direction = "asc"] = req.query.sort.split(":");

      if (!allowedColumns.includes(column)) {
        return res.status(400).json({ error: "Invalid sort column" });
      }

      if (!allowedDirections.includes(direction.toLowerCase())) {
        return res.status(400).json({ error: "Invalid sort direction" });
      }

      query = query.orderBy(column, direction);
    }

    const data = await query;
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/snippets/search?q=...
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      const allSnippets = await db("snippets").select("*");
      return res.json(allSnippets);
    }
    const results = await db("snippets")
      .where("title", "like", `%${q}`)
      .orWhere("content", "like", `%${q}%`);
    res.json(results);
  } catch (error) {
    console.error("Get/api/snippets/search error:", error);
    res.status(500).json({ error: "Failed to search snippets" });
  }
});
// POST /api/snippets/search
router.post("/search", async (req, res) => {
  try {
    const { q, fields } = req.body;
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
    const snippet = await db("snippets").where({ id: req.params.id }).first();

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
    //validate input
    const data = snippetCreateSchema.parse(req.body);
    //Insert into DB
    const [id] = await db("snippets").insert(data);
    const created = await db("snippets").where({ id }).first();
    res.status(201).json(created);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/snippets/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, content, tag_id } = req.body;

    const updated = await db("snippets")
      .where({ id: req.params.id })
      .update({
        title,
        content,
        tag_id: tag_id || null,
      });

    if (!updated) {
      return res.status(404).json({ error: "Snippet not found" });
    }

    const updatedSnippet = await db("snippets")
      .where({ id: req.params.id })
      .first();
    res.json(updatedSnippet);
  } catch (error) {
    console.error("PUT /api/snippets/:id error:", error);
    res.status(500).json({ error: "Failed to update snippet" });
  }
});

// DELETE /api/snippets/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await db("snippets").where({ id: req.params.id }).del();

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
