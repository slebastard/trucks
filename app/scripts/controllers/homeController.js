'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Trucks')
  .controller('HomeController', function($scope, $http) {

    $scope.myHTML = {'1': '2'};
    $http.get('http://0.0.0.0:5000/restaurants/restaurants.json')
      .then(function(response) {
        $scope.myHTML = response.data.data[0];
      });
  });
