/// <reference path="../../typings/tsd.d.ts"/>

import feedRouting from "./feed.routing"
import settingsRouting from "./settings.routing"


angular.module('ins', ['ui.router', 'monospaced.elastic', 'angularMoment'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      abstract: true,
      templateUrl: 'templates-cache/home.html'
    });

    $urlRouterProvider.otherwise('feed');
  })
  .config(feedRouting)
  .constant('moment', moment)
  .config(settingsRouting)
  .run(function ($rootScope, $sce, moment) {
    $rootScope.posts = [
      {
        name: 'Sam Soffes',
        userImage: 'sam-soffes.png',
        text: $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a> Good stuff from <a>@designmodo!</a>'),
        time: moment().add(-3, 'minutes'),
        comments: [
          {
            name: 'Jed Bridges',
            userImage: 'sam-soffes.png',
            text: $sce.trustAsHtml('Great way to start the week. Thanks for sharing!'),
          },{
            name: 'Ren walker',
            userImage: 'sam-soffes.png',
            text: $sce.trustAsHtml('Ren walker'),
          }
        ]
      },
      {
        name: 'Meg Robichaud',
        userImage: 'meg-robichaud.png',
        text: $sce.trustAsHtml('My view this '),
        time: moment().add(-25, 'minutes'),
        image: 'post1.jpg',
        comments: []
      }
    ]
  });