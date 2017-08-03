'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './topic-list.routes';

export class TopicListComponent {
  // PROPERTIES
  topics;

  /*@ngInject*/
  constructor(
    // Angular
    $http,
    // Third Party
    $state
  ) {
    console.log("(state)", $state.current.name);
    $http.get('http://localhost:3000/api/topics').then(
      res => {
        this.topics = res.data;
      },
      err => {
        console.error("Something went wrong requesting Topics", err);
      }
    );
  }
}

export default angular.module('projectApp.topic-list',
[
  // Angular
  // Third Party
  uiRouter
  // App Components

])
  .config(routes)
  .component('topicList', {
    template: require('./topic-list.html'),
    controller: TopicListComponent,
    controllerAs: 'topicListCtrl'
  })
  .name;
