'use strict';

describe('Component: ExperienceComponent', function() {
  // load the controller's module
  beforeEach(module('projectApp.experience'));

  var ExperienceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ExperienceComponent = $componentController('experience', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
