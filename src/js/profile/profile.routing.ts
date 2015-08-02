export default function ($stateProvider) {
  function setPosts(posts){
    this.posts = posts;
  };

  $stateProvider
    .state('home.profile', {
      url: '/profile',
      views: {
        'navigation': {
          templateUrl: 'templates-cache/profile/navigation.html',
          controller: function(user){
            this.user = user.fetch();
          },
          controllerAs: 'navigation'
        }
      }
    })
    .state('home.profile.me', {
      url: '/me',
      views: {
        'content@home': {
          templateUrl: 'templates-cache/profile/content.html',
          controller: setPosts,
          controllerAs: 'content',
          resolve: {
            posts: function(feed, user){
              return feed.fetch({
                name: user.fetch().name
              });
            }
          }
        }
      }
    })
    .state('home.profile.followers', {
      url: '/followers',
      views: {
        'content@home': {
          template: '<div class="ins-tbd">Under Construction</div>'
        }
      }
    })
    .state('home.profile.following', {
      url: '/following',
      views: {
        'content@home': {
          template: '<div class="ins-tbd">Under Construction</div>'
        }
      }
    });
}