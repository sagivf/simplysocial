export default function ($stateProvider) {
  function setPosts($rootScope, $window, posts, masonary, modernizr){
    $rootScope.$on('feed:add', (event, post) => {
      this.posts.unshift(post);
    });

    this.masonary = masonary;
    this.posts = posts;

    if(!modernizr.csscolumns && $window.Ins && $window.Ins.IE && $window.Ins.IE.setMasonary) {
      $window.Ins.IE.setMasonary();
    }
  }

  $stateProvider
    .state('home.feed', {
      url: '/feed',
      views: {
        'navigation': {
          templateUrl: 'templates-cache/feed/navigation.html',
          controller: function($rootScope, feed, $timeout, user){
            var userDetails = user.fetch();
            this.keyDown = function(event){
              if (event.keyCode == 13){
                feed.add({
                  name: userDetails.name,
                  userImage: 'user-profile.jpg',
                  text: this.post,
                  time: moment()
                });
                $timeout(function(){
                  this.post = '';
                }.bind(this));

              }
            };
          },
          controllerAs: 'navigation'
        }
      }
    })
    .state('home.feed.all', {
      url: '/all?masonary',
      params: {
        masonary: 'no'
      },
      views: {
        'content@home': {
          templateUrl: 'templates-cache/feed/content.html',
          controller: setPosts,
          controllerAs: 'content',
          resolve: {
            posts: function(feed, user){
              return feed.fetch({
                feed: user.fetch().name
              });
            },
            masonary: function($stateParams){
              return $stateParams.masonary;
            }
          }
        }
      }
    })
    .state('home.feed.photos', {
      url: '/photos',
      views: {
        'content@home': {
          templateUrl: 'templates-cache/feed/content.html',
          controller: setPosts,
          controllerAs: 'content',
          resolve: {
            posts: function(feed){
              return feed.fetch({
                type: 'photo'
              });
            },
            masonary: function(){
              return 'yes';
            }
          }
        }
      }
    });
}