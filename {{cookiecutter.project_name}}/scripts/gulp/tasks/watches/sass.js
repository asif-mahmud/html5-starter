/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:sass', function () {
    gulp.watch(helper.root('src', 'sass', '**/*'), ['build:sass']);
});