'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Trucks')
  .controller('OrderController', function($scope, $stateParams) {
    RestaurantsAPI.getRestaurants()
      .success(function(data) {
        $scope.restaurants = data.data;
      });
    $scope.order = null;
  });
