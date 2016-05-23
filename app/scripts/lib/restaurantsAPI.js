'use strict';

angular.module('Trucks')
  .factory('RestaurantsAPI', function RestaurantsAPI($http) {
    //var serverURL = 'http://0.0.0.0:5000/';
    var serverURL = 'https://saladbowl-server.herokuapp.com/';

    var testConnection = function(callback) {
      var url = serverURL + 'restaurants/test.json';
      $http.get(url)
        .success(function(data) {
          var expectedData = {
            test: 'test',
            test2: 'test2'
          };
          callback(null, _.isEqual(data, expectedData));
        })
        .error(function(error) {
          callback(error, null);
        });
    };

    return {
      testConnection: testConnection
    };
  });
