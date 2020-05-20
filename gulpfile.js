const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

const paths = {
    html_docs: {
        src: './*html'
    },
    styles: {
        src: ['assets/scss/*.scss', 'assets/scss/fold/*.scss', "assets/scss/reset/*.scss"],
        dest: 'assets/css/'
    }
};

function setupServe() {
    browserSync.init({
       server: {
           baseDir: './'
       }
    });
    // recarrega o browser quando arquivos .html for alterado
    gulp.watch(paths.html_docs.src).on('change', browserSync.reload);
    // recarrega o browser quando arquivos .scss for alterado
    gulp.watch(paths.styles.src).on('change', browserSync.reload);
    // recarrega o browser quando arquivos .scss for alterado
    gulp.watch(paths.styles.src, compileSass);
}

function compileSass() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

exports.default = setupServe;


// let gulp = require('gulp');
// let sass = require('gulp-sass');
// let gls = require('gulp-live-server');
// let livereload = require('gulp-livereload');
//
// sass.compiler = require('node-sass');
//
// gulp.task('sass', function () {
//     return gulp.src('./assets/scss/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./assets/css'))
// });
//
//
// gulp.task('watch', function () {
//     gulp.watch(['./assets/scss/*.scss'], ['sass']);
// });