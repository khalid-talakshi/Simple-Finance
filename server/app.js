"use strict"

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil.js');
mongoUtil.connect();

app.use(express.static(__dirname + '/../client'));

app.get('/transactions', (req, res) => {
  let transactions = mongoUtil.transactions();
  transactions.find({}).toArray((err, docs) => {
    res.json(docs);
  });
});

app.listen(8000, () => {
  console.log("Connected on port 8000");
});
