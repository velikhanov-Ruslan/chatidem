const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const scss = () => {
    return src('./src/sass/*.*')
      .pipe(sass())
      .pipe(dest('./public/css'))
}

module.exports = scss;
