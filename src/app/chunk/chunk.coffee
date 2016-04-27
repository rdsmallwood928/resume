'use strict'

_ = require('lodash')

chunkModule = angular.module 'resumeChunks', []

.factory 'resumeChunkService', ($rootScope, sideMenuEvents) ->
  currentChunk = 'all'
  chunks =
    'skills':
      'content':
        Languages: 'Java, Javascript, Go, Bash'
        Technologies: 'Swing, MySQL, JUnit, Gradle, Angular, Coffeescript, ES6, Docker, Ionic, Gulp, WebRTC, Karma, Mocha, Chai'
        Platforms: 'Linux, EC2, EBS'
        Development: 'Agile, TDD'
      'icon':
        'ion-wand'
    'employment history':
      'content':
        'Software Engineer, ReadyTalk -- Denver, CO 2014-Present': "Worked on several teams in order to deliver video web conferencing
          platform that was powered by WebRTC.  Client was written using Coffeescript/Angular.  Backend used several different components all
          run in Docker containers and deployed using Jenkins/Gradle/Docker-Compose to Amazon EC2 and EBS.  The components themselves were
          written in Java and Node.js.  Helped to design and architect the system and implemented authentication, routing of conferences,
          failover, and zero-down time deploys"

        'Software Engineer, OptionsCity Software Inc. -- Chicago, IL 2009-2014': "Worked client side on a trading platform powered by Java.
          The system utilized Swing to present large amounts real time data to traders.  Tasks often included designing new
          \"widgets\" in the system that provide a new window or screen with relevant information trader. These were typically
          implemented using an MVP/MVC pattern with the Content component containing Swing components. Was also responsible for
          delivering messaging to the server and working with the backend team if there was a change
          that was necessary in order to complete the widget.

          Was tasked with implementing ability for our client to communicate with Excel.  This was done using a C# RTD Server as COM object
          that would communicate with our client.  The RTD Server would get requests from Excel and then would communicate over
          a Socket to our client application.  This would set up subscriptions that would then push data back to the RTD server and into
          Excel.

          Other duties included working with support to help solve issues in production.  This would involve looking at logs to
          find exceptions or debugging/troubleshooting the application with support.  This often involved profiling the application
          (VisualVM) to increase speed."
        'Support Engineer, OptionsCity Software Inc -- Chicago, IL 2008-2009': "Supported traders on multiple exchanges to help
          debug issues in production.  This would often include troubleshooting application level issues over the phone and with
          remote desktop.  Other tasks included technical issues such as searching logs often using Grep and other unix tools to parse
          out log information."
      'icon':
        'ion-briefcase'
    'education':
      'content':
        'Eastern Illinois University, Charleston, IL': ""
        "Bachelor of Science, May 2008": ""
        "Major:  Math & Computer Science": ""
        "Cumulative GPA:  3.6/4.0": ""
       'icon':
         'ion-university'

  $rootScope.$on sideMenuEvents.showContent, (event, name) ->
    currentChunk = name

  getCurrentChunk = ->
    if currentChunk is "all"
      return getChunkNames()
    else
      return [currentChunk]

  getChunk = (chunk) ->
    chunkLookup = chunks[chunk]
    if !chunkLookup?
      chunkLookup.content = ['Chunk not found']
    chunkLookup.content

  getChunkIcon = (chunk) ->
    chunkLookup = chunks[chunk]
    if !chunkLookup?
      chunkLookup = {}
      chunkLookup.icon = 'ion-help'
    chunkLookup.icon

  getChunkNames = ->
    _.keys chunks

  getChunk: getChunk
  getChunkIcon: getChunkIcon
  getChunkNames: getChunkNames
  getCurrentChunk: getCurrentChunk

.controller 'chunkController', ($scope, resumeChunkService, sideMenuEvents) ->
  $scope.name = 'Not Right'
  $scope.headerStyle = {
    'background-color': '#fdf6e3'
    'color': '#859900'
  }

  $scope.getChunk = ->
    resumeChunkService.getChunk $scope.name

  $scope.getIcon = ->
    "icon + #{resumeChunkService.getChunkIcon $scope.name}"

  $scope.toCaps = (word) ->
    word.toUpperCase()

.directive 'chunk', ->
  scope: {
    name: '@'
    headerStyle: '@'
    icon: '@'
  }
  restict: 'E'
  template: require './chunk.html'
  controller: 'chunkController'

module.exports = chunkModule.name
