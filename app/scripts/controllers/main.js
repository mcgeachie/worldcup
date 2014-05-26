'use strict';

angular.module('worldcupApp')
  .controller('MainCtrl', ['$scope', 'Teams', function ($scope, Teams) {

    var groupTeams = function() {
      var groups = [
        { groupName: 'A', teams: [] },
        { groupName: 'B', teams: [] },
        { groupName: 'C', teams: [] },
        { groupName: 'D', teams: [] },
        { groupName: 'E', teams: [] },
        { groupName: 'F', teams: [] },
        { groupName: 'G', teams: [] },
        { groupName: 'H', teams: [] }
      ];

      for (var i = 0; i < $scope.teams.length; i++) {
        for (var ind = 0; ind < groups.length; ind++) {
          if (groups[ind].groupName === $scope.teams[i].group) {
            groups[ind].teams.push($scope.teams[i]);
          }
        }
      }

      return groups;
    };

    $scope.teams = Teams;
    $scope.groups = groupTeams();
  }]);
