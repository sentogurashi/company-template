import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pngquant from 'imagemin-pngquant';
import mozjpeg from 'imagemin-mozjpeg';
import del from 'del';
import pkg from '../package.json';

const $ = gulpLoadPlugins();
const { path: PATH } = pkg;

// delは非同期終了するため、delで得られるpromiseを返す
const imageClean = () => del([`${PATH.DEST + PATH.IMAGES}/*`]);

const imageOptimize = (done) => {
  gulp
    .src([`${PATH.SRC + PATH.IMAGES}/**/*.jpg`, `${PATH.SRC + PATH.IMAGES}/**/*.png`, `${PATH.SRC + PATH.IMAGES}/**/*.gif`])
    .pipe(
      $.imageResize({
        width: 1600,
        imageMagick: true,
      }),
    )
    .pipe(
      $.imagemin(
        [
          // prettier-ignore
          pngquant(),
          mozjpeg({ qualty: 80 }),
          $.imagemin.gifsicle(),
        ],
        {
          verbose: true,
        },
      ),
    )
    .pipe(gulp.dest(PATH.DEST + PATH.IMAGES));

  done();
};

const svgOptimize = (done) => {
  gulp
    .src([`${PATH.SRC + PATH.IMAGES}/**/*.svg`])
    .pipe(
      $.imagemin([$.imagemin.svgo()], {
        verbose: true,
      }),
    )
    .pipe(gulp.dest(PATH.DEST + PATH.IMAGES));

  done();
};

const image = gulp.series(imageClean, imageOptimize, svgOptimize);
export default image;
