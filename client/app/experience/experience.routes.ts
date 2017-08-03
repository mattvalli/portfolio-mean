'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('experience', {
      url: '/experience',
      views: {
        mainContent: {
          template: '<experience></experience>'
        }
      }
    });
}
