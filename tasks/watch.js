import gulp from 'gulp';
import { browsersync, bsReload } from './browsersync';
import script from './script';
import style from './style';
import pkg from '../package.json';

const {
  src: PATH_SRC, scripts: PATH_SCRIPTs, styles: PATH_STYLEs, templates: PATH_TEMPLATE,
} = pkg.path;

const watchFiles = (done) => {
  gulp.watch([`${PATH_SRC + PATH_STYLEs}/**/*.scss`], gulp.series(style, bsReload));
  gulp.watch([`${PATH_SRC + PATH_SCRIPTs}/**/*.js`], gulp.series(script, bsReload));
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
