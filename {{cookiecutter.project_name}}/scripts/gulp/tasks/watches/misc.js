/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:misc', function () {
    // Watch other file changes
    return gulp.watch([
        '**/*',
        '!' + 'jssrc/**/*',
        '!' + 'sass/**/*',
        '!' + 'jssrc',
        '!' + 'sass'
    ], {
        cwd : helper.root('src')
    }, ['copy:misc']);
});