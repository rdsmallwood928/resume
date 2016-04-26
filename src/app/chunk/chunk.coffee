'use strict'

_ = require('lodash')

chunkModule = angular.module 'resumeChunks', []

.factory 'resumeChunkService', ($rootScope, sideMenuEvents) ->
  currentChunk = 'all'
  chunks =
    'skills':
      'content':
        Environments: 'Linux/Unix, Windows, Trading'
        Programming: 'Java (J2SE), Swing, MYSQL, Hibernate, Design Patterns, Multi-Threading'
        Development: 'Agile'
      'icon':
        'ion-wand'
    'employment history':
      'content':
        'Software Engineer, OptionsCity Software Inc. -- Chicago, IL 2009-2014': "Worked client side on a trading platform powered by Java.
          The system utilized Swing to present large amounts real time data to traders in real time.

          Implemented ability for our client to communicate with Excel.  This was done using a C# RTD Server as COM object
          that would communicate with our client.  The RTD Server would get requests from Excel and then would communicate over
          a Socket to our client app.  This would set up subscriptions that would then push data back to the RTD server and into 
          Excel

          Implemented “Reconciliation Wizard” that would allow traders to cross reference positions with clearing firms with the
          positions that our system had very quickly.  This was implemented by reading in .csv files that clients would receive
          from clearing firms and requesting position information from our server.  Then the two positions were combined into a row
          in a JTable with an adjust button that would allow for corrections.

          Implemented “Broker” initiative.  This involved adding coloring and aliases to trade accounts so that brokers could quickly
          identify which trade accounts orders and trades were associated with.  This was done by persisting new fields to
          the database then publishing changes to all connected users.

          Implemented new \“widget\”, the  Flex Option Manager, this widget was used to price Flex Options in the new energy market
          space that the business team was targeting.  Was implemented using MVP design pattern.
          Was required to write unit tests to test implementations using JUnit as well as Stub objects.

          Other duties included working with support to help solve issues in production.  This would involve looking at logs to
          find exceptions or debugging/troubleshooting the application with support.  This often involved profiling the application
          (VisualVM) to increase speed."
        'Support Engineer, OptionsCity Software Inc -- Chicago, IL 2008-2009': "Supported traders on multiple exchanges to help
          debug issues in production.  This would often include troubleshooting application level issues over the phone with
          remote desktop.
          Other tasks included technical issues such as searching logs often using Grep and other unix tools to parse
          out log information.  This would allow us to debug issues such as why a bad price was sent to the market."
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
