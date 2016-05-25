'use strict';

/**
 * @ngdoc overview
 * @name Trucks
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

angular.module('Trucks', ['ionic', 'ngCordova', 'ngResource', 'ngCordovaOauth', 'ionic-native-transitions', 'ngCookies'])
  .value('version', 'v0.0')
  .config(['$httpProvider', function($httpProvider) {
    //$httpProvider.defaults.withCredentials = true;
  }])
  .run(['$http', '$cookies', function($http, $cookies) {
    $cookies.put('csrftoken', 'test token');
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
  }])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider, $ionicNativeTransitionsProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    $ionicConfigProvider.views.transition('none');
    $ionicNativeTransitionsProvider.setDefaultTransition({
      type: 'slide',
      direction: 'left'
    });
    $ionicNativeTransitionsProvider.setDefaultBackTransition({
      type: 'slide',
      direction: 'right'
    });

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
      })
      .state('app.order', {
        url: '/order',
        cache: true,
        params: {
          restaurant: null
        },
        views: {
          'viewContent': {
            templateUrl: 'templates/views/order.html',
            controller: 'OrderController'
          }
        }
      });

    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  });
