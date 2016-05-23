'use strict';
/*
describe('TrucksDescriptionController', inject(function($rootScope) {
  beforeEach(module('Trucks'));

  var $controller;
  var $scope;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
  }));

  var TrucksDescriptionController;
  beforeEach(function() {
    var restaurant = {
      'tel': '+33705432543',
      'type': 'externalKey',
      'description': 'Restaurant de sushis',
      'disponibility': {
        'thursday': [{'10:00:00+00:00': '22:00:00+00:00'}],
        'tuesday': [{'10:00:00+00:00': '22:00:00+00:00'}],
        'sunday': [{'10:00:00+00:00': '22:00:00+00:00'}],
        'friday': [{'10:00:00+00:00': '22:00:00+00:00'}],
        'monday': [{'13:00:00+00:00': '18:00:00+00:00', '10:00:00+00:00': '12:00:00+00:00'}],
        'wednesday': [{'10:00:00+00:00': '22:00:00+00:00'}],
        'saturday': [{'10:00:00+00:00': '22:00:00+00:00'}]
      },
      'address': 'addresse',
      'imageUrl': '',
      'name': 'nom',
      'dishes': [{
        'name': 'Plat 1',
        'id': 0,
        'imageUrl': 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg',
        'description': 'description item 1'
      },
      {
        'name': 'Plat 2',
        'id': 1,
        'imageUrl': 'https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg',
        'description': 'description item 2'
      },
      {
        'name': 'Plat 3',
        'id': 2,
        'imageUrl': null,
        'description': 'description item 3'
      }],
      'id': 8
    };
    TrucksDescriptionController = $controller('TrucksDescriptionController', {$scope: $scope, $stateParams: {restaurant: restaurant}});
  });

  it('TrucksDescriptionController should be defined', function() {
    expect(JSON.stringify($rootScope)).toBe("");
    expect(TrucksDescriptionController).toBeDefined();
  });
  it('increments the amount of item in cart', function() {
    $scope.$digest();
    var toIncrement = {count: 0};
    $scope.incCount(toIncrement);
    $scope.$digest();
    expect(toIncrement.count).toEqual(1);
  });

  it('decrements the amount of items in cart', function() {
    $scope.$digest();
    var toDecrement = {count: 1};
    $scope.decCount(toDecrement);
    $scope.$digest();
    expect(toDecrement.count).toEqual(0);
  });
}));
*/
