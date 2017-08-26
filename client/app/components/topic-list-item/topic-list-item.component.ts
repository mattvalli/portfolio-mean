'use strict';
const angular = require('angular');

export class TopicListItemComponent {
  // PROPERTIES
  topic;
  /*@ngInject*/
  constructor() {

  }

  $onInit() {
    console.log('topic-list-item.topic', this.topic);
  }
}

export default angular.module('projectApp.topic-list-item', [])
  .component('topicListItem', {
    template: require('./topic-list-item.html'),
    bindings: { topic: '<' },
    controller: TopicListItemComponent,
    controllerAs: 'topicListItemCtrl'
  })
  .name;
