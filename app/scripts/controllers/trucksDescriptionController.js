'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksDescriptionController', function($scope, $stateParams) {

    $scope.restaurant = $stateParams.restaurant;
    console.log($scope.restaurant);
    $scope.restaurant.dishes.forEach(function(dish) {
      dish.count = 0;
    });

    $scope.incCount = function(dish) {
      dish.count++;
    };
  });
