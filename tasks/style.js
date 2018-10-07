import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import postcss from 'gulp-postcss';
// 最新版のautoprefixerを利用するため、gulp-autoprefixerでなくpostcss経由で使う
import autoprefixer from 'autoprefixer';
import cssnano from 'gulp-cssnano';
import pkg from '../package.json';

const { browsers } = pkg;
const { src: pathSrc, dest: pathDest, styles: pathStyles } = pkg.path;

const $ = gulpLoadPlugins();

const style = (done) => {
  gulp
    .src(`${pathSrc + pathStyles}/**/*.scss`)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          browsers,
        }),
      ]),
    )
    .pipe(cssnano())
    .pipe(gulp.dest(pathDest + pathStyles));
  done();
};

export default style;
