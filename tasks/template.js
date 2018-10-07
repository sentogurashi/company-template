import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import fs from 'fs';
import pkg from '../package.json';

const {
  src: PATH_SRC, dest: PATH_DEST, templates: PATH_TEMPLATE, data: PATH_DATA,
} = pkg.path;

const FILENAME = {
  CONTENT: 'content.json',
  PROJECT: 'project.json',
  MEMBER: 'member.json',
};

const $ = gulpLoadPlugins();
const readJsonSync = path => JSON.parse(fs.readFileSync(path, 'utf-8'));

const templateStatic = (done) => {
  const sitedata = readJsonSync(PATH_DATA + FILENAME.CONTENT);
  const memberData = readJsonSync(PATH_DATA + FILENAME.MEMBER);
  const projectData = readJsonSync(PATH_DATA + FILENAME.PROJECT);
  gulp
    .src([`${PATH_SRC + PATH_TEMPLATE}/**/*.ejs`, `!${PATH_SRC + PATH_TEMPLATE}/**/_*.ejs`])

    .pipe($.plumber())
    .pipe($.ejs({ sitedata, memberData, projectData }, {}, { ext: '.html' }))
    .pipe(
      $.htmlBeautify({
        indent_size: 2,
        max_preserve_newlines: 0,
        unformatted: ['strong', 'em', 'span', '%'],
      }),
    )
    .pipe(gulp.dest(`${PATH_DEST + PATH_TEMPLATE}`));

  done();
};

const templateProject = (done) => {
  const sitedata = readJsonSync(PATH_DATA + FILENAME.CONTENT);
  const memberData = readJsonSync(PATH_DATA + FILENAME.MEMBER);
  const projectData = readJsonSync(PATH_DATA + FILENAME.PROJECT);
  projectData.forEach((projectInfo) => {
    gulp
      .src([`${PATH_SRC + PATH_TEMPLATE}/project/_template.ejs`])
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
      .pipe(gulp.dest(`${PATH_DEST + PATH_TEMPLATE}/project`));
  });

  done();
};

const template = gulp.series(templateStatic, templateProject);
export default template;
