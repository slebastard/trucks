'use strict';

/**
 * @ngdoc function
 * @name Trucks.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Trucks')
  .controller('TrucksDescriptionController', function($scope) {

  	$scope.numberItems = 2;
	$scope.dishes = {
		{ ID: 0, name: "Plat 1", count: 0}
		{ ID: 1, name: "Plat 2", count: 0}
	};
  	
  $scope.incCount = function(ID)
  {
	  $scope.dishes[ID].count++;
  }

})