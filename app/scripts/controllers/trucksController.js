'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksController', function($scope, $window, RestaurantsAPI) {
    $scope.windowWidth = $window.innerWidth;
    $scope.windowHeight = $window.innerHeight;
    RestaurantsAPI.getRestaurants(function(error, data) {
      if (error) {
        throw error;
      }
      $scope.restaurants = data;
    });

  });
