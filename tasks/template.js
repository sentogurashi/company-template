import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import fs from 'fs';
import pkg from '../package.json';

const { path: PATH } = pkg;

const FILENAME = {
  CONTENT: 'content.json',
  PROJECT: 'project.json',
  MEMBER: 'member.json',
};

const DATA_PATH = `${PATH.DATA}/dest/`;

const $ = gulpLoadPlugins();
const readJsonSync = path => JSON.parse(fs.readFileSync(path, 'utf-8'));

const templateStatic = (done) => {
  const sitedata = readJsonSync(DATA_PATH + FILENAME.CONTENT);
  const memberdata = readJsonSync(DATA_PATH + FILENAME.MEMBER);
  const projectdata = readJsonSync(DATA_PATH + FILENAME.PROJECT);
  sitedata.pages.filter(pageInfo => pageInfo.type === 'static').forEach((pageInfo) => {
    const directory = pageInfo.id === 'top' ? '' : `${pageInfo.id}/`;
    // console.log(directory);
    gulp
      .src(`${PATH.SRC + PATH.TEMPLATES}/${directory}index.ejs`)
      .pipe($.plumber())
      .pipe(
        $.ejs(
          {
            sitedata,
            pageInfo,
            memberdata,
            projectdata,
          },
          {},
          { ext: '.html' },
        ),
      )
      .pipe(
        $.htmlBeautify({
          indent_size: 2,
          max_preserve_newlines: 0,
          unformatted: ['strong', 'em', 'span', '%'],
        }),
      )
      .pipe($.htmlhint())
      .pipe($.htmlhint.reporter())
      .pipe(gulp.dest(`${PATH.DEST + PATH.TEMPLATES}/${directory}`));
  });

  done();
};

const templateProject = (done) => {
  const sitedata = readJsonSync(DATA_PATH + FILENAME.CONTENT);
  const memberdata = readJsonSync(DATA_PATH + FILENAME.MEMBER);
  const projectdata = readJsonSync(DATA_PATH + FILENAME.PROJECT);
  projectdata.forEach((projectInfo) => {
    gulp
      .src([`${PATH.SRC + PATH.TEMPLATES}/project/_template.ejs`])
      .pipe($.plumber())
      .pipe($.rename('index'))
      .pipe(
        $.ejs(
          {
            sitedata,
            pageInfo: sitedata.pages.find(pageInfo => pageInfo.id === 'project'),
            memberdata,
            projectdata,
            projectInfo,
          },
          {},
          { ext: '.html' },
        ),
      )
      .pipe(
        $.htmlBeautify({
          indent_size: 2,
          max_preserve_newlines: 0,
          unformatted: ['strong', 'em', 'span', '%'],
        }),
      )
      .pipe($.htmlhint())
      // .pipe($.htmlhint.reporter())
      .pipe(gulp.dest(`${PATH.DEST + PATH.TEMPLATES}/project/${projectInfo.id}`));
  });

  done();
};

const template = gulp.series(templateStatic, templateProject);
export default template;
