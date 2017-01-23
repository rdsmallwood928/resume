'use strict';

const resumeStyleModule = angular.module('ResumeStyleModule', [])
.factory('resumeStyleService', (resumeStyleConstants) => {
  const getLinkStyle = () => {
    return {
      color: resumeStyleConstants.unvisitedLink,
      cursor: 'auto'
    };
  };
  return {
    getLinkStyle: getLinkStyle
  };
})
.constant('resumeStyleConstants', {
  backgroundColor: '#fdf6e3',
  majorHeaderColor: 'd33682',
  minorHeaderColor: '#859900',
  primaryColor: '#657b83',
  secondaryBackgroundColor: '#eee8d5',
  unvisitedLink: '#cb4b16',
  visitedLink: '#b58900',
});
module.exports = resumeStyleModule.name;
