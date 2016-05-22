'use strict';

angular.module('Trucks')
  .controller('SandboxController', function($scope, RestaurantsAPI) {
    $scope.connection = 'On est pas encore connecté!';
    $scope.testConnection = function() {
      RestaurantsAPI.testConnection()
        .success(function(result) {
          $scope.connection = 'Youhou on est connecté!';
          $scope.data = result.data;
          $scope.status = result.status;
          $scope.headers = result.headers;
          $scope.config = result.config;
        })
        .error(function(result) {
          $scope.connection = 'Oups on n\'a pas réussi à se connecter!';
          $scope.data = result.data;
          $scope.status = result.status;
          $scope.headers = result.headers;
          $scope.config = result.config;
        });
    };
  });
