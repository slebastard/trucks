'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksDescriptionController', function($scope, $stateParams, $ionicHistory) {

    $scope.restaurant = $stateParams.restaurant;
    $scope.uniquePrice = 7.50;
    $scope.restaurant.dishes.forEach(function(dish) {
      dish.count = 0;
      dish.total = 0;
      $scope.$watch(dish.count, function(newValue, oldValue, $scope) {
        dish.total = newValue * $scope.uniquePrice;
      });
    });

    $scope.incCount = function(dish) {
      dish.count++;
    };

    $scope.decCount = function(dish) {
      if(dish.count > 0) {
        dish.count--;
      }
    };

    $scope.resetCount = function(dish) {
      dish.count = 0;
    };

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };
  });
