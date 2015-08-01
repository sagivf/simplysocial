var gulp = require('gulp'),
    path = require('path'),
    rename = require("gulp-rename"),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    webserver = require('gulp-webserver'),
    ts = require('gulp-typescript'),
    templateCache = require("gulp-angular-templatecache"),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


require("gulp-help")(gulp);

var dest = path.join('dist'),
    jadeFiles = path.join('templates', '**', '*.jade'),
    lessFile = path.join('style', 'style.less'),
    lessFiles = path.join('style', '**', '*.less'),
    imageFiles = path.join('style', 'images', '*.*'),
    bowerFiles = [
      'ui-router/release/angular-ui-router.min.js',
      'angular/angular.min.js'].map(function(file){
        return path.join('bower_components', file);
      });

gulp.task("build", "Create build resources", ["build:less", "build:templates", "build:scripts"], function(){
  gulp.src(imageFiles)
      .pipe(gulp.dest(path.join('dist', 'images')));

  gulp.src(bowerFiles)
    .pipe(gulp.dest(dest));
});

gulp.task("build:less", "Create css from less", false, function () {
  gulp.src(lessFile)
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

gulp.task('build:tsc', function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
      target: 'ES3',
      module: 'commonjs',
      sortOutput: true,
      removeComments : true
    }));

  return tsResult.js.pipe(gulp.dest('./temp/source'));
});

gulp.task('build:scripts', false, ["build:tsc"], function () {

  return browserify('./temp/source/app.js')
    .bundle()
    .pipe(source('app.js'))
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
