'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksController', function($scope, RestaurantsAPI, $ionicHistory) {
    if (window.localStorage.getItem('restaurantsList')) {
      $scope.restaurants = JSON.parse(window.localStorage.getItem('restaurantsList')).data;
    }
    RestaurantsAPI.getRestaurants()
      .success(function(data) {
        window.localStorage.setItem('restaurantsList', JSON.stringify(data));
        $scope.restaurants = JSON.parse(window.localStorage.getItem('restaurantsList')).data;
      });

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

  });
