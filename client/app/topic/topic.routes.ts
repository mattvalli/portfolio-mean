'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('topic-list.topic', {
      url: '/:topic_id',
      views: {
        'mainContent@': {
          template: '<topic></topic>'
        }
      }
    });
}
