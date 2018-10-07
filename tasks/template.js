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

const $ = gulpLoadPlugins();
const readJsonSync = path => JSON.parse(fs.readFileSync(path, 'utf-8'));

const templateStatic = (done) => {
  const sitedata = readJsonSync(PATH.DATA + FILENAME.CONTENT);
  const memberData = readJsonSync(PATH.DATA + FILENAME.MEMBER);
  const projectData = readJsonSync(PATH.DATA + FILENAME.PROJECT);
  gulp
    .src([`${PATH.SRC + PATH.TEMPLATES}/**/*.ejs`, `!${PATH.SRC + PATH.TEMPLATES}/**/_*.ejs`])

    .pipe($.plumber())
    .pipe($.ejs({ sitedata, memberData, projectData }, {}, { ext: '.html' }))
    .pipe(
      $.htmlBeautify({
        indent_size: 2,
        max_preserve_newlines: 0,
        unformatted: ['strong', 'em', 'span', '%'],
      }),
    )
    .pipe(gulp.dest(`${PATH.DEST + PATH.TEMPLATES}`));

  done();
};

const templateProject = (done) => {
  const sitedata = readJsonSync(PATH.DATA + FILENAME.CONTENT);
  const memberData = readJsonSync(PATH.DATA + FILENAME.MEMBER);
  const projectData = readJsonSync(PATH.DATA + FILENAME.PROJECT);
  projectData.forEach((projectInfo) => {
    gulp
      .src([`${PATH.SRC + PATH.TEMPLATES}/project/_template.ejs`])
      .pipe($.plumber())
      .pipe($.rename(projectInfo.id))
      .pipe(
        $.ejs(
          {
            sitedata,
            memberData,
            projectData,
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
      .pipe(gulp.dest(`${PATH.DEST + PATH.TEMPLATES}/project`));
  });

  done();
};

const template = gulp.series(templateStatic, templateProject);
export default template;
