export default function ($stateProvider) {
  function setPosts(posts, masonary){
    this.masonary = masonary;
    this.posts = posts;
  };

  $stateProvider
    .state('home.feed', {
      url: '/feed',
      views: {
        'navigation': {
          templateUrl: 'templates-cache/feed/navigation.html',
          controller: function(feed, $timeout){
            this.keyDown = function(event){
              if (event.keyCode == 13){
                feed.add({
                  name: 'Jessica Tuan',
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
            posts: function(feed){
              return feed.fetch();
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
              return feed.fetch('photos');
            },
            masonary: function(){
              return 'yes';
            }
          }
        }
      }
    });
}