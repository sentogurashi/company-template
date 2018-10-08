import gulp from 'gulp';
import image from './tasks/image';
import script from './tasks/script';
import style from './tasks/style';
import yaml from './tasks/yaml';
import csv from './tasks/csv';
import template from './tasks/template';
import sketch from './tasks/sketch';
import clean from './tasks/clean';
import watch from './tasks/watch';

export {
  image, script, style, yaml, csv, template, sketch, clean, watch,
};

export const generate = gulp.series(clean, image, script, style, csv, yaml, csv, template);

export default gulp.series(generate, watch);
