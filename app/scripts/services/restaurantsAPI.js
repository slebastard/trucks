'use strict';

angular.module('Trucks')
  .factory('RestaurantsAPI', function RestaurantsAPI($http) {
    //var serverURL = 'http://0.0.0.0:5000/';
    var serverURL = 'https://saladbowl-server.herokuapp.com/';

    var testConnection = function(callback) {
      get('restaurants/test.json', function(error, data) {
        var expectedData = {
          test: 'test',
          test2: 'test2'
        };

        callback(error, _.isEqual(data, expectedData));
      });
    };

    var getRestaurants = function(callback) {
      get('restaurants/restaurants.json', function(error, data) {
        callback(error, data.data);
      });
    };

    var get = function(requestURL, callback) {
      $http.get(serverURL + requestURL)
        .success(function(data) {
          callback(null, data);
        })
        .error(function(error) {
          callback(error, null);
        });
    };

    return {
      testConnection: testConnection,
      getRestaurants: getRestaurants
    };
  });
