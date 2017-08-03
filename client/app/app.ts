'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');



const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');



import {routeConfig} from './app.config';

// Structural Components
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
// CSS/LESS
import './app.less';

// Page Components
import TopicListComponent from './topic-list/topic-list.component';
import TopicListItemComponent from './components/topic-list-item/topic-list-item.component';
import TopicComponent from './topic/topic.component';
import ExperienceComponent from './experience/experience.component';

angular.module('projectApp', [
  // Angular
  ngCookies,
  ngResource,
  ngSanitize,

  // Third Party
  uiRouter,
  uiBootstrap,
  navbar,
  footer,
  main,
  constants,

  // Components
  TopicListComponent,
  TopicListItemComponent,
  TopicComponent,
  ExperienceComponent,
  //AboutModule,

  // Utilities
  util
])
  .config(routeConfig)
;

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['projectApp'], {
      strictDi: true
    });
  });
