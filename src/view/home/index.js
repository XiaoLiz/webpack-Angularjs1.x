import './home.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';

export default angular.module('app.home', [uiRouter, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
