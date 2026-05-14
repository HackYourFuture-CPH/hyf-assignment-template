import bcrypt from "bcryptjs";

export async function seed(knex) {
  // 1. CLEAR TABLES (in FK‑safe order)
  await knex("snippets").del();
  await knex("tags").del();
  await knex("users").del();

  // 2. USERS

  const passwordAdmin = bcrypt.hashSync("admin123", 10);
  const passwordJohn = bcrypt.hashSync("john123", 10);

  await knex("users").insert([
    {
      id: 1,
      username: "admin",
      email: "admin@example.com",
      password: passwordAdmin,
    },
    {
      id: 2,
      username: "john",
      email: "john@example.com",
      password: passwordJohn,
    },
  ]);

  // 3. TAGS

  await knex("tags").insert([
    { id: 1, name: "javascript" },
    { id: 2, name: "nodejs" },
    { id: 3, name: "database" },
  ]);

  // 4. SNIPPETS

  await knex("snippets").insert([
    {
      id: 1,
      user_id: 1,
      tag_id: 1,
      title: "Declare a variable",
      content: "const x = 10;",
    },
    {
      id: 2,
      user_id: 2,
      tag_id: 2,
      title: "Start an Express server",
      content: "app.listen(3000)",
    },
    {
      id: 3,
      user_id: 1,
      tag_id: null,
      title: "Snippet without tag",
      content: "console.log('Hello world');",
    },
  ]);
}
