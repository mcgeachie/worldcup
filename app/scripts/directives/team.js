'use strict';

angular.module('worldcupApp')
  .directive('worldCupTeam', function () {
    return {
      templateUrl: '/views/team.html',
      restrict: 'A',
      replace: true
    //   link: function postLink(scope, element, attrs) {
    //     element.text('this is the Team directive');
    //   }
    };
  });
