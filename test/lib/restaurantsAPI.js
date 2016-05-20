'use strict';

describe('RestaurantsAPI', function() {
  beforeEach(module('Trucks'));

  var RestaurantsAPI;

  beforeEach(inject(function (_RestaurantsAPI_) {
    RestaurantsAPI = _RestaurantsAPI_;
  }));

  it('RestaurantsAPI should be defined', function() {
    expect(RestaurantsAPI).toBeDefined();
  });
});
