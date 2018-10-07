import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { data: pathData } = pkg.path;

const $ = gulpLoadPlugins();

const yaml = (done) => {
  gulp
    .src(`${pathData}**/*.yml`)
    .pipe($.plumber())
    .pipe(
      $.yaml({
        space: 2,
      }),
    )
    .pipe(gulp.dest(pathData));
  done();
};

export default yaml;
