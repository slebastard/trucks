'use strict';

angular.module('Trucks')
  .controller('SandboxController', function($scope, RestaurantsAPI) {
    $scope.getConnection = 'On est pas encore connecté!';
    $scope.testGetConnection = function() {
      RestaurantsAPI.testGetConnection()
        .success(function(result) {
          $scope.getConnection = 'Youhou on est connecté!';
          $scope.getData = result.data;
          $scope.getStatus = result.status;
          $scope.getHeaders = result.headers;
          $scope.getConfig = result.config;
        })
        .error(function(result) {
          $scope.getConnection = 'Oups on n\'a pas réussi à se connecter!';
          $scope.getData = result.data;
          $scope.getStatus = result.status;
          $scope.getHeaders = result.headers;
          $scope.getConfig = result.config;
        });
    };
    $scope.postConnection = 'On est pas encore connecté!';
    $scope.testPostConnection = function() {
      RestaurantsAPI.testPostConnection()
        .success(function(result) {
          $scope.postConnection = 'Youhou on est connecté!';
          $scope.postData = result.data;
          $scope.postStatus = result.status;
          $scope.postHeaders = result.headers;
          $scope.postConfig = result.config;
        })
        .error(function(result) {
          $scope.postConnection = 'Oups on n\'a pas réussi à se connecter!';
          $scope.postData = result.data;
          $scope.postStatus = result.status;
          $scope.postHeaders = result.headers;
          $scope.postConfig = result.config;
        });
    };
    $scope.testCommand = function() {
      RestaurantsAPI.generateCommand({
        name: 'test ionic',
        deliveryDate: '2016-05-25T10:55:39.681Z',
        userTel: '+33650544817',
        restaurantId: 1,
        dishId: [
          1
        ],
        dishNb: [
          5
        ]
      })
        .success(function(result) {
          $scope.command = result;
        })
        .error(function(result) {
          $scope.command = result;
        });
    };
  });
