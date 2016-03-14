'use strict'

_ = require('lodash')

chunkModule = angular.module 'resumeChunks', []

.factory 'resumeChunkService', () ->
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
        'Software Engineer, OptionsCity Software Inc. -- Chicago, IL 2009-2014': "Worked on client side software for an electronic
          trading platform.  The system utilized Swing to present large amounts of critical data about markets in real time.
          Major accomplishments include:
          Implemented ability for our client to communicate with Excel.  This was done using a C# RTD Server as COM object
          that would communicate with our client.  This allowed users to push lots of data from a client to an Excel spreadsheet.
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

  getCurrentChunk = ->
    getChunkNames()

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

.controller 'chunkController', ($scope, resumeChunkService) ->
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
