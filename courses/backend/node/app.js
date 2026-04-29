import express from "express";
import db from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Class!");
});

app.get("/api/snippets", async (req, res) => {
    try {
        const snippets = await db("snippets").select("*").orderBy("id", "asc");
        res.json(snippets);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch snippets" });
    }
});

app.get("/api/snippets/:id", async (req, res) => {
    const snippetId = Number(req.params.id);

    if (!Number.isInteger(snippetId) || snippetId < 1) {
        return res.status(400).json({ error: "Snippet id must be a positive integer" });
    }

    try {
        const snippet = await db("snippets").where({ id: snippetId }).first();

        if (!snippet) {
            return res.status(404).json({ error: "Snippet not found" });
        }

        res.json(snippet);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch snippet" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});