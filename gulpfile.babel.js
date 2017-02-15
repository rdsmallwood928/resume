'use strict';

import del from 'del';
import gulp from 'gulp';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import Docker from 'dockerode';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import tar from 'gulp-tar';
import jspm from 'jspm';
import runSeq from 'run-sequence';
import sh from 'shelljs';

const paths = {
  sass: './src/styles/app.scss',
  index: './src/index.html',
  dist: './www/',
  distcss: './www/css/',
  distlib: './www/lib/',
  distfonts: './www/lib/github/driftyco/ionic-bower@1.3.1/fonts/',
  distdocker: './distdocker',
  docker: './docker',
  build: './build',
  buildcss: './build/css',
  buildfonts: './build/lib/github/driftyco/ionic-bower@1.3.1/fonts/*',
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

gulp.task('clean:distdocker', () => {
  return del([paths.distdocker]);
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

gulp.task('copy:fonts', () => {
  return gulp.src(paths.buildfonts)
    .pipe(gulp.dest(paths.distfonts));
});

gulp.task('copy:configjs', () => {
  return gulp.src(paths.buildconfigjs)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:dist', ['html_replace', 'copy:configjs', 'copy:systemjs', 'copy:fonts']);

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


gulp.task('copy:dockerfile', () => {
  return gulp.src('./Dockerfile')
    .pipe(gulp.dest(paths.distdocker));
});

gulp.task('copy:dockerdist', () => {
  return gulp.src(paths.dist+'/**/*')
    .pipe(gulp.dest(paths.distdocker+'/www'));
});

gulp.task('copy:dockernginx', () => {
  return gulp.src(paths.docker+'/**/*')
    .pipe(gulp.dest(paths.distdocker+'/docker'));
});

gulp.task('tar_dockerfile', ['copy:dockerfile', 'copy:dockerdist', 'copy:dockernginx'], () => {
  return gulp.src(paths.distdocker+'/**/*')
    .pipe(tar('Dockerfile.tar'))
    .pipe(gulp.dest(paths.distdocker));
});

gulp.task('build:dockerImage', ['tar_dockerfile'], (done) => {
  let docker = new Docker();
  return docker.buildImage(
    paths.distdocker + '/Dockerfile.tar',
    {t: 'bert_resume'},
    (err, stream) => {
      if(err) {
        gutil.err('ERROR: ' + err.message);
        done();
      }
      stream.pipe(process.stdout, {end: true});
      stream.on('end', () => {
        gutil.log('SUCCESS!');
        done();
      });
    }
  );
});

gulp.task('build', [], () => {
  return runSeq('copy', 'sass');
});

gulp.task('clean', ['clean:distdocker', 'clean:dist', 'clean:build']);

gulp.task('build:docker', [], () => {
  return runSeq(
    ['clean:dist', 'clean:build'],
    ['jspm_dlloader', 'jspm_install'],
    'copy',
    'sass',
    ['sass:dist', 'copy:dist'],
    'bundle:dist',
    'build:dockerImage');
});

gulp.task('build:dist', [], () => {
  return runSeq('clean', 'copy', ['jspm_dlloader', 'jspm_install'], 'sass', ['sass:dist', 'copy:dist', 'bundle:dist']);
});

gulp.task('serve:dist', [], () => {
  return runSeq('clean', 'build:dist', 'webserver:dist');
});

gulp.task('serve', [], () => {
  return runSeq('build', 'webserver', 'watch');
});

gulp.task('default', ['serve']);
