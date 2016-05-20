'use strict';

/**
 * @ngdoc overview
 * @name Trucks
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

angular.module('Trucks', ['ionic', 'ngCordova', 'ngResource'])
  .value('version', 'v0.0')

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.around', {
        url: '/around',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/map.html',
            controller: 'MapController'
          }
        }
      })
      .state('app.cart', {
        url: '/cart',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/cart.html',
            controller: 'CartController'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.trucks', {
        url: '/trucks',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/trucks.html',
            controller: 'TrucksController'
          }
        }
      })
      .state('app.trucksDescription', {
        url: '/trucksDescription',
        cache: true,
        params: {
          restaurant: null
        },
        views: {
          'viewContent': {
            templateUrl: 'templates/views/trucksDescription.html',
            controller: 'TrucksDescriptionController'
          }
        }
      })
      .state('app.sandbox', {
        url: '/sandbox',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/sandbox.html',
            controller: 'SandboxController'
          }
        }
      });

    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  });
