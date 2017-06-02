const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const htmlInjector = require("bs-html-injector");

gulp.task('serve', ['sass'], () => {
  browserSync.use(htmlInjector, {
    files: "./*.html"
  });

  browserSync.init({
    server: "./"
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("./*.html", htmlInjector);
  gulp.watch("./*.js").on('change', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
