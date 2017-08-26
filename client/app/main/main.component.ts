const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

// CONSTANTS
const ENDPOINT_INIT = 'http://localhost:3000/api/topics/favorites/true';

export class MainController {
  $http;
  topics;
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor(
    // Angular
    $window,
    $http
  ) {
    this.$http = $http;
    $http.get(ENDPOINT_INIT).then(
      res => {
        this.topics = $window._.orderBy(res.data, ['ui_id'], ['asc']);
      },
      err => {
        console.error('Something went wrong requesting Topics', err);
      }
    );
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('projectApp.main', [
  uiRouter])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
