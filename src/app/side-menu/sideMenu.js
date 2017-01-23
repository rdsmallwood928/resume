'use strict';

const resumeSideMenu = angular.module('ResumeSideMenu', [])
.controller('sideMenuController', ($scope, $ionicSideMenuDelegate, resumeChunkService, resumeStyleConstants) => {
  $scope.toggleLeft = () => {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.getChunkNames = () => {
    return resumeChunkService.getChunkNames();
  };
})
.directive('resumeSideMenu', () => {
  return {
    scope: {},
    template: require('./sideMenu.html'),
    controller: 'sideMenuController',
    restrict: 'E'
  };
})
.controller('sideMenuItemController', ($rootScope, $scope, resumeChunkService,
  resumeStyleConstants, resumeStyleService, sideMenuEvents) => {

  const hoverStyle = {
    'background-color': resumeStyleConstants.secondaryBackgroundColor
  };

  const normalStyle = {
    'background-color': resumeStyleConstants.backgroundColor
  };

  $scope.linkStyle = resumeStyleService.getLinkStyle();
  $scope.style = normalStyle;
  $scope.name = "Not Found";

  $scope.setHoverStyle = () => {
    $scope.style = hoverStyle;
  };

  $scope.setNormalStyle = () => {
    $scope.style = normalStyle;
  };

  $scope.getIcon = () => {
    return 'icon ' + resumeChunkService.getChunkIcon($scope.name);
  };

  $scope.showThisItem = () => {
    $rootScope.$broadcast(sideMenuEvents.showContent, $scope.name);
  };
})
.constant('sideMenuEvents', {
  showContent: 'SHOW_CONTENT'
})
.directive('resumeSideMenuItem', () => {
  return {
    scope: {
      name: '@'
    },
    template: require('./sideMenuItem.html'),
    controller: 'sideMenuItemController',
    restrict: 'E'
  };
})
.filter('capitalize', () => {
  return (input) => {
    let phrase = "";

    let capitalize = (word) => {
      phrase = phrase + " " + word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    };

    if(typeof input !== 'undefined' && input !== null) {
      for(let aWord of input.split(" ")) {
        capitalize(aWord);
      }
    }
    return phrase;
  };
});
module.exports = resumeSideMenu.name;
