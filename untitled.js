
drinksControllers.controller('DrinkDetailCtrl', ['$scope', '$routeParams', 'Drink',
  function($scope, $routeParams, Drink) {
    $scope.phone = Drink.get({drinkId: $routeParams.drinkId}, function(drink) {
      $scope.mainImageUrl = drink.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


-----------------------------


// var phonecatApp = angular.module('phonecatApp', []);
// +
// +phonecatApp.controller('PhoneListCtrl', function($scope) {
// +  $scope.phones = [
// +    {'name': 'Nexus S',
// +     'snippet': 'Fast just got faster with Nexus S.'},

var drinkApp = angular.module('drinkApp', [
  'ngRoute',
  'drinksControllers',
  'drinksFilters',
  'drinksServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/drinks', {
        templateUrl: 'partials/drink-list.html',
        controller: 'DrinkListCtrl'
      }).
      when('/drinks/:drinkId', {
        templateUrl: 'partials/drink-detail.html',
        controller: 'DrinkDetailCtrl'
      }).
      otherwise({
        redirectTo: '/drinks'
      });
  }]);


