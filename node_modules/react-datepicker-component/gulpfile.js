'use strict';

var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  mocha = require('gulp-mocha');
var browserify = require('browserify'),
    source = require('vinyl-source-stream');

function getJSBundler (path) {
    return browserify([path]).transform("reactify");
}

gulp.task('bundle-example', function() {
    getJSBundler("./example/example.jsx")
        .bundle()
        .pipe(source('example.js'))
        .pipe(gulp.dest('./example/'));
});


function watchStuff(globs) {
    gulp.watch(globs, ['bundle']);
}

gulp.task('watch', function() {
    watchStuff([
      './utils/*.js',
      './**/Date*',
      './**/Month*',
      './**/Day*']);
});

gulp.task('bundle-css', function() {
  var nib = require('nib');
  gulp
    .src('./css/datepicker.styl')
    .pipe(stylus({
      errors : true,
      use: [nib()]
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('tests', function() {
    //TODO:..
});



