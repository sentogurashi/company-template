import gulp from 'gulp';
// import gulpLoadPlugins from 'gulp-load-plugins';
import childProcess from 'child_process';

import ftp from 'vinyl-ftp';
import logger from 'fancy-log';
import build from './build';
import ftpConfig from '../ftp_config.json';
import pkg from '../package.json';

const { exec } = childProcess;

const { path: PATH } = pkg;

// const $ = gulpLoadPlugins();

const deployToProd = (done) => {
  const connet = ftp.create(
    Object.assign(ftpConfig, {
      parallel: 5,
      log: logger,
    }),
  );

  console.log(connet.newer);

  return (
    gulp
      .src(['./build/**/*'], {
        base: './build',
        buffer: false,
      })
      // リモートのパス（~新しければ）
      .pipe(connet.newer('/'))
      // リモートのパス（置き場所）
      .pipe(connet.dest('/'))
  );
};

const deployToSurge = (done) => {
  exec('surge build/ http://immense-cattle.surge.sh', (err, stdout, stderror) => console.log);
  done();
};

const deploySurge = gulp.series(build, deployToSurge);
const deploy = gulp.series(build, deployToProd);

export { deploySurge, deployToProd };
export default deploy;
