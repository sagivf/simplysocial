var gulp = require('gulp'),
    webserver = require('gulp-webserver');

require("gulp-help")(gulp);

gulp.task('serve', "Serve files after build and watch", [], function () {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});