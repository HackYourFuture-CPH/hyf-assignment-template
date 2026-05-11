app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Dashboard</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 100px; }
          .count { font-size: 3em; color: #1187e8ff; }
        </style>
      </head>
      <body>
        <h1>Total Users</h1>
        <div id="user-count" class="count">Loading...</div>
        <script>
          fetch('/user-count')
            .then(r => r.json())
            .then(data => {
              document.getElementById('user-count').textContent = data.count;
            });
        </script>
      </body>
    </html>
  `);
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});