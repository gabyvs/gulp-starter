const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');
const less = require('gulp-less');

// Minifying images
gulp.task('images', () => {
    gulp.src(['src/img/**/*'])
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});

// Minifying css and adding sourcemaps
gulp.task('styles', () => {
    gulp.src(['src/styles/**/main.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream());
});

// uglifying javascript and adding sourcemaps
gulp.task('scripts', () => {
    gulp.src(['src/scripts/main.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream())
});

// observing changes in the files and reloading browser
gulp.task('default', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch('src/img/**/*', ['images']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('*.html', browserSync.reload);
});