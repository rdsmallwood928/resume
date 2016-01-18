angular.module 'RobertSmallwoodResume', ['ionic', 'ui.router']

.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state 'app',
      url: "/app",
      templateUrl: "menu.html"
      controller: 'AppController'

.controller 'AppController',  ($scope, $ionicSideMenuDelegate, $log) ->
  $log.info 'Yo'
  $scope.toggleLeft ->
    $ionicSideMenuDelegate.toggleLeft()

