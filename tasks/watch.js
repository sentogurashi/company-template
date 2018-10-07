import gulp from 'gulp';
import { browsersync, bsReload } from './browsersync';
import script from './script';
import style from './style';
import pkg from '../package.json';

const {
  src: pathSrc, scripts: pathScripts, styles: pathStyles, templates: pathTemplates,
} = pkg.path;

const watchFiles = (done) => {
  gulp.watch([`${pathSrc + pathStyles}/**/*.scss`], gulp.series(style, bsReload));
  gulp.watch([`${pathSrc + pathScripts}/**/*.js`], gulp.series(script, bsReload));
  // gulp.watch([`${pkg.path.src + pkg.path.templates}/**/*.ejs`], () =>
  //   runSequence('template', 'browsersync-reload')
  // );
  // gulp.watch('./page.yaml', () =>
  //   runSequence('yaml', 'template', 'browsersync-reload')
  // );
  done();
};

const watch = gulp.series(browsersync, watchFiles);

export default watch;
