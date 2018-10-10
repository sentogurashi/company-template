import gulp from 'gulp';
import del from 'del';
import pkg from '../package.json';

const { path: PATH } = pkg;

// delは非同期終了するため、delで得られるpromiseを返す
const clean = () => del([`${PATH.DEST + PATH.DOCUMENTS}/*`]);

const moveDocument = (done) => {
  gulp.src([`${PATH.SRC + PATH.DOCUMENTS}/**/*`]).pipe(gulp.dest(PATH.DEST + PATH.DOCUMENTS));

  done();
};

const document = gulp.series(clean, moveDocument);
export default document;
