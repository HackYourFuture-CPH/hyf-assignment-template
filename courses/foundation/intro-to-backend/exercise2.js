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

async function getTasksCount() {
  const result = await knexInstance.raw("SELECT COUNT(*) FROM task");
  return result[0]["COUNT(*)"];
}

function renderTasksPage(tasksCount) {
  return `
  <div style="
  max-width: 500px;
  margin: 80px auto;
  padding: 32px 24px;
  background: #ecececff;
  border-radius: 16px;
  border: 2px solid rgba(0,0,0,0.6);
  text-align: center;
">
    <h1 style="
    text-transform: uppercase;
    color: #126619ff; 
    text-shadow: 1px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 2px;">Main page</h1>

    <h2 style="
    font-family: "Arial";
    color: #535353ff;
    ">There're ${tasksCount} tasks in your ToDo list</h2>
    </div>
    `;
}

app.get("/", async (req, res) => {
  const tasksCount = await getTasksCount();
  const page = renderTasksPage(tasksCount);
  res.send(page);
});

async function getAllTasks() {
  const result = await knexInstance.raw("SELECT * FROM task");
  return result;
}

// LOADS ALL TASKS
app.get("/all-tasks", async (req, res) => {
  const tasks = await getAllTasks();
  res.json(tasks);
});

async function getAllUsers() {
  const result = await knexInstance.raw("SELECT * FROM user ORDER BY id ASC;");
  return result;
}

app.get("/all-users", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

// TODO implement more routes here
async function createUSer({ name, email, phone }) {
  const [id] = await knexInstance("user").insert({
    name,
    email,
    phone,
  });

  return {
    id,
    name,
    email,
    phone,
  };
}

app.post("/users", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || name.length === 0) return res.sendStatus(400);

  const user = await createUSer({ name, email, phone });
  res.status(201).json(user);
});

async function deleteUserById(id) {
  return knexInstance("user").where({ id }).del();
}

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const deletedCount = await deleteUserById(id);

  res.status(200).json({
    message: "User deleted",
    id: Number(id),
  });
});

async function updateUsernameById(id, name) {
  const updatedCount = await knexInstance("user")
    .where({ id })
    .update({ name });

  return knexInstance("user").where({ id }).first();
}

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res.sendStatus(400);
  }

  const updatedUser = await updateUsernameById(id, name);

  if (!updatedUser) {
    return res.status(404);
  }

  res.json(updatedUser);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
