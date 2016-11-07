var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-ruby-sass');

gulp.task('sass', () =>
    sass('src/sass/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
);

gulp.task('css', function() {
    gulp.src('src/css/style.css')
        .pipe(cleanCSS())    
        .pipe(gulp.dest('dist/resource/css'))
        .pipe(browserSync.stream())
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve', 'sass','css'], function () {
     gulp.watch('src/sass/*.scss', ['sass']);

     gulp.watch('src/css/*.css', ['css']);

     gulp.watch('./index.html').on('change', browserSync.reload);
     
});