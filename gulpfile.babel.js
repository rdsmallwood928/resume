'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import jspm from 'jspm';
import runSeq from 'run-sequence';
import sh from 'shelljs';

const paths = {
  sass: './src/styles/app.scss',
  index: './src/index.html',
  dist: './www/',
  distcss: './www/css/',
  distcoffee: './www/js/',
  distindex: './www/index.html',
  coffee: './src/app/**/*.coffee',
  build: './build',
  buildcss: './build/css'
};

gulp.task('sass', (done) => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(rename((path) => {
      path.basename = 'main.min';
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.buildcss));
});

gulp.task('sass:dist', (done) => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(rename((path) => {
      path.basename = 'main.min';
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.buildcss));
});

gulp.task('webserver', () => {
  return connect.server({
    port: 8088,
    livereload: true,
    root: paths.build});
});

gulp.task('webserver:dist', () => {
  return connect.server({
    port: 8088,
    livereload: true,
    root: paths.dist
  });
});

gulp.task('copy', () => {
  console.log('Copying!');
  return gulp.src('./src/**/*')
  .pipe(gulp.dest(paths.build));
});

gulp.task('copy:dist', () => {
  return gulp.src(paths.index)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.index, ['copy']);
  gulp.watch(paths.coffee, ['coffee']);
  return;
});

gulp.task('html_replace', () => {
  return gulp.src(paths.distcoffee)
    .pipe(replace("<!--BUNDLE-->", '<script src="app.min.js"></script>'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['copy', 'sass']);
gulp.task('build:dist', ['sass:dist', 'html_replace']);
gulp.task('serve:dist', ['build:dist', 'webserver:dist']);
gulp.task('serve', ['build', 'webserver', 'watch']);
gulp.task('default', ['serve']);
