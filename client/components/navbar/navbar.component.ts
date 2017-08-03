'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class NavbarComponent {
  // Properties
  menu = [
    {
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Experience',
      'state': 'experience'
    },
    {
      'title': 'Topics',
      'state': 'topic-list'
    }
  ];
  isCollapsed = true;
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
