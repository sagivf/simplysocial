export default function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates-cache/settings/settings.html',
      controllerAs: 'settings',
      controller: function($scope, user){
        this.user = user.fetch();
      }
    });
}