import gulp from 'gulp';
import image from './tasks/image';
import script from './tasks/script';
import style from './tasks/style';
import yaml from './tasks/yaml';
import csv from './tasks/csv';
import template from './tasks/template';
import sketch from './tasks/sketch';
import build from './tasks/build';
import clean from './tasks/clean';
import watch from './tasks/watch';

export {
  image, script, style, csv, yaml, template, sketch, build, clean, watch,
};

export const generate = gulp.series(clean, image, script, style, yaml, template);

export default gulp.series(generate, watch);
