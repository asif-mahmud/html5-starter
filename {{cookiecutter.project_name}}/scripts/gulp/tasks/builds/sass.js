/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var plugin = require('gulp-load-plugins')();
var prefix = require('autoprefixer');
var postcss = require('gulp-postcss');
var helper = require('../../../helpers.js');

gulp.task('build:sass', function () {
    return gulp.src(helper.root('src', 'sass', 'main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            require('postcss-flexboxfixer'),
            prefix({browsers: ["> 0%"]})
        ]))
        .pipe(plugin.rename('style.css'))
        .pipe(gulp.dest(helper.root('dist', 'dist', 'css')))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(plugin.rename('style.min.css'))
        .pipe(gulp.dest(helper.root('dist', 'dist', 'css')));
});