gulp = require 'gulp'
connect = require 'gulp-connect'
coffee = require 'gulp-coffee'
runSeq = require 'run-sequence'
gutil = require 'gulp-util'
bower = require 'bower'
concat = require 'gulp-concat'
sass = require 'gulp-sass'
minifyCss = require 'gulp-minify-css'
rename = require 'gulp-rename'
sh = require 'shelljs'

paths =
  sass: './src/styles/app.scss'
  index: './src/index.html'
  dist: './www/'
  distcss: './www/css/'
  coffee: './src/app/**/*.coffee'
  distcoffee: './www/js/'
  build: './build'
  buildcss: './build/css'
  buildcoffee: './build/js/'

gulp.task 'sass', (done) ->
  gulp.src paths.sass
    .pipe sass().on('error', sass.logError)
    .pipe concat 'app.css'
    .pipe rename (path) ->
      path.basename = 'main.min'
    .pipe minifyCss()
    .pipe gulp.dest paths.buildcss

gulp.task 'webserver', ->
  connect.server
    livereload: true
    root: paths.build

gulp.task 'copy', ->
  gulp.src './src/**/*'
  .pipe(gulp.dest('./build'))

gulp.task 'watch', ->
  gulp.watch paths.sass, ['sass']
  gulp.watch paths.index, ['copy']
  gulp.watch paths.coffee, ['coffee']

gulp.task 'install', ['git-check'], ->
  bower.commands.install()
  .on('log', (data) ->
    gutil.log('bower', gutil.colors.cyan(data.id), data.message))

gulp.task 'git-check', (done)->
  if(!sh.which('git'))
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads'),
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    )
    process.exit(1)
  done()

gulp.task 'coffee', ->
  gulp.src paths.coffee
  .pipe coffee bare: true
  .pipe concat 'app.coffee'
  .pipe rename (path) ->
    path.extname = ".js"
  .pipe gulp.dest paths.buildcoffee
  .on 'error', gutil.log

gulp.task 'build', ['copy', 'sass']
gulp.task 'default', ['build', 'webserver', 'watch']
