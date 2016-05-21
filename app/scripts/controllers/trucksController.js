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
        name: 'restaurant 1',
        dishes: [
        {
          id: 0,
          name: 'Plat 1',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        },
        {
          id: 1,
          name: 'Plat 2',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        }
        ]
      },
      {
        id: 1,
        name: 'restaurant 2',
        dishes: [
        {
          id: 0,
          name: 'Plat 1',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        },
        {
          id: 1,
          name: 'Plat 2',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        }
        ]
      },
      {
        id: 2,
        name: 'restaurant 3',
        dishes: [
        {
          id: 0,
          name: 'Plat 1',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        },
        {
          id: 1,
          name: 'Plat 2',
          description: 'description',
          imageUrl: 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
        }
        ]
      }
    ];
    // do something with $scope

  });
