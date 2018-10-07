import gulp from 'gulp';
import script from './tasks/script';
import style from './tasks/style';
import template from './tasks/template';
import yaml from './tasks/yaml';
import clean from './tasks/clean';
import watch from './tasks/watch';

export {
  script, style, template, yaml, watch, clean,
};

export const generate = gulp.series(clean, style, script, yaml, template);

export default gulp.series(generate, watch);
