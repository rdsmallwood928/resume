angular.module('RobertSmallwoodResume', ['ionic', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
  return $stateProvider.state('app', {
    url: "/app",
    templateUrl: "menu.html",
    controller: 'AppController'
  });
}).controller('AppController', function($scope, $ionicSideMenuDelegate, $log) {
  $log.info('Yo');
  return $scope.toggleLeft(function() {
    return $ionicSideMenuDelegate.toggleLeft();
  });
});
