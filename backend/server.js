// server.js
const express = require("express");
const cors = require("cors");
const users = require("./usersData");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/birthdays", (req, res) => {
  const { name, email, dob } = req.body;
  users.push({ name, email, dob });
  res.json({ message: "Saved!" });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
