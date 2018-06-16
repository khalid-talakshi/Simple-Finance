"use strict"

let mongo = require('mongodb');
let client = mongo.MongoClient
let _db;

module.exports = {
  connect() {
    client.connect('mongodb://localhost:27017', (err, client) => {
      if (err) {
        console.log("Error connecting to mongodb - Check Mongod connection");
        process.exit(1);
      }
      _db = client.db('simpleFinance');
      console.log("Connected to Mongo");
    });
  },
  transactions() {
    return _db.collection('transactions');
  }
}
