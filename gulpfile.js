'use strict'

let gulp = require('gulp')
let connect = require('gulp-connect')
let clean = require('gulp-clean')
let sass = require('gulp-sass')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('gulp-autoprefixer')

gulp.task('connect', () => {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 2010,
    root: 'dist'
  })
})

gulp.task('clean', () => {
  return gulp.src('dist')
    .pipe(clean())
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('css', () => {
  return gulp.src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['src/**/*.html'], ['html'])
  gulp.watch(['src/css/**/*.scss'], ['css'])
})

gulp.task('default', ['clean'], () => {
  gulp.start('html', 'css', 'connect', 'watch')
})
