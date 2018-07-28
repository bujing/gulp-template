'use strict'

let gulp = require('gulp')
let clean = require('gulp-clean')
let connect = require('gulp-connect')

gulp.task('clean', () => {
  return gulp.src('dist')
    .pipe(clean())
})

gulp.task('connect', () => {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 2010,
    root: 'dist'
  })
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['src/**/*.html'], ['html'])
})

gulp.task('default', ['clean'], () => {
  gulp.start('html', 'connect', 'watch')
})
