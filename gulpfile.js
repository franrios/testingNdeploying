var gulp = require('gulp')
var mocha = require('gulp-mocha')
var bg = require('gulp-bg')

var bgstart
gulp.task('start', bgstart = bg('node', './index.js'))

function terminate () {
  bgstart.setCallback(function () { process.exit(0) })
  bgstart.stop(0)
}

gulp.task('test', ['start'], function () {
  return gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .once('end', terminate)
  .once('error', terminate)
})

gulp.task('default', ['start', 'test'])
