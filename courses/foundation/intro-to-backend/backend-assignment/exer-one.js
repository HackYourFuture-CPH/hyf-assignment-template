
import express from "express";
import knex from "knex";

const dbFile = "./database.sqlite3"

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,  // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

//  the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  try {
    const rows = await knexInstance("user").select("*").orderBy("id", "asc");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// second route

app.get("/only-names", async (req, res) => {
  const nameRows = await knexInstance.raw("SELECT first_name, last_name FROM user ORDER BY id ASC;");
  res.json(nameRows);
});

// third route
app.get("/only-emails", async (req, res) => {
  const emailRows = await knexInstance.raw("SELECT email FROM user ORDER BY email ASC;");
  res.json(emailRows);
});




app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});