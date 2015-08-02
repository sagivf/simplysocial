(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typings/tsd.d.ts"/>
var settings_routing_1 = require("./settings.routing");
var feed_service_1 = require("./feed/feed.service");
var user_service_1 = require("./user.service");
var feed_routing_1 = require("./feed/feed.routing");
var profile_routing_1 = require("./profile/profile.routing");
angular.module('ins', ['ui.router', 'monospaced.elastic', 'angularMoment'])
    .config(function ($stateProvider, $urlRouterProvider, moment) {
    moment.lang('en', {
        relativeTime: {
            future: "in %s",
            past: "%s",
            s: "%ds",
            m: "1m",
            mm: "%dm",
            h: "1h",
            hh: "%dh",
            d: "1d",
            dd: "%dd",
            M: "30d",
            MM: function (number) {
                return number * 30 + 'd';
            },
            y: "365d",
            yy: function (number) {
                return number * 365 + 'd';
            }
        }
    });
    $stateProvider.state('home', {
        abstract: true,
        templateUrl: 'templates-cache/home.html'
    });
    $urlRouterProvider.otherwise('feed/all');
})
    .config(feed_routing_1["default"])
    .constant('moment', moment)
    .config(settings_routing_1["default"])
    .config(profile_routing_1["default"])
    .service('feed', feed_service_1["default"])
    .service('user', user_service_1["default"])
    .run(function ($rootScope, $timeout, feed) {
    $rootScope.addPost = function () {
        feed.add({
            name: 'Jessica Tuan',
            userImage: 'user-profile.jpg',
            text: $rootScope.newPostOverlay,
            time: moment()
        });
        $rootScope.showMessageWindow = false;
        $timeout(function () {
            $rootScope.newPostOverlay = '';
        });
    };
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $rootScope.state = toState;
    });
});

},{"./feed/feed.routing":2,"./feed/feed.service":3,"./profile/profile.routing":4,"./settings.routing":5,"./user.service":6}],2:[function(require,module,exports){
function default_1($stateProvider) {
    function setPosts($rootScope, posts, masonary) {
        var _this = this;
        $rootScope.$on('feed:add', function (event, post) {
            _this.posts.unshift(post);
        });
        this.masonary = masonary;
        this.posts = posts;
    }
    ;
    $stateProvider
        .state('home.feed', {
        url: '/feed',
        views: {
            'navigation': {
                templateUrl: 'templates-cache/feed/navigation.html',
                controller: function ($rootScope, feed, $timeout) {
                    this.keyDown = function (event) {
                        if (event.keyCode == 13) {
                            feed.add({
                                name: 'Jessica Tuan',
                                userImage: 'user-profile.jpg',
                                text: this.post,
                                time: moment()
                            });
                            $timeout(function () {
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
                    posts: function (feed, user) {
                        return feed.fetch({
                            feed: user.fetch().name
                        });
                    },
                    masonary: function ($stateParams) {
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
                    posts: function (feed) {
                        return feed.fetch({
                            type: 'photo'
                        });
                    },
                    masonary: function () {
                        return 'yes';
                    }
                }
            }
        }
    });
}
exports["default"] = default_1;

},{}],3:[function(require,module,exports){
var FeedService = (function () {
    function FeedService($sce, moment, $rootScope) {
        this.$sce = $sce;
        this.moment = moment;
        this.$rootScope = $rootScope;
        this.posts = [
            {
                name: 'Sam Soffes',
                userImage: 'sam-soffes.png',
                text: this.$sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a> Good stuff from <a>@designmodo!</a>'),
                time: moment().add(-3, 'minutes'),
                comments: [
                    {
                        name: 'Jed Bridges',
                        userImage: 'sam-soffes.png',
                        text: this.$sce.trustAsHtml('Great way to start the week. Thanks for sharing!')
                    }, {
                        name: 'Ren walker',
                        userImage: 'sam-soffes.png',
                        text: this.$sce.trustAsHtml('Ren walker')
                    }
                ]
            },
            {
                name: 'Meg Robichaud',
                userImage: 'meg-robichaud.png',
                text: this.$sce.trustAsHtml('My view this morning is simple beautiful.. <a>instagram.com/p/mV0PUrHRwQ</a>'),
                time: moment().add(-25, 'minutes'),
                image: 'meg.jpg'
            },
            {
                name: 'Kerem Suer',
                userImage: 'kerum-suer.jpg',
                text: this.$sce.trustAsHtml('8 Apps to Turn Your Pipe Dreams Into Prototypes <a>on.mash.to/1oubyu8</a>'),
                time: moment().add(-50, 'minutes')
            },
            {
                name: 'Liang Shi',
                userImage: 'liang-shi.jpg',
                text: this.$sce.trustAsHtml('How to get animations out of your head. <a>http://bit.ly/1q7BngO</a>  Funny and useful.'),
                time: moment().add(-1, 'hours'),
                comments: []
            },
            {
                name: 'Vitor Leal',
                userImage: 'vitor-leal.jpg',
                text: this.$sce.trustAsHtml('You have to see this bike. It will make your daily commute a absolute joy ride! <a>vimeo.com/p/mV0PUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                image: 'vitor.jpg',
                comments: []
            },
            {
                name: 'Pallavi Gupta',
                userImage: 'marco.jpg',
                text: this.$sce.trustAsHtml('You have to see this bike. It will make your daily commute a absolute joy ride! <a>vimeo.com/p/mV0PUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                comments: []
            },
            {
                name: 'Jenny Shen',
                userImage: 'jenny.jpg',
                text: this.$sce.trustAsHtml('Perfect day to be taking pictures <a>instagram.com/p/mV0PUrHRwQ/</a>'),
                time: moment().add(-1, 'hour'),
                comments: []
            },
            {
                name: 'Jonathan Moreira',
                userImage: 'jonathan.jpg',
                text: this.$sce.trustAsHtml('Thoughtful brand desicion vs, emotional brand desicion. <a>ow.ly/vtT2i</a>'),
                time: moment().add(-1, 'hour'),
                comments: []
            },
            {
                name: 'Jon Brennan',
                userImage: 'jed.jpg',
                text: this.$sce.trustAsHtml('Had some time to play with the interactive portion of inDesignCC <a>bit.il/1lE5QD</a>'),
                time: moment().add(-25, 'minutes'),
                comments: []
            },
            {
                name: 'Lauren Gray',
                userImage: 'lauren.jpg',
                text: this.$sce.trustAsHtml('7 Servings of Type For a Healthy Head & Body'),
                time: moment().add(-25, 'minutes'),
                image: 'lauren.jpg',
                comments: []
            },
            {
                name: 'Buzz Usborne',
                userImage: 'buzz.jpg',
                text: this.$sce.trustAsHtml('Road trip! <a>bit.ly/1hkXFdK</a>'),
                time: moment().add(-25, 'minutes'),
                image: 'buzz.jpg',
                comments: []
            },
            {
                name: 'Scott Riley',
                userImage: 'buzz.jpg',
                text: this.$sce.trustAsHtml('Deal with your problems before they deal with yor happiness'),
                time: moment().add(-2, 'hours'),
                image: 'chloe.jpg',
                comments: []
            },
            {
                name: 'Ryan O. Hicks',
                userImage: 'buzz.jpg',
                text: this.$sce.trustAsHtml('Excited about <a>@99U</a> Conf lineup this year <a>Conference.99u.com</a>'),
                time: moment().add(-1, 'hours'),
                image: 'marco.jpg',
                comments: []
            },
            {
                name: 'Samihah Azim',
                userImage: 'samihah.jpg',
                text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                image: 'lindsey.jpg',
                comments: []
            },
            {
                name: 'Jessica Tuan',
                userImage: 'user-profile.jpg',
                text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                comments: []
            },
            {
                name: 'Jessica Tuan',
                userImage: 'user-profile.jpg',
                text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                comments: []
            },
            {
                name: 'Jessica Tuan',
                userImage: 'user-profile.jpg',
                text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
                time: moment().add(-25, 'minutes'),
                image: 'buzz.jpg',
                comments: []
            }
        ];
    }
    FeedService.prototype.add = function (post) {
        post.text = this.$sce.trustAsHtml(post.text);
        this.posts.unshift(post);
        this.$rootScope.$emit('feed:add', post);
    };
    FeedService.prototype.fetch = function (filter) {
        var posts = this.posts;
        if (filter.feed) {
            posts = posts.filter(function (post) {
                return post.name !== filter.feed;
            });
        }
        if (filter.name) {
            posts = posts.filter(function (post) {
                return post.name === filter.name;
            });
        }
        if (filter.type === 'photo') {
            posts = posts.filter(function (post) {
                return !!post.image;
            });
        }
        return posts;
    };
    return FeedService;
})();
exports["default"] = FeedService;

},{}],4:[function(require,module,exports){
function default_1($stateProvider) {
    function setPosts(posts) {
        this.posts = posts;
    }
    ;
    $stateProvider
        .state('home.profile', {
        url: '/profile',
        views: {
            'navigation': {
                templateUrl: 'templates-cache/profile/navigation.html',
                controller: function (user) {
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
                    posts: function (feed, user) {
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
exports["default"] = default_1;

},{}],5:[function(require,module,exports){
function default_1($stateProvider) {
    $stateProvider
        .state('settings', {
        url: '/settings',
        templateUrl: 'templates-cache/settings/settings.html'
    });
}
exports["default"] = default_1;

},{}],6:[function(require,module,exports){
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.fetch = function () {
        return {
            name: 'Jessica Tuan',
            firstName: 'Jessica',
            description: 'Designer and Developer living in San Diego, CA',
            site: 'jessicatuan.com',
            followers: 2542,
            following: 517
        };
    };
    return UserService;
})();
exports["default"] = UserService;

},{}]},{},[1]);
