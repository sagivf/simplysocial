angular.module("ins").run(["$templateCache", function($templateCache) {$templateCache.put("templates-cache/home.html","<section ui-view=\"navigation\" class=\"ins-navigation-section\"></section><section ui-view=\"content\" class=\"ins-content-section\"></section>");
$templateCache.put("templates-cache/feed/content.html","<article ng-repeat=\"post in posts\"><div class=\"ins-body\"><img ng-src=\"external/avatars/{{post.userImage}}\"/><div class=\"ins-details\"><h3>{{post.name}}</h3><div class=\"ins-actions\"><i class=\"icon-circle-down\"></i><i class=\"icon-circle-down\"></i><i class=\"icon-circle-down\"></i></div><p ng-bind-html=\"post.text\"></p><div ng-if=\"post.comments.length\" class=\"ins-expand\"><a ng-click=\"post.expanded = !post.expanded\">{{ post.expanded ? \'collapse\' : \'expand\' }}<i class=\"icon-circle-down\"></i></a></div></div></div><div ng-show=\"post.expanded\" class=\"ins-comments\"><ul><li ng-repeat=\"comment in post.comments\"><div class=\"ins-body\"><img ng-src=\"external/avatars/{{comment.userImage}}\"/><div class=\"ins-details\"><h3>{{comment.name}}</h3><p ng-bind-html=\"comment.text\"></p></div></div></li></ul><div class=\"ins-respond\"><input type=\"text\" placeholder=\"\"/></div></div><img ng-if=\"post.image\" ng-src=\"external/posts/{{post.image}}\"/></article>");
$templateCache.put("templates-cache/feed/navigation.html","<div class=\"ins-create-post\"><textarea msd-elastic=\"msd-elastic\" ng-model=\"newPost\" placeholder=\"What\'s on your mind\"></textarea><div><a><i class=\"icon-camera\"></i>Add Photo</a><a><i class=\"icon-video-camera\"></i>Add Video</a><a></a></div></div><nav><ul><li class=\"ins-selected\"><a>All Posts</a></li><li><a>Photos</a></li><li><a>Videos</a></li><li class=\"ins-spacer\"></li><li class=\"ins-right-align\"><i class=\"icon-menu\"></i></li><li class=\"ins-right-align\"><i class=\"icon-list\"></i></li></ul></nav>");
$templateCache.put("templates-cache/settings/settings.html","<div class=\"ins-settings-page\"><div class=\"ins-content-section\"><h1>Settings</h1><h2>Account</h2><form class=\"ins-form\"><div class=\"ins-image-section\"><img src=\"external/avatars/user-profile.jpg\"/><button class=\"ins-button\">Change</button></div><div class=\"ins-inputs-section\"><div class=\"ins-input-image\"><i class=\"icon-envelop\"></i><input class=\"ins-input\"/></div><div class=\"ins-input-image\"><i class=\"icon-envelop\"></i><input type=\"email\" class=\"ins-input\"/></div><div class=\"ins-input-image\"><i class=\"icon-envelop\"></i><input type=\"password\" class=\"ins-input\"/></div></div></form><hr/><h2>Notifications</h2><div class=\"switch\"></div><ul><li class=\"ins-switch\"><input id=\"ins-toggle-1\" type=\"checkbox\" class=\"ins-toggle ins-toggle-round-flat\"/><label for=\"ins-toggle-1\"></label><label for=\"ins-toggle-1\">email me when my posts are marked as favorites</label></li><li class=\"ins-switch\"><input id=\"ins-toggle-2\" type=\"checkbox\" class=\"ins-toggle ins-toggle-round-flat\"/><label for=\"ins-toggle-2\"></label><label for=\"ins-toggle-2\">email me when I\'m mentioned</label></li><li><input id=\"ins-toggle-3\" type=\"checkbox\" class=\"ins-toggle ins-toggle-round-flat\"/><label for=\"ins-toggle-3\"></label><label for=\"ins-toggle-3\">email me when I get a reply</label></li><li><input id=\"ins-toggle-4\" type=\"checkbox\" class=\"ins-toggle ins-toggle-round-flat\"/><label for=\"ins-toggle-4\"></label><label for=\"ins-toggle-4\">email me when someone follows me</label></li></ul><hr/><h2>Privacy</h2><ul><li><input id=\"ins-toggle-2\" type=\"radio\" name=\"allow-radio\"/><label>allow anyone to tag me</label></li><li><input id=\"ins-toggle-2\" type=\"radio\" name=\"allow-radio\"/><label>only allow people I follow to tag me</label></li><li><input id=\"ins-toggle-2\" type=\"radio\" name=\"allow-radio\"/><label>don\'t allow anyone to tag me</label></li></ul><ul><li><input id=\"ins-toggle-2\" type=\"radio\"/><label>add a location to my posts</label></li><li><input id=\"ins-toggle-2\" type=\"radio\"/><label>let other find me by my email address</label></li><li><input id=\"ins-toggle-2\" type=\"radio\"/><label>tailor ads based on my information</label></li></ul><hr/><button class=\"ins-button\">Save Changes</button></div></div>");}]);