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
import deploy, { deploySurge, deployToProd } from './tasks/deploy';

const generate = gulp.series(clean, image, script, style, yaml, template, document);
const build2 = gulp.series(generate, build);

export {
  image, script, style, csv, yaml, template, document, sketch, generate, build, build2, clean, watch, deploy, deploySurge, deployToProd,
};

export default gulp.series(generate, watch);
