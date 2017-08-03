'use strict';

describe('Component: TopicListComponent', function() {
  // load the controller's module
  beforeEach(module('projectApp.topic.list'));

  var TopicListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TopicListComponent = $componentController('topic-list', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
