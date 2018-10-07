import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import image from './image';
import pkg from '../package.json';

const $ = gulpLoadPlugins();
const { path: PATH } = pkg;

const sketchExport = (done) => {
  console.log(PATH.SRC + PATH.IMAGES);
  gulp
    .src(`${PATH.SRC + PATH.SKETCHS}/symbol.sketch`)
    .pipe(
      $.sketch({
        export: 'slices',
      }),
    )
    .pipe(gulp.dest(`${PATH.SRC + PATH.IMAGES}`));

  done();
};

const sketch = gulp.series(sketchExport, image);

export default sketch;
