'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('topic-list', {
      url: '/topics',
      views: {
        mainContent: {
          template: '<topic-list></topic-list>'
        }
      }
    });
}
