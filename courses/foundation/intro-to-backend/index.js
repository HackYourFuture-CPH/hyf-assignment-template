import express from "express";
import knex from "knex";

const app = express();
app.use(express.json()); // REQUIRED for POST & PUT

// Knex setup
const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

/**
 * HOME ROUTE (HTML)
 */
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Count</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f2f4f8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #333;
          }
          .count {
            font-size: 48px;
            color: #0066cc;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Total Users</h1>
        <div class="count" id="count">Loading...</div>

        <script>
          fetch('/user-count')
            .then(res => res.json())
            .then(data => {
              document.getElementById('count').innerText = data.count;
            })
            .catch(() => {
              document.getElementById('count').innerText = 'Error';
            });
        </script>
      </body>
    </html>
  `);
});

/**
 * LIST USERS (READ ALL)
 */
app.get("/users", async (req, res) => {
  const users = await db("users").select("*");
  res.json(users);
});

/**
 * FETCH ONE USER (READ ONE)
 */
app.get("/users/:id", async (req, res) => {
  const user = await db("users").where({ id: req.params.id }).first();

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

/**
 * CREATE USER
 */
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const [id] = await db("users").insert({ name, email });
  const user = await db("users").where({ id }).first();

  res.status(201).json(user);
});

/**
 * UPDATE USER
 */
app.put("/users/:id", async (req, res) => {
  const { name, email } = req.body;

  const updated = await db("users")
    .where({ id: req.params.id })
    .update({ name, email });

  if (!updated) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = await db("users").where({ id: req.params.id }).first();
  res.json(user);
});

/**
 * DELETE USER
 */
app.delete("/users/:id", async (req, res) => {
  const deleted = await db("users").where({ id: req.params.id }).del();

  if (!deleted) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(204).send();
});

/**
 * USER COUNT
 */
app.get("/user-count", async (req, res) => {
  const result = await db("users").count("id as count");
  res.json({ count: Number(result[0].count) });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
