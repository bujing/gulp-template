'use strict'

let gulp = require('gulp')
let connection = require('gulp-connect')
let del = require('del')
let sass = require('gulp-sass')
let sourcemaps = require('gulp-sourcemaps')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cssnano = require('cssnano')
let babel = require('gulp-babel')
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')

function connect (done) {
  connection.server({
    host: '0.0.0.0',
    livereload: true,
    port: 2010,
    root: 'dist'
  })
  done()
}

function clean () {
  return del(['dist'])
}

function html () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connection.reload())
}

function other () {
  return gulp.src('src/static/**/*.*')
    .pipe(gulp.dest('dist'))
    .pipe(connection.reload())
}

function images () {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connection.reload())
}

function css () {
  return gulp.src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connection.reload())
}

function js () {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(uglify().on('error', e => {
      console.log(e)
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connection.reload())
}

function watch (done) {
  gulp.watch(['src/**/*.html'], html)
  gulp.watch(['src/static/**/*.*'], other)
  gulp.watch(['src/images/**/*.*'], images)
  gulp.watch(['src/css/**/*.scss'], css)
  gulp.watch(['src/js/**/*.js'], js)
  done()
}

exports.default = gulp.series(clean, gulp.parallel(html, other, images, css, js, connect, watch))
