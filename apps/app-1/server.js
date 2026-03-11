const express = require("express");
const app = express();
const port = 3000;
const name = "app-1";

// GET /hw → JSON response
app.get("/hw", (req, res) => {
  res.json({ message: `Hello World in ${name}!` });
});

// GET / → Health
app.get("/", (req, res) => {
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`REST API listening on http://localhost:${port}`);
});
