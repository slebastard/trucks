'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksDescriptionController', function($scope, $stateParams) {

    console.log($stateParams);
    $scope.dishes = [
      {
        id: 0,
        name: 'Plat 1',
        count: 0
      },
      {
        id: 1,
        name: 'Plat 2',
        count: 0
      }
    ];

    $scope.incCount = function(id) {
      $scope.dishes[id].count++;
    };
  });
