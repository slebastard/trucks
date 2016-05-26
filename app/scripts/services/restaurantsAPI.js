'use strict';

angular.module('Trucks')
  .factory('RestaurantsAPI', function RestaurantsAPI($http, $q) {
    var serverURL = 'https://saladbowl-server.herokuapp.com/';

    var get = function(requestURL, data) {
      var url = serverURL + requestURL;
      if (typeof data === 'object') {
        url += '?';
        _.forEach(data, function(value, key) {
          if (Array.isArray(value)) {
            value.forEach(function(arrayValue) {
              url += key + '=' + arrayValue + '&';
            });
          }
          else {
            url += key + '=' + value + '&';
          }
        });
      }
      return $http({
        method: 'GET',
        url: url
      });
    };

    var post = function(requestURL, data) {
      var url = serverURL + requestURL;
      return $http({
        method: 'POST',
        url: url,
        data: data
      });
    };

    var testGetConnection = function() {
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

    var testPostConnection = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;

      post('restaurants/test.json')
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
      return function(data) {return get(url, data);};
    };

    return {
      testGetConnection: testGetConnection,
      testPostConnection: testPostConnection,
      getRestaurants: getFactory('restaurants/restaurants.json'),
      generateCommand: getFactory('restaurants/generate_command.json')
    };
  });
