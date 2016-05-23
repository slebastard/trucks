'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksController', function($scope, RestaurantsAPI, $ionicHistory) {
    RestaurantsAPI.getRestaurants()
      .success(function(data) {
        $scope.restaurants = data.data;
      });

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

  });
