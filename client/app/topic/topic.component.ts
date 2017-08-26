'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './topic.routes';

export class TopicComponent {
  // PROPERTIES
  _id;
  ui_id;
  topic;
  /*@ngInject*/
  constructor($http, $state) {
    console.log('($state.current.name, ui_id)', $state.current.name, $state.params.ui_id);
    this.ui_id = $state.params.ui_id;
    // Get Topic
    $http.get('/api/topics/name/' + this.ui_id).then(
      res => {
        console.log('/api/topics/name/' + this.ui_id, res);
        this.topic = res.data[0];
      },
      err => {
        console.log('ERROR: /api/topics/:name', this.ui_id, err);
      }
    );

  }
}
// Inject Service
export default angular.module('projectApp.topic', [uiRouter])
  .config(routes)
  .component('topic', {
    template: require('./topic.html'),
    controller: TopicComponent,
    controllerAs: 'topicCtrl'
  })
  .name;
