import express from "express";
import knex from "knex";


const app = express();
const port = 3001;

// Database connection
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, 
});

// // Update the / route to return a HTML page that fetches the count value from the /user-count
app.get("/", (req, res) => {
  res.send(`
    <div style="
      background-color:DodgerBlue;
      display:flex;
      flex-direction:column;
      text-align:center;
      height:100vh;
      width:100%;
    ">

     <h1 style="font-size:3rem">&#127881 Congratulation! &#127881</h1>
     <h2 style="font-size:2rem">The total number of users is</h2>

      <div
        id="count"
        style="
          margin:auto;
          width:300px;
          height:70px;
          border:solid pink 2px;
          border-radius:10px;
          background:white;
          text-align:center;
          font-size:2rem;
          line-height:70px;
        ">
     </div>
      <script>
        fetch('/user-count')
          .then(response => response.json())
          .then(data => {
            document.getElementById('count').innerText = data[0].count;
          })
          .catch(error => {
            console.error(error);
            document.getElementById('count').innerText = 'Error';
          });
      </script>
</div>
  `);
});


// all-users sorted by id ascending
app.get("/all-users", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT *
    FROM users 
    ORDER BY id ASC;
    `);
  res.json(rows);
});

// unconfirmed-users 
app.get("/unconfirmed-users", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT * 
    FROM users 
    WHERE confirmed_at IS NULL;
    `);
    res.json(rows);
});

// gmail-users 
app.get("/gmail-users", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT * 
    FROM users 
    WHERE email 
    LIKE '%@gmail.com';
    `);
  res.json(rows);
});

// 2022-users 
app.get("/2022-users", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT * 
    FROM users 
    WHERE strftime('%Y', created_at) = '2022';
    `);
  res.json(rows);
});




// last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT last_name, COUNT(*) as count
    FROM users 
    GROUP BY last_name 
    ORDER BY last_name;
    `);
  res.json(rows);
});

// first-user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT * 
    FROM users 
    ORDER BY id ASC 
    LIMIT 1;
    `);
   
    if (rows.length === 0) { 
        return res.status(404).send("No users");
    } 
        res.json(rows);
});



// user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
    const rows = await knexInstance.raw(`
        SELECT COUNT(*) as count 
        FROM users;
    `);

  res.json(rows);
});



// yahoo-users-count should respond with  with how many users there are  with an @yahoo.com email
app.get("/yahoo-users-count", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT  COUNT(*) as yahoo_users_count 
    FROM users 
    WHERE email 
    LIKE '%@yahoo.com';
    `);
  res.json(rows);
});

// 2024-2025-users 
app.get("/2024-2025-users", async (req, res) => {
    const rows = await knexInstance.raw(`
    SELECT *
    FROM users 
    WHERE strftime('%Y', created_at) IN ('2024', '2025');
    `);
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});