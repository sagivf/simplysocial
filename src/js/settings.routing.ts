export default function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates-cache/settings/settings.html'
    });
}