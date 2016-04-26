'use strict'

resumeContent = angular.module 'ResumeContent', []
.controller 'mainContentController', ($scope, resumeChunkService) ->
  $scope.getCurrentContent = ->
    resumeChunkService.getCurrentChunk()

.directive 'mainContent', ->
  scope: {}
  template: require './main.html'
  controller: 'mainContentController'
  restrict: 'E'

module.exports = resumeContent.name
