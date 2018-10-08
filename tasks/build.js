import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import pkg from '../package.json';

const { path: PATH } = pkg;

const $ = gulpLoadPlugins();

const buildHTML = (done) => {
  gulp
    .src([`${PATH.DEST + PATH.TEMPLATES}/**/*`])
    // 空ファイルの出力を防ぐ
    .pipe(
      $.ignore.include({
        isFile: true,
      }),
    )
    .pipe($.replace(/\/dest\//g, '/assets/'))
    .pipe(gulp.dest(PATH.BUILD));
  done();
};

const buildAssets = (done) => {
  gulp
    .src([`${PATH.DEST + PATH.STYLES}/**/*`, `${PATH.DEST + PATH.SCRIPTS}/**/*`, `${PATH.DEST + PATH.IMAGES}/**/*`], {
      base: PATH.DEST,
    })
    .pipe(gulp.dest(`${PATH.BUILD}/assets`));
  done();
};

const build = gulp.series(buildHTML, buildAssets);

export default build;
