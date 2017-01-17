/**
 * Created by shimon on 1/11/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('copy:misc', function () {
    //Copy all files except dist, jssrc, sass
    return gulp.src([
        helper.root('src', '**/*'),
        '!' + helper.root('src', 'dist', '**/*'),
        '!' + helper.root('src', 'jssrc', '**/*'),
        '!' + helper.root('src', 'sass', '**/*'),
        '!' + helper.root('src', 'dist'),
        '!' + helper.root('src', 'jssrc'),
        '!' + helper.root('src', 'sass')
    ])
        .pipe(gulp.dest(helper.root('dist')));
});