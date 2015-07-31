
angular.module('ins', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        abstract: true,
        templateUrl: 'templates-cache/home.html'
      })
      .state('home.feed', {
        url: '/feed',
        views: {
          'navigation': {
            templateUrl: 'templates-cache/feed/navigation.html'
          },
          'content': {
            templateUrl: 'templates-cache/feed/content.html'
          }
        }
      });

    $urlRouterProvider.otherwise('feed');
  })
  .run(function($rootScope, $sce){
    $rootScope.posts = [
      {
        name: 'Sam Soffes',
        imageId: '05375831c9c9cda73859a47d6701f9ac',
        text:  $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
        time: new Date(),
        comments: []
      },
      {
        name: 'Sam Soffes',
        imageId: '05375831c9c9cda73859a47d6701f9ac',
        text:  $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
        time: new Date(),
        comments: []
      },
      {
        name: 'Sam Soffes',
        imageId: '05375831c9c9cda73859a47d6701f9ac',
        text:  $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
        time: new Date(),
        comments: []
      }
    ]
  });