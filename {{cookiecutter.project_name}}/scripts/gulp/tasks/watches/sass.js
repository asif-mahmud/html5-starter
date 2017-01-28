/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:sass', function () {
    gulp.watch( '**/*', { cwd : helper.root('src', 'sass') }, ['build:sass']);
});