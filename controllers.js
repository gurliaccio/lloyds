'use strict';

/* Controllers */

var drinksApp = angular.module('drinksApp', []);

drinksApp.controller('DrinkListCtrl', function($scope, $http) {
  $http.get('drinks.json').
    success(function(data) {
      $scope.drinks = data;

    });
    
  $scope.orderProp = 'name';
});
