'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './experience.routes';

export class ExperienceComponent {
  /*@ngInject*/
  constructor() {
    
  }
}

export default angular.module('projectApp.experience', [uiRouter])
  .config(routes)
  .component('experience', {
    template: require('./experience.html'),
    controller: ExperienceComponent,
    controllerAs: 'experienceCtrl'
  })
  .name;
