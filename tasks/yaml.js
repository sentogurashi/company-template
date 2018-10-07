import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { path: PATH } = pkg;

const $ = gulpLoadPlugins();

const yaml = (done) => {
  gulp
    .src(`${PATH.DATA}/**/*.yml`)
    .pipe($.plumber())
    .pipe(
      $.yaml({
        space: 2,
      }),
    )
    .pipe(gulp.dest(PATH.DATA));
  done();
};

export default yaml;
