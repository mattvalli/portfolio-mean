'use strict';

describe('Component: AboutComponent', function() {
  // load the controller's module
  beforeEach(module('projectApp.about'));

  var AboutComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AboutComponent = $componentController('about', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
