const browserSync   = require('browser-sync').create();
const browserify    = require('browserify');
const gulp          = require('gulp');
const imageMin      = require('gulp-imagemin');
const less          = require('gulp-less');
const minifyCss     = require('gulp-minify-css');
const sourcemaps    = require('gulp-sourcemaps');
const uglify        = require('gulp-uglify');
const buffer        = require('vinyl-buffer');
const source        = require('vinyl-source-stream');

/********** IMAGES *********************
 *
 * Read original image files from /src/images/ folder
 * Pass them trough imageMin
 * Save the minified images into dist/images subfolder
 * Tell browserSync to reload the browser
 *
 ***************************************/
gulp.task('images', () => {
    gulp.src(['src/images/**/*'])
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});

/********** STYLES *********************
 *
 * Read main.less file from /src/styles folder
 * Create sourcemaps with the original content
 * Compile Less and generate CSS content instead
 * Minify the new CSS generated styles
 * Write the sourcemaps to the minified version
 * Save the minified version into /dist/styles/folder
 * Tell browserSync to reload the browser
 *
 ***************************************/
gulp.task('styles', () => {
    gulp.src(['src/styles/main.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream());
});

/********** JAVASCRIPT ******************
 *
 * Setup browserify using /src/scripts/main.js as entry point
 * Create a single bundle letting browserify resolve all the required dependencies
 * Use the output to create a single bundled main.js file
 * Convert it into a vinyl file instance
 * Use the vinyl file instance to create a stream that we can pipe to
 * Use that output to create sourcemaps
 * Uglify/minify the output
 * Write the sourcemaps to the minified version
 * Save the minified version into /dist/scripts/folder
 * Tell browserSync to reload the browser
 *
 ***************************************/
gulp.task('scripts', () => {
    const b = browserify({
        entries: './src/scripts/main',
        debug: true
    });

    b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream());
});

/***** SYNC FILES WITH BROWSER *********
 *
 * Run all tasks for the first load (we need certain assets to be precompiled)
 * Init browserSync server
 * Run styles task on changes to less files on /src/styles/ folder and subfolders
 * Run images task on changes to images on /src/img/ folder and subfolders
 * Run scripts task on changes to JS scripts on /src/scripts/ folder and subfolders
 * Reload browser on changes to html files on root folder
 *
 ***************************************/
gulp.task('default', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('*.html', browserSync.reload);
});