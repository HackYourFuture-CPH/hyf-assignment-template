import { readFile } from "fs/promises";
import express from "express";
import knexLibrary from "knex";
import path from "path";

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: "test.sqlite3",
  },
  useNullAsDefault: true,
});

async function getFile() {
  const fileContent = await readFile("test.txt", "utf-8");
  return fileContent;
}

// main();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/file", async (request, response) => {
  const fileContent = await readFile("test.txt", "utf-8");
  response.send(fileContent);
});

app.get("/hello", (request, response) => {
  const username = request.query.name;
  if (username === "pass") {
    response.send(`this is from my hello routes ${username}`);
  } else {
    response.send("you cannot access this");
  }
});

app.get("/get-users", async (req, res) => {
  const result = await knex.raw("SELECT * FROM users");
  res.send(result);
});

app.get("/get-user", async (req, res) => {
  const name = req.query.name;
  const result = await knex.raw(`SELECT * FROM users WHERE name='${name}'`);
  res.send(result[0]);
});

app.get("/user-count", async (req, res) => {
  const result = await knex.raw("SELECT COUNT(*) as userCount FROM users");
  res.send(result[0].userCount);
});

app.post("/create-user", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;

  await knex.raw(
    `insert into users (name,password) values('${name}', '${password}')`
  );
  res.send("user created");
});

app.delete("/delete-user", async (req, res) => {
  const name = req.body.name;

  await knex.raw(`DELETE FROM users WHERE name='${name}'`);
  res.send("user deleted");
});

app.put("/update-user-password", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  await knex.raw(
    `UPDATE users SET password='${password}' WHERE name='${name}'`
  );
  res.send(`password updated to ${password}`);
});

const port = process.env.PORT ?? 3000;
app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log(`server is ready and running in port ${port}`);
});


// also here is postman link: https://bakraniris-3817171.postman.co/workspace/Default-workspace~e8530c68-1f67-462e-923f-c22f6245976f/collection/50891402-81a56e71-9efa-45b9-892c-ce0a3a630985?action=share&creator=50891402