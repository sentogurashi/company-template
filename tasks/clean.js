import del from 'del';
import pkg from '../package.json';

const { path: PATH } = pkg;

const clean = (done) => {
  del([PATH.DEST + PATH.STYLES, PATH.DEST + PATH.SCRIPTS, PATH.DEST + PATH.TEMPLATES]);
  done();
};

export default clean;
