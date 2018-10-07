import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { data: PATH_DATA } = pkg.path;

const $ = gulpLoadPlugins();

const yaml = (done) => {
  gulp
    .src(`${PATH_DATA}**/*.yml`)
    .pipe($.plumber())
    .pipe(
      $.yaml({
        space: 2,
      }),
    )
    .pipe(gulp.dest(PATH_DATA));
  done();
};

export default yaml;
