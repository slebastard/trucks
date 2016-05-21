'use strict';

angular.module('Trucks')
  .controller('SandboxController', function($scope, RestaurantsAPI) {
    $scope.connection = 'On est pas encore connecté!';
    RestaurantsAPI.testConnection(function(error, data) {
      if (data) {
        $scope.connection = 'Youhou on est connecté!';
      }
      else {
        $scope.connection = 'Oups on a pas réussi à se connecter!';
      }
    });
  });