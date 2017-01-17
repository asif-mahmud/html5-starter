/**
 * Created by shimon on 1/11/17.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function (done) {
    browserSync.reload();
    console.log('reloaded!');
    done();
});