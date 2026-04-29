import express from "express";
import db from "../db.js";

const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
    try {
        const snippets = await db("snippets").select("*").orderBy("id", "asc");
        response.json(snippets);
    } catch (error) {
        response.status(500).json({ error: "Failed to fetch snippets" });
    }
});

// GET /api/snippets/:id
router.get("/:id", async (request, response) => {
    const snippetId = Number(request.params.id);

    if (!Number.isInteger(snippetId) || snippetId < 1) {
        return response.status(400).json({ error: "Snippet id must be a positive integer" });
    }

    try {
        const snippet = await db("snippets").where({ id: snippetId }).first();

        if (!snippet) {
            return response.status(404).json({ error: "Snippet not found" });
        }

        response.json(snippet);
    } catch (error) {
        response.status(500).json({ error: "Failed to fetch snippet" });
    }
});

export default router;
