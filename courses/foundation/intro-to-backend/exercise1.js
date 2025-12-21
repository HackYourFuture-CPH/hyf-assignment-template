import express from "express";

const app = express();
const port = 3000;

function getCurrentYear() {
  const d = new Date();
  const year = d.getFullYear();
  return year;
}

app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

app.get("/currentYear", (req, res) => {
  const currentYear = getCurrentYear();
  res.send(currentYear);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
