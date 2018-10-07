import gulp from 'gulp';
import image from './tasks/image';
import script from './tasks/script';
import style from './tasks/style';
import yaml from './tasks/yaml';
import template from './tasks/template';
import clean from './tasks/clean';
import watch from './tasks/watch';

export {
  image, script, style, yaml, template, clean, watch,
};

export const generate = gulp.series(clean, image, script, style, yaml, template);

export default gulp.series(generate, watch);
