'use strict'

resumeSideMenu = angular.module 'ResumeSideMenu', []
.controller 'sideMenuController', ($scope, $ionicSideMenuDelegate, resumeChunkService, resumeStyleConstants) ->
  $scope.toggleLeft = ->
    $ionicSideMenuDelegate.toggleLeft()

  $scope.getChunkNames = ->
    resumeChunkService.getChunkNames()

.directive 'resumeSideMenu', ->
  scope: {}
  template: require './sideMenu.html'
  controller: 'sideMenuController'
  restrict: 'E'

.controller 'sideMenuItemController', ($rootScope, $scope, resumeChunkService,
                                      resumeStyleConstants, resumeStyleService,
                                      sideMenuEvents) ->
  hoverStyle =
    'background-color': resumeStyleConstants.secondaryBackgroundColor

  normalStyle =
    'background-color': resumeStyleConstants.backgroundColor

  $scope.linkStyle = resumeStyleService.getLinkStyle()
  $scope.style = normalStyle
  $scope.name = "Not Found"

  $scope.setHoverStyle = ->
    $scope.style = hoverStyle

  $scope.setNormalStyle = ->
    $scope.style = normalStyle

  $scope.getIcon = ->
    "icon #{resumeChunkService.getChunkIcon($scope.name)}"

  $scope.showThisItem = ->
    $rootScope.$broadcast sideMenuEvents.showContent, $scope.name

.constant "sideMenuEvents",
  showContent: 'SHOW_CONTENT'

.directive 'resumeSideMenuItem', ->
  scope: {
    name: '@'
  }
  template: require './sideMenuItem.html'
  controller: 'sideMenuItemController'
  restrict: 'E'

.filter 'capitalize', ->
  (input) ->
    phrase = ""

    capitalize = (word) ->
      phrase = "#{phrase}#{word.charAt(0).toUpperCase()}#{word.substr(1).toLowerCase()} "

    if input?
      capitalize word for word in input.split " "
    phrase

module.exports = resumeSideMenu.name
