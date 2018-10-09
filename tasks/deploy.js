import gulp from 'gulp';
// import gulpLoadPlugins from 'gulp-load-plugins';
import childProcess from 'child_process';

import build from './build';
// import pkg from '../package.json';

const { exec } = childProcess;

// const { path: PATH } = pkg;

// const { path: PATH } = pkg;

// const $ = gulpLoadPlugins();

const deployToSurge = (done) => {
  exec('surge build/ http://immense-cattle.surge.sh', (err, stdout, stderror) => console.log);
  done();
};

const deploySurge = gulp.series(build, deployToSurge);

export { deploySurge };
// export default deploy;
