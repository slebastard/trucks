'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksController', function($scope, RestaurantsAPI) {
    RestaurantsAPI.getRestaurants(function(error, data) {
      if (error) {
        throw error;
      }
      $scope.restaurants = data;
    });

  });
