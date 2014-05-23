'use strict';

describe('Service: Teams', function () {

  var teams;

  beforeEach(module('worldcupApp'));

  beforeEach(inject(function (_Teams_) {
    teams = _Teams_;
  }));

  it('should do something', function () {
    for (var i = 0; i < teams.length; i++) {
      var team = teams[i];
      expect(team.name).toBeDefined();
      expect(team.code).toBeDefined();
      console.log(team.code.length);
      expect(team.code.length).toEqual(3);
      expect(team.member).toBeDefined();
    }
  });
});
