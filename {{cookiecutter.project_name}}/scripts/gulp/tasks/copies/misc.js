/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('copy:misc', function () {
    //Copy all files except dist, jssrc, sass
    return gulp.src([
        helper.root('src', '**/*'),
        '!' + helper.root('src', 'jssrc', '**/*'),
        '!' + helper.root('src', 'sass', '**/*'),
        '!' + helper.root('src', 'jssrc'),
        '!' + helper.root('src', 'sass')
    ])
        .pipe(gulp.dest(helper.root('dist')));
});