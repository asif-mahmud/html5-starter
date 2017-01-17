/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');

gulp.task('build', [
    /* Minify Javascripts first */
    'minify:js',

    /* Build the stylesheet */
    'build:sass'
    ]
);