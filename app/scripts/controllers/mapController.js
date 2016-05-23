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
      var GOOD_TASTY = new plugin.google.maps.LatLng(48.8415978, 2.584430099999963);

      // Initialize the map plugin
      map = plugin.google.maps.Map.getMap(mapDiv, {
        'camera': {
          'latLng': GOOD_TASTY,
          'zoom': 17
        }
      });
      map.addEventListener(plugin.google.maps.event.MAP_READY, function() {

        map.addMarker({
          'position': GOOD_TASTY,
          'title': 'Good & Tasty !'
        }, function(marker) {

          marker.showInfoWindow();

        });

      });
    });

    $scope.goBack = function() {
      map.remove();
      $ionicHistory.goBack();
    };
  });
