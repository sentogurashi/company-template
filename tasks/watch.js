import gulp from 'gulp';
import { browsersync, bsReload } from './browsersync';
import script from './script';
import style from './style';
import yaml from './yaml';
import template from './template';
import pkg from '../package.json';

const { path: PATH } = pkg;

const watchFiles = (done) => {
  gulp.watch([`${PATH.SRC + PATH.STYLES}/**/*.scss`], gulp.series(style, bsReload));
  gulp.watch([`${PATH.SRC + PATH.SCRIPTS}/**/*.js`], gulp.series(script, bsReload));
  gulp.watch([`${PATH.SRC + PATH.TEMPLATES}/**/*.ejs`], gulp.series(template, bsReload));
  gulp.watch([`${PATH.DATA}src/*.yml`], gulp.series(yaml, template, bsReload));
  done();
};

const watch = gulp.series(browsersync, watchFiles);

export default watch;
