var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('styles'))
  .pipe(browserSync.reload({
    stream: true
  }));
  
});

//gulp watch syntax

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html').on('change',browserSync.reload);
  gulp.watch('blogs/*.html').on('change',browserSync.reload);
});

//browser sync

gulp.task('browserSync', function(){
  browserSync.init({
    server:{
      baseDir: "./"
    }
  });
});