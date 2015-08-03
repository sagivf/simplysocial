/// <reference path="../../typings/tsd.d.ts"/>

import settingsRouting from "./settings.routing"
import FeedService from "./feed/feed.service"
import UserService from "./user.service"
import feedRouting from "./feed/feed.routing"
import profileRouting from "./profile/profile.routing"


angular.module('ins', ['ngAnimate', 'ui.router', 'monospaced.elastic', 'angularMoment'])
  .config(function ($stateProvider, $animateProvider, $urlRouterProvider, moment) {
    $animateProvider.classNameFilter(/angular-animate/);

    moment.lang('en', {
      relativeTime : {
        future: "in %s",
        past:   "%s",
        s:  "%ds",
        m:  "1m",
        mm: "%dm",
        h:  "1h",
        hh: "%dh",
        d:  "1d",
        dd: "%dd",
        M:  "30d",
        MM: function (number) {
          return number * 30 + 'd';
        },
        y:  "365d",
        yy: function (number) {
          return number * 365 + 'd';
        }
      }
    });

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
  .service('feed', FeedService)
  .service('user', UserService)
  .run(function($rootScope, $timeout, feed){
    $rootScope.addPost = function(){
      feed.add({
        name: 'Jessica Tuan',
        userImage: 'user-profile.jpg',
        text: $rootScope.newPostOverlay,
        time: moment()
      });

      $rootScope.showMessageWindow = false;
      $timeout(function(){
        $rootScope.newPostOverlay = '';
      });
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      $rootScope.state = toState;
    });
  });