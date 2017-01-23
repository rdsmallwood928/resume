'use strict';

import del from 'del';
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
  distlib: './www/lib/',
  build: './build',
  buildcss: './build/css',
  buildsystemjs: './build/lib/system.js',
  buildconfigjs: './build/config.js'
};

gulp.task('sass', () => {
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
    .pipe(gulp.dest(paths.distcss));
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
  return gulp.src('./src/**/*')
  .pipe(gulp.dest(paths.build));
});

gulp.task('clean:build', () => {
  return del([paths.build]);
});

gulp.task('clean:dist', () => {
  return del([paths.dist]);
});

gulp.task('jspm_install', () => {
  return jspm.install(true, {lock: true});
});

gulp.task('jspm_dlloader', () => {
  return jspm.dlLoader();
});

gulp.task('copy:systemjs', () => {
  return gulp.src(paths.buildsystemjs)
    .pipe(gulp.dest(paths.distlib));
});

gulp.task('copy:configjs', () => {
  return gulp.src(paths.buildconfigjs)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:dist', ['html_replace', 'copy:configjs', 'copy:systemjs']);

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.index, ['copy']);
  gulp.watch(paths.coffee, ['coffee']);
  return;
});

gulp.task('bundle:dist', () => {
  return jspm.bundle('app/app.js', paths.dist+'app.min.js');
});

gulp.task('html_replace', () => {
  return gulp.src(paths.index)
    .pipe(replace("<!--BUNDLE-->", '<script src="app.min.js"></script>'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', [], () => {
  return runSeq('copy', 'sass');
});

gulp.task('clean', ['clean:dist', 'clean:build']);

gulp.task('build:dist', [], () => {
  return runSeq('copy', ['jspm_dlloader', 'jspm_install'], 'sass', ['sass:dist', 'copy:dist', 'bundle:dist']);
});

gulp.task('serve:dist', [], () => {
  return runSeq('clean', 'build:dist', 'webserver:dist');
});

gulp.task('serve', [], () => {
  return runSeq('build', 'webserver', 'watch');
});

gulp.task('default', ['serve']);
