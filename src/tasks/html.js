const { src, dest, watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()


const html = () => {
    return src('./src/html/*.*')
      .pipe(dest('./public'))
      .pipe(browserSync.stream())
}

module.exports = html;