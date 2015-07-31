var gulp = require('gulp'),
    path = require('path'),
    rename = require("gulp-rename"),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    webserver = require('gulp-webserver'),
    templateCache = require("gulp-angular-templatecache");

require("gulp-help")(gulp);

var dest = path.join('dist'),
    jadeFiles = path.join('templates', '**', '*.jade'),
    lessFiles = path.join('style', '**', '*.less'),
    imageFiles = path.join('style', 'images', '*.*'),
    bowerFiles = [
      'ui-router/release/angular-ui-router.min.js',
      'angular/angular.min.js'].map(function(file){
        return path.join('bower_components', file);
      });

gulp.task("build", "Create build resources", ["build:less", "build:templates"], function(){
  gulp.src(imageFiles)
      .pipe(gulp.dest(path.join('dist', 'images')));

  gulp.src(bowerFiles)
    .pipe(gulp.dest(dest));
});

gulp.task("build:less", "Create css from less", false, function () {
  gulp.src(lessFiles)
      .pipe(less())
      .on('error', function (err) {
        console.log(err.message);
      })
      .pipe(gulp.dest(dest));
});

gulp.task("build:templates", "Create html templateCache from jade", false, function () {
  gulp.src(jadeFiles)
    .pipe(jade({
      locals: {}
    }))
    .pipe(templateCache({
      module: 'ins',
      root: 'templates-cache/'
    }))
    .pipe(rename('templates.js'))
    .pipe(gulp.dest(dest));
});


gulp.task('watch', "Watch file changes and auto compile for development", function () {
  gulp.watch(jadeFiles, ['build:templates']);
  gulp.watch(lessFiles, ['build:less']);
});

gulp.task('serve', "Serve files after build and watch", ["build", "watch"], function () {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});
