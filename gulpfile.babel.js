import gulp from 'gulp';
import image from './tasks/image';
import script from './tasks/script';
import style from './tasks/style';
import yaml from './tasks/yaml';
import csv from './tasks/csv';
import template from './tasks/template';
import document from './tasks/document';
import sketch from './tasks/sketch';
import build from './tasks/build';
import clean from './tasks/clean';
import watch from './tasks/watch';
// import deploy, { deploySurge } from './tasks/deploy';
import { deploySurge } from './tasks/deploy';

const deploy = {}; // TODO

export {
  image, script, style, csv, yaml, template, document, sketch, build, clean, watch, deploy, deploySurge,
};

export const generate = gulp.series(clean, image, script, style, yaml, template, document);

export default gulp.series(generate, watch);
