import express from "express";
import db from "./db.js";
import snippetsRouter from "./api/snippets.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Class!");
});

app.get("/api/db-check", async (req, res) => {
    try {
        const result = await db("snippets").count({ total: "id" }).first();
        res.json({ ok: true, snippetsCount: Number(result?.total ?? 0) });
    } catch (error) {
        res.status(500).json({ ok: false, error: "Database query failed" });
    }
});

app.use("/api/snippets", snippetsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});