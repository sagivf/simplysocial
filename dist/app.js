(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typings/tsd.d.ts"/>
var feed_routing_1 = require("./feed.routing");
angular.module('ins', ['ui.router', 'monospaced.elastic'])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        abstract: true,
        templateUrl: 'templates-cache/home.html'
    });
    $urlRouterProvider.otherwise('feed');
})
    .config(feed_routing_1["default"])
    .run(function ($rootScope, $sce) {
    $rootScope.posts = [
        {
            name: 'Sam Soffes',
            userImage: 'sam-soffes.png',
            text: $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>'),
            time: new Date(),
            comments: [
                {
                    name: 'Jed Bridges',
                    userImage: 'sam-soffes.png',
                    text: $sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a>Good stuff from <a>@designmodo!</a>')
                }
            ]
        },
        {
            name: 'Meg Robichaud',
            userImage: 'meg-robichaud.png',
            text: $sce.trustAsHtml('My view this '),
            time: new Date(),
            image: 'post1.jpg',
            comments: []
        }
    ];
});

},{"./feed.routing":2}],2:[function(require,module,exports){
function default_1($stateProvider) {
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
exports["default"] = default_1;

},{}]},{},[1]);
