import angular from 'angular'

angular.module('simpleFinance', [])
.controller('transactionController', function($http){
  $http.get('/transactions').then((response) => {
    this.transactions = response.data;
  });
}).component('transactionBox', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/transaction-box.html'
  };
})
