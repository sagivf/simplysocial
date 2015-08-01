export default function ($stateProvider) {
  $stateProvider
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
}