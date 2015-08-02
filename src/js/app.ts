/// <reference path="../../typings/tsd.d.ts"/>

import settingsRouting from "./settings.routing"
import feedService from "./feed/feed.service"
import feedRouting from "./feed/feed.routing"
import profileRouting from "./profile/profile.routing"


angular.module('ins', ['ui.router', 'monospaced.elastic', 'angularMoment'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      abstract: true,
      templateUrl: 'templates-cache/home.html'
    });

    $urlRouterProvider.otherwise('feed/all');
  })
  .config(feedRouting)
  .constant('moment', moment)
  .config(settingsRouting)
  .config(profileRouting)
  .service('feed', feedService);