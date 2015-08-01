/// <reference path="../../typings/tsd.d.ts"/>

import feedRouting from "./feed.routing"

angular.module('ins', ['ui.router', 'monospaced.elastic'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      abstract: true,
      templateUrl: 'templates-cache/home.html'
    });

    $urlRouterProvider.otherwise('feed');
  })
  .config(feedRouting)
  .run(function ($rootScope, $sce) {
    $rootScope.posts = [
      {
        name: 'Sam Soffes',
        userImage: 'sam-soffes.png',
        text: $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
        time: new Date(),
        comments: [
          {
            name: 'Jed Bridges',
            userImage: 'sam-soffes.png',
            text: $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
          }
        ]
      },
      {
        name: 'Meg Robichaud',
        userImage: 'meg-robichaud.png',
        text: $sce.trustAsHtml('My view this '),
        time: new Date(),
        image: 'post1.jpg',
        comments: []
      }
    ]
  });