'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:MainController
 * @description
 * # MainController
 */
angular.module('Trucks')
  .controller('MainController', function($rootScope) {
    $rootScope.sideMenu = document.getElementsByTagName('ion-side-menu')[0];

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState.name !== 'app.around') {
        $rootScope.sideMenu.style.visibility = 'visible';
      }
    });
  });
