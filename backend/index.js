const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Bom dia brasil" });
});

app.listen(3333);
