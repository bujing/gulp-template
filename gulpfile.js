'use strict'

let gulp = require('gulp')
let connect = require('gulp-connect')
let del = require('del')
let sass = require('gulp-sass')
let sourcemaps = require('gulp-sourcemaps')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cssnano = require('cssnano')
let babel = require('gulp-babel')
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')

gulp.task('connect', () => {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 2010,
    root: 'dist'
  })
})

gulp.task('clean', () => {
  return del(['dist'])
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('static', () => {
  return gulp.src('src/static/**/*.*')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('images', () => {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})

gulp.task('css', () => {
  return gulp.src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      cssnano,
      autoprefixer
    ]))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
})

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(uglify().on('error', e => {
      console.log(e)
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['src/**/*.html'], ['html'])
  gulp.watch(['src/static/**/*.*'], ['static'])
  gulp.watch(['src/images/**/*.*'], ['images'])
  gulp.watch(['src/css/**/*.scss'], ['css'])
  gulp.watch(['src/js/**/*.js'], ['js'])
})

gulp.task('default', ['clean'], () => {
  gulp.start('html', 'static', 'images', 'css', 'js', 'connect', 'watch')
})
