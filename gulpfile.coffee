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
jspm = require 'jspm'
replace = require 'gulp-replace'

paths =
  sass: './src/styles/app.scss'
  index: './src/index.html'
  dist: './www/'
  distcss: './www/css/'
  distcoffee: './www/js/'
  distindex: './www/index.html'
  coffee: './src/app/**/*.coffee'
  build: './build'
  buildcss: './build/css'

gulp.task 'sass', (done) ->
  gulp.src paths.sass
    .pipe sass().on('error', sass.logError)
    .pipe concat 'app.css'
    .pipe rename (path) ->
      path.basename = 'main.min'
    .pipe minifyCss()
    .pipe gulp.dest paths.buildcss

gulp.task 'sass:dist', (done) ->
  gulp.src paths.sass
    .pipe sass().on('error', sass.logError)
    .pipe concat 'app.css'
    .pipe rename (path) ->
      path.basename = 'main.min'
    .pipe minifyCss()
    .pipe gulp.dest paths.buildcss

gulp.task 'webserver', ->
  connect.server
    port: 8088
    livereload: true
    root: paths.build

gulp.task 'webserver:dist', ->
  connect.server
    port: 8088
    livereload: true
    root: paths.dist

gulp.task 'copy', ->
  gulp.src './src/**/*'
  .pipe(gulp.dest(paths.build))

gulp.task 'copy:dist', ->
  gulp.src paths.index
    .pipe(gulp.dest(paths.dist))

gulp.task 'watch', ->
  gulp.watch paths.sass, ['sass']
  gulp.watch paths.index, ['copy']
  gulp.watch paths.coffee, ['coffee']

gulp.task 'coffee:dist', ->
  gulp.src paths.coffee
    .pipe coffee bare: true
    .pipe concat 'app.coffee'
    .pipe rename (path) ->
      path.extname = ".js"
    .pipe gulp.dest paths.distcoffee
    .on 'error', gutil.log

gulp.task 'html_replace', ->
  gulp.src paths.distcoffee
    .pipe(replace("<!--BUNDLE-->", '<script src="app.min.js"></script>'))
    .pipe gulp.dest paths.dist

gulp.task 'bundle_coffee', ['build'], ->
  jspm.bundle('app/app', paths.dist + '/app.min.js',
    {minify:true, mangle: false, sourcemaps:true})

gulp.task 'build', ['copy', 'sass']
gulp.task 'build:dist', ['bundle_coffee', 'sass:dist', 'html_replace']
gulp.task 'serve:dist', ['build:dist', 'webserver:dist']
gulp.task 'serve', ['build', 'webserver', 'watch']
gulp.task 'default', ['serve']
