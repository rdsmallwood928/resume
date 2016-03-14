'use strict'

require 'ionic'

sideMenu = require './side-menu/sideMenu'
mainContent = require './main/main'
chunks = require './chunk/chunk'
styles = require './styles/styles'

angular.module 'RobertSmallwoodResume', [
  'ionic',
  'ui.router',
  sideMenu,
  mainContent,
  chunks,
  styles
]

.config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise "/"

  $stateProvider
    .state '/',
      url: '/'
      template: '<resume-side-menu></resume-side-menu>'
      controller: 'homeController'
  return

.controller 'homeController',  ($scope, $ionicSideMenuDelegate, $log) ->
  $log.info 'Yo'
