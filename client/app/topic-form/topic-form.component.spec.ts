'use strict';

describe('Component: TopicFormComponent', function() {
  // load the controller's module
  beforeEach(module('projectApp.topic-form'));

  var TopicFormComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TopicFormComponent = $componentController('topic-form', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
