
angular.module('ins', ['ui.router'])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider){
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        abstract: true,
        templateUrl: 'templates/home.html'
      })
      .state('home.feed', {
        url: '/feed',
        views: {
          'navigation': {
            templateUrl: 'templates/feed/navigation.html'
          },
          'content': {
            templateUrl: 'templates/feed/content.html'
          }
        }
      });

    $urlRouterProvider.otherwise('feed');
  })
  .run(function($rootScope){
    $rootScope.posts = [{},{},{},{}]
  });