var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('scss', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(['./app/*.html'])
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html', './view/main/','./scss/**/*.scss'], ['html','scss']);
});

gulp.task('default', ['connect', 'watch']);