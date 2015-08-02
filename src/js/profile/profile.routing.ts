export default function ($stateProvider) {
  $stateProvider
    .state('home.profile', {
      url: '/profile',
      views: {
        'navigation': {
          templateUrl: 'templates-cache/profile/navigation.html'
        }
      }
    })
    .state('home.profile.me', {
      url: '/me',
      views: {
        'content@home': {
          templateUrl: 'templates-cache/profile/content.html'
        }
      }
    })
    .state('home.profile.followers', {
      url: '/followers',
      views: {
        'content@home': {
          templateUrl: 'templates-cache/profile/content.html'
        }
      }
    })
    .state('home.profile.following', {
      url: '/following',
      views: {
        'content@home': {
          templateUrl: 'templates-cache/profile/content.html'
        }
      }
    });
}