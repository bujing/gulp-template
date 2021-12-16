'use strict'

const gulp = require('gulp')
const connection = require('gulp-connect')
const del = require('del')
const ejs = require('gulp-ejs')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function connect (done) {
  connection.server({
    host: '0.0.0.0',
    livereload: true,
    port: 8080,
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

function template () {
  return gulp.src('src/ejs/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
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
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connection.reload())
}

function js () {
  return gulp.src(['src/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connection.reload())
}

function watch (done) {
  gulp.watch(['src/**/*.html'], html)
  gulp.watch(['src/ejs/**/*.ejs'], template)
  gulp.watch(['src/static/**/*.*'], other)
  gulp.watch(['src/images/**/*.*'], images)
  gulp.watch(['src/css/**/*.scss'], css)
  gulp.watch(['src/js/**/*.js'], js)
  done()
}

exports.default = gulp.series(clean, gulp.parallel(html, template, other, images, css, js, connect, watch))
