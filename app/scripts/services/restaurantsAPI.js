'use strict';

angular.module('Trucks')
  .factory('RestaurantsAPI', function RestaurantsAPI($http, $q) {
    var serverURL = 'https://saladbowl-server.herokuapp.com/';

    var get = function(requestURL) {
      var url = serverURL + requestURL;
      return $http({
        method: 'GET',
        url: url
      });
    };

    /*
    var post = function(requestURL, data) {
      var url = serverURL + requestURL;
      return $http({
        method: 'POST',
        url: url,
        data: data
      });
    };
    */
    var testConnection = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;

      get('restaurants/test.json')
        .success(function(data, status, headers, config) {
          var expectedData = {
            test: 'test',
            test2: 'test2'
          };
          if (_.isEqual(data, expectedData)) {
            deferred.resolve({
              data: data,
              status: status,
              headers: headers,
              config: config
            });
          }
          else {
            deferred.reject({
              data: data,
              status: status,
              headers: headers,
              config: config
            });
          }
        })
        .error(function(data, status, headers, config) {
          deferred.reject({
            data: data,
            status: status,
            headers: headers,
            config: config
          });
        });

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };

      return promise;
    };

    var getFactory = function(url) {
      return function(params) {
        var urlWithParams = url;
        if (params) {
          urlWithParams += '?';
          params.forEach(function(index,value) {
          var paramLine = index + '=' + value + '&';
          urlWithParams += paramLine;
        });
        }
        return get(url);
      };
    };

    return {
      testConnection: testConnection,
      getRestaurants: getFactory('restaurants/restaurants.json')
    };
  });
