// import 'bootstrap/scss/bootstrap.scss';
import './common/styles/index.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import home from './view/home';

angular.module('app', [uiRouter, home])
  .config(routing);

