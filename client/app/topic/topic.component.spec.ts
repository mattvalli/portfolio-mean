'use strict';

describe('Component: TopicComponent', function() {
  // load the controller's module
  beforeEach(module('projectApp.Topic'));

  var TopicComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TopicComponent = $componentController('Topic', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
