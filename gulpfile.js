const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

//tasks
const html = require('./src/tasks/html.js')
const scss = require('./src/tasks/scss.js')

// watch
const watcher = () => {
  watch('./src/html/*.*', html).on('all', browserSync.reload)
  watch('./src/sass/*.*', scss).on('all', browserSync.reload)
}

// server
const server = () => browserSync.init({
  server: {
    baseDir: './public'
  }
})

exports.watch = watcher
exports.html = html
exports.scss = scss

// build
exports.dev = series (
  parallel(html, scss),
  parallel(watcher, server)
)