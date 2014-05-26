'use strict';

angular.module('worldcupApp')
  .directive('worldCupGroup', function () {
    return {
      templateUrl: '/views/group.html',
      restrict: 'A'
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the group directive');
      // }
    };
  });
