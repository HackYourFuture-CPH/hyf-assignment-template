import express from "express";
import db from "../db.js";

const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
    try {
        const rows = await db("snippets")
            .join("users", "snippets.user_id", "users.id")
            .where("snippets.is_private", 0)
            .select(
                "snippets.id",
                "snippets.created_at",
                "snippets.title",
                "snippets.contents",
                "snippets.is_private",
                "users.id as user_id",
                "users.first_name",
                "users.last_name"
            )
            .orderBy("snippets.id", "asc");

        const snippets = rows.map((row) => ({
            id: row.id,
            created_at: row.created_at,
            title: row.title,
            contents: row.contents,
            is_private: row.is_private === 1,
            user: {
                id: row.user_id,
                first_name: row.first_name,
                last_name: row.last_name,
            },
        }));

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
