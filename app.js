// var express = require('express');
// var app = express();
var angular = require('angular');

// app.get('/', function(res, req) {
//   res.sendFile(__dirname + '/public/index.html');
// });

angular.module('simpleFinance', ['components']).controller('transactionCtrl', function() {
  var transactionList = this;
  transactionList.transactions = [
    {
      name: "First Transaction",
      type: "deposit",
      amount: 25
    },
    {
      name: "Second Transaction",
      type: "withdrawl",
      amount: -10
    }
  ];
});

// app.listen(3000, function() {
//   console.log('App running on port 3000');
// });
