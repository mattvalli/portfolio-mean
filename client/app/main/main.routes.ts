'use strict';


export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        mainContent: {
          template: '<main></main>'
        }
      }
    });
};
