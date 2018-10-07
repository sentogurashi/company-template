import del from 'del';
import pkg from '../package.json';

const {
  dest, styles, scripts, templates,
} = pkg.path;

const clean = (done) => {
  del([dest + styles, dest + scripts, dest + templates]);
  done();
};

export default clean;
