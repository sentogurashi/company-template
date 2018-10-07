import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import fs from 'fs';
import es from 'event-stream';
import pkg from '../package.json';

const {
  src: pathSrc, dest: pathDest, templates: pathTemplates, data: pathData,
} = pkg.path;
const contentFileName = 'content.json';
const projectFileName = 'project.json';
const memberFileName = 'member.json';

const $ = gulpLoadPlugins();
const STRING_UTF8 = 'utf-8';

const templateStatic = (done) => {
  const sitedata = JSON.parse(fs.readFileSync(`${pathData + contentFileName}`, STRING_UTF8));
  gulp
    .src([`${pathSrc + pathTemplates}/**/*.ejs`, `!${pathSrc + pathTemplates}/**/_*.ejs`])

    .pipe($.plumber())
    .pipe(
      $.ejs(
        {
          sitedata,
        },
        {},
        {
          ext: '.html',
        },
      ),
    )
    .pipe(
      $.htmlBeautify({
        indent_size: 2,
        max_preserve_newlines: 0,
        unformatted: ['strong', 'em', 'span', '%'],
      }),
    )
    .pipe(gulp.dest(`${pathDest + pathTemplates}`));

  done();
};

// gulp.task('template:generate', () => {
//   const sitedata = JSON.parse(fs.readFileSync(sitedataPath, STRING_UTF8));

//   return es.merge(
//     sitedata.pages.feature.map((page) => {
//       const stream = gulp
//         .src([`${templatePath}feature/_template.ejs`])
//         .pipe($.plumber())
//         .pipe($.rename(page.id))
//         .pipe(
//           $.ejs(
//             {
//               page,
//               sitedata,
//             },
//             {},
//             {
//               ext: '.html',
//             },
//           ),
//         )
//         .pipe($.replace('\n\n', '\n'))
//         .pipe(gulp.dest(`${dest}html/feature`));

//       return stream;
//     }),
//   );
// });

const template = gulp.series(templateStatic);
export default template;
