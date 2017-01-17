/**
 * Created by shimon on 1/11/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:misc', function () {
    // Watch other file changes
    return gulp.watch([
        helper.root('src', '**/*'),
        '!' + helper.root('src', 'dist', '**/*'),
        '!' + helper.root('src', 'jssrc', '**/*'),
        '!' + helper.root('src', 'sass', '**/*'),
        '!' + helper.root('src', 'dist'),
        '!' + helper.root('src', 'jssrc'),
        '!' + helper.root('src', 'sass')
    ], ['copy:misc']);
});