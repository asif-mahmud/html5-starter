/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var helper = require('../../helpers.js');

gulp.task('watch', ['clean'], function () {
    var files = [
        helper.root('dist', '**/*')
    ];
    runSequence([
        'build',
        'copy:misc',
        'watch:sass',
        'watch:js',
        'watch:misc'
    ]);
    browserSync.init({
        files: files,
        server: {
            baseDir: helper.root('dist')
        }
    });
});