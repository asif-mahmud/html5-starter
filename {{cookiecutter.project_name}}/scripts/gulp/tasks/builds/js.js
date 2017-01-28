/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var order = require('gulp-order');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var helper = require('../../../helpers.js');
var plugin = require('gulp-load-plugins')();

gulp.task('minify:js', function () {
    //Do minifications
    return gulp.src(helper.root('src', 'jssrc', '**/*'))
        .pipe(order([
            helper.root('src', 'jssrc', 'main.js'),
            helper.root('src', 'jssrc', '**/*')
        ]))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(helper.root('src', 'dist', 'js')))
        .pipe(uglify({
            mangle : { toplevel : true}
        }))
        .pipe(plugin.rename('main.min.js'))
        .pipe(gulp.dest(helper.root('dist', 'dist', 'js')))
        .pipe(gulp.dest(helper.root('src', 'dist', 'js')));
});