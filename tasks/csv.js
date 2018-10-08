import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { path: PATH } = pkg;

const $ = gulpLoadPlugins();

const csv = (done) => {
  gulp
    .src(`${PATH.DATA}/src/*.csv`)
    .pipe($.plumber())
    .pipe(
      $.csv2json({
        toArrayString: true,
      }),
    )
    .pipe(
      $.rename({
        extname: '.json',
      }),
    )
    .pipe(gulp.dest(`${PATH.DATA}/dest`));
  done();
};

export default csv;
