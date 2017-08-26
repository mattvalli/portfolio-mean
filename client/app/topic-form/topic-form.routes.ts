'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
  .state('topic-list.topic.edit', {
    url: '/edit',
    views: {
      'mainContent@': {
        template: '<topic-form></topic-form>'
      }
    }
  });
}
