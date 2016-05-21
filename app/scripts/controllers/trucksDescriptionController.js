'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksDescriptionController', function($scope, $stateParams, $window) {
    $scope.windowWidth = $window.innerWidth
    $scope.windowHeight = $window.innerHeight
    $scope.restaurant = $stateParams.restaurant;

    $scope.restaurant.dishes.forEach(function(dish) {
      dish.count = 0;
    });

    $scope.incCount = function(dish) {
      dish.count++;
    };
  });
