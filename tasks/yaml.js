import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { path: PATH } = pkg;

const $ = gulpLoadPlugins();

const yaml = (done) => {
  gulp
    .src(`${PATH.DATA}/src/*.yml`)
    .pipe($.plumber())
    .pipe(
      $.yaml({
        space: 2,
      }),
    )
    .pipe(gulp.dest(`${PATH.DATA}/dest`));
  done();
};

export default yaml;
