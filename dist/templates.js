angular.module("ins").run(["$templateCache", function($templateCache) {$templateCache.put("templates-cache/home.html","<section ui-view=\"navigation\" class=\"ins-navigation-section\"></section><section ui-view=\"content\" class=\"ins-content-section\"></section>");
$templateCache.put("templates-cache/feed/content.html","<article ng-repeat=\"post in posts\"><img ng-src=\"external/avatars/{{post.name.toLowerCase().replace(\' \', \'-\')}}.png\"/><div class=\"ins-details\"><h3>{{post.name}}</h3><p ng-bind-html=\"post.text\"></p></div></article>");
$templateCache.put("templates-cache/feed/navigation.html","<div class=\"ins-create-post\"><input placeholder=\"What\'s on your mind\"/><div><a><i class=\"icon-camera\"></i>Add Photo</a><a><i class=\"icon-video-camera\"></i>Add Video</a><a></a></div></div><nav><ul><li class=\"ins-selected\"><a>All Posts</a></li><li><a>Photos</a></li><li><a>Videos</a></li><li class=\"ins-spacer\"></li></ul></nav>");}]);