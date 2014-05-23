'use strict';

angular.module('worldcupApp')
  .controller('MainCtrl', ['$scope', 'Teams', function ($scope, Teams) {
    $scope.teams = Teams;
  }]);
