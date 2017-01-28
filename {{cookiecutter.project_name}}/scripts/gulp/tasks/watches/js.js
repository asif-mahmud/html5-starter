/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:js', function () {
    /* Add more watches as new apps are included */
    gulp.watch(helper.root('src', 'jssrc', '**/*'), ['minify:js']);
});

