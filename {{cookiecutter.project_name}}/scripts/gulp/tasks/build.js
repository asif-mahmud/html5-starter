/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');

gulp.task('build', [
    /* Minify Javascripts first */
    'minify:js',

    /* Build the stylesheet */
    'build:sass'
    ]
);