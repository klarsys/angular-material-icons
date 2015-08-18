'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('lint', function() {
    return gulp.src([
        'angular-material-icons.js',
        'demo.js'
    ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('default', ['lint']);

module.exports = gulp;
