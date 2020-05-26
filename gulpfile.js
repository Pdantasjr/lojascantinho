const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const paths = {
    html_docs: {
        src: './*html'
    },
    styles: {
        src: ['assets/scss/*.scss', 'assets/scss/fold/*.scss', "assets/scss/reset/*.scss"],
        dest: 'assets/css/'
    },
    scripts: {
        src: 'assets/js/*.js'
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

    // recarrega o browser quando arquivos .js for alterado
    gulp.watch(paths.scripts.src).on('change', browserSync.reload);

    // recarrega o browser quando arquivos .scss for alterado
    gulp.watch(paths.styles.src, compile);
}

function compile() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest))
}

exports.default = setupServe;
