/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function () {
    runSequence([
        'build'
    ]);
});