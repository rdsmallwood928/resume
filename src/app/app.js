'use strict';

require('ionic');

const sideMenu = require('./side-menu/sideMenu');
const mainContent = require('./main/main');
const chunks = require('./chunk/chunk');
const styles = require('./styles/styles');

angular.module('RobertSmallwoodResume', [
  'ionic',
  'ui.router',
  sideMenu,
  mainContent,
  chunks,
  styles
])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
      url: '/',
      template: '<resume-side-menu></resume-side-menu>',
      controller: 'homeController'
  });
  return;
})
.controller('homeController',  ($scope, $ionicSideMenuDelegate, $log) => {
  $log.info('Yo');
});
