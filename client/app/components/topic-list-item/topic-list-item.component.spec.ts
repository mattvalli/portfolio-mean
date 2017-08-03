'use strict';

describe('Component: topicListItem', function() {
  // load the component's module
  beforeEach(module('projectApp.topic-list-item'));

  var topicListItemComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    topicListItemComponent = $componentController('topicListItem', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
