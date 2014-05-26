'use strict';

describe('Service: Teams', function () {

  var teams;

  beforeEach(module('worldcupApp'));

  beforeEach(inject(function (_Teams_) {
    teams = _Teams_;
  }));

  it('should define teams correctly', function () {
    expect(teams.length).toEqual(32);
    for (var i = 0; i < teams.length; i++) {
      var team = teams[i];
      expect(team.name).toBeDefined();
      expect(team.code).toBeDefined();
      expect(team.code.length).toEqual(3);
      expect(team.group).toBeDefined();
      expect(team.group.length).toEqual(1);
      expect(team.member).toBeDefined();
    }
  });

  it('should assign the correct number of teams to each group', function () {
    var groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (var ind = 0; ind < groups.length; ind++) {
      var matches = 0;
      for (var i = 0; i < teams.length; i++) {
        if (groups[ind] === teams[i].group) {
          matches++;
        }
      }
      expect(matches).toEqual(4);
    }
  });
});
