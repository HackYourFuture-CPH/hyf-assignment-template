import express from "express";
import knexLibrary from "knex";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as userModel from "./db/users.js";

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Knex connection to SQLite database
 */
const knexInstance = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: "./users.sqlite3",
  },
  useNullAsDefault: true,
});

// Load home HTML from a separate file to keep route concise
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOME_HTML = fs.readFileSync(path.join(__dirname, "templates", "home.html"), "utf8");

/**
 * HOME ROUTE — concise
 */
app.get("/", (req, res) => {
  res.type("html").send(HOME_HTML);
});

/**
 * USER COUNT
 */
app.get("/user-count", async (req, res) => {
  try {
    const row = await userModel.countUsers(knexInstance);
    // row is { total_users: n }
    res.json(row);
  } catch (error) {
    // If the users table doesn't exist, return zero instead of an error
    const msg = (error && error.message) || '';
    if (msg.includes('no such table')) {
      return res.json({ total_users: 0 });
    }
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRUD: list users
 */
app.get("/users", async (req, res) => {
  try {
    const rows = await userModel.getAllUsers(knexInstance);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRUD: get user by id
 */
app.get("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await userModel.getUserById(knexInstance, id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRUD: create user
 */
app.post("/users", async (req, res) => {
  try {
    const { first_name, last_name, email, confirmed_at, created_at } = req.body;
    if (!first_name || !email) {
      return res.status(400).json({ error: "first_name and email are required" });
    }
    const newUser = {
      first_name,
      last_name: last_name || null,
      email,
      confirmed_at: confirmed_at || null,
      created_at: created_at || new Date().toISOString(),
    };
    const inserted = await userModel.createUser(knexInstance, newUser);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRUD: update user
 */
app.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const changes = req.body;
    const existing = await userModel.getUserById(knexInstance, id);
    if (!existing) return res.status(404).json({ error: "User not found" });
    const updated = await userModel.updateUser(knexInstance, id, changes);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRUD: delete user
 */
app.delete("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const existing = await userModel.getUserById(knexInstance, id);
    if (!existing) return res.status(404).json({ error: "User not found" });
    await userModel.deleteUser(knexInstance, id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Other helpful routes delegated to model functions
 */
app.get("/unconfirmed-users", async (req, res) => {
  try {
    res.json(await userModel.getUnconfirmedUsers(knexInstance));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/gmail-users", async (req, res) => {
  try {
    res.json(await userModel.getGmailUsers(knexInstance));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/2022-users", async (req, res) => {
  try {
    res.json(await userModel.getUsersByYear(knexInstance, 2022));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/first-user", async (req, res) => {
  try {
    const user = await userModel.getFirstUser(knexInstance);
    if (!user) return res.status(404).json({ error: "No users found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/last-name-count", async (req, res) => {
  try {
    res.json(await userModel.lastNameCount(knexInstance));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * NEW ROUTES
 */
// Search users by name or email: /search?q=alex
app.get('/search', async (req, res) => {
  try {
    const q = (req.query.q || '').trim();
    const rows = await userModel.searchUsers(knexInstance, q);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Recent users: /recent-users?limit=5
app.get('/recent-users', async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 5;
    const rows = await userModel.recentUsers(knexInstance, limit);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Confirm a user (set confirmed_at): POST /users/:id/confirm
app.post('/users/:id/confirm', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const existing = await userModel.getUserById(knexInstance, id);
    if (!existing) return res.status(404).json({ error: 'User not found' });
    const updated = await userModel.confirmUser(knexInstance, id);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * START SERVER
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
