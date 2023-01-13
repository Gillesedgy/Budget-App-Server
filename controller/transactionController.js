//DEPENDENCIES
const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

//GET
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:index", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[index]) {
    res.status(200).json(transactionsArray[index]);
  } else {
    res.redirect("/*");
  }
});
// PUT
transactions.put("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    console.log(transactionsArray[id])
    transactionsArray[index] = req.body;
    res.status(200).json(transactionsArray[id]);
    // console.log(transactionsArray[index]);
  } else {
    res.status(404).json({ msg: "Transaction not found" });
  }
});

// DELETE
transactions.delete("/:index", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[index]) {
    const deletedTransactions = transactionsArray.splice(id, 1);
    res.status(200).json(deletedTransactions);
  } else {
    res.status(404).json({ msg: "transaction not found" });
  }
});

// POST
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.status(200).json(transactionsArray.at(-1));
});

module.exports = transactions;
