'use strict';

const resumeContent = angular.module('ResumeContent', [])
.controller('mainContentController', ($scope, resumeChunkService) => {
  $scope.getCurrentContent = () => {
    return resumeChunkService.getCurrentChunk();
  };
})
.directive('mainContent', () => {
  return {
    scope: {},
    template: require('./main.html'),
    controller: 'mainContentController',
    restrict: 'E'
  };
});
module.exports = resumeContent.name;
