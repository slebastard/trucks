'use strict';

angular.module('Trucks')
  .controller('SandboxController', function($scope, RestaurantsAPI) {
    $scope.connection = 'On est pas encore connecté!';
    RestaurantsAPI.getRestaurants(function(error, data) {
      if (data) {
        $scope.connection = data;
      }
      else {
        $scope.connection = 'Oups on a pas réussi à se connecter!';
      }
    });
  });