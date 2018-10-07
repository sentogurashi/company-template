import del from 'del';
import pkg from '../package.json';

const { path: PATH } = pkg;

// delは非同期終了するため、delで得られるpromiseを返す
const clean = () => del([PATH.DEST + PATH.STYLES, PATH.DEST + PATH.SCRIPTS, PATH.DEST + PATH.TEMPLATES]);

export default clean;
