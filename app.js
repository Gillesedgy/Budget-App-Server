// Import express
const express = require("express");
// Import Cors
const cors = require("cors");
// Configure app express
const app = express();
const transactionController = require("./controller/transactionController");
// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/transactions", transactionController);
//ROUTES

app.get("/", (req, res) => {
  res.status(200).send("Welcome to your Budget App");
});
// Error
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
