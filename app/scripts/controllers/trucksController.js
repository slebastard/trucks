'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksController', function($scope) {

    $scope.restaurants = [
      {
        id: 0,
        name: 'restaurant 1'
      },
      {
        id: 1,
        name: 'restaurant 2'
      },
      {
        id: 2,
        name: 'restaurant 3'
      }
    ];
    // do something with $scope

  });
