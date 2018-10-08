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
    .src([`${PATH.SRC + PATH.IMAGES}/**/*`])
    .pipe(
      $.imagemin(
        [
          // prettier-ignore
          pngquant(),
          mozjpeg({ qualty: 80 }),
          $.imagemin.svgo(),
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

const image = gulp.series(imageClean, imageOptimize);
export default image;