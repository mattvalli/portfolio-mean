'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './topic-form.routes';

export class TopicFormComponent {
  topic;
  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('projectApp.topic-form', [uiRouter])
  .config(routes)
  .component('topicForm', {
    template: require('./topic-form.html'),
    controller: TopicFormComponent,
    controllerAs: 'topicFormCtrl'
  })
  .name;
