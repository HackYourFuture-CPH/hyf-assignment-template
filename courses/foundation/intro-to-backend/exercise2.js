import express from "express";
import knex from "knex";

const app = express();
const port = 3000;
app.use(express.json());

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./tasks.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.get("/", async (req, res) => {
  const count = await knexInstance.raw("SELECT COUNT(*) FROM task");
  result = res.json(count);
  console.log("count" + result);
  res.send(`
    <h1>Main page</h1>
    <h2>There're ${result} tasks in your ToDo list</h2>
    `);
});

// LOADS ALL TASKS
app.get("/all-tasks", async (req, res) => {
  // we use async here to show that we are going to be awaiting something
  const tasks = await knexInstance.raw("SELECT * FROM task");
  // we use 'await' to make sure get back the information from the database to send back to the client
  res.json(tasks);
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM user ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here
app.post("/users", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || name.length === 0) return response.sendStatus(400);

  const [id] = await knexInstance("user").insert({
    name,
    email,
    phone,
  });

  res.status(200).json({
    id,
    name,
    email,
    phone,
  });
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const deletedCount = await knexInstance("user").where({ id }).del();

  res.status(200).json({
    message: "User deleted",
    id: Number(id),
  });
});

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedCount = await knexInstance("user")
    .where({ id })
    .update({ name });

  const updatedUser = await knexInstance("user").where({ id }).first();

  res.json(updatedUser);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
