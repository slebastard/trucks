'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('MapController', function($rootScope, $ionicHistory, $scope) {
    $rootScope.sideMenu.style.visibility = 'hidden';
    var mapDiv = document.getElementById('map_canvas');
    var map;

    document.addEventListener('deviceready', function() {
      // Define a div tag with id='map_canvas'
      mapDiv = document.getElementById('map_canvas');

      // Initialize the map plugin
      map = plugin.google.maps.Map.getMap(mapDiv);
    });

    $scope.goBack = function() {
      map.remove();
      $ionicHistory.goBack();
    };
  });
