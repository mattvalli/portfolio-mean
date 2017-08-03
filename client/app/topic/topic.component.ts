'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './topic.routes';

export class TopicComponent {
  // PROPERTIES
  _id;
  description;
  /*@ngInject*/
  constructor($state) {
    console.log("($state.current.name, topic_id)", $state.current.name, $state.params.topic_id);
    this._id = $state.params.topic_id;
    this.description = "Sample Description";
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
