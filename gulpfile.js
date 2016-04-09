const gulp = require('gulp')
const mocha = require('gulp-mocha')
const bg = require('gulp-bg')

var bgstart
gulp.task('start', bgstart = bg('node', './index.js'))

gulp.task('test', ['start'], function () {
  return gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .once('end', function () {
    bgstart.setCallback(function () { process.exit(0) })
    bgstart.stop(0)
  })
  .once('error', function () {
    bgstart.setCallback(function () { process.exit(0) })
    bgstart.stop(0)
  })
})

gulp.task('default', ['start', 'test'])
