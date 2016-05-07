'use strict';

import gulp from 'gulp';
<<<<<<< 8ee8af6ba8e81b5c081b721c01ac91300dd7fe25
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Build

gulp.task('build', () => {
=======
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// Build

gulp.task('style', () => {
>>>>>>> Sun  8 May 2016 02:34:14 JST
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  const PROCESSORS = [
    require('postcss-import')(),
    require('postcss-extend')(),
    require('postcss-nested')(),
<<<<<<< 8ee8af6ba8e81b5c081b721c01ac91300dd7fe25
    require("postcss-custom-properties")(),
    require('postcss-flexbugs-fixes')(),
=======
    require('postcss-apply')(),
    require("postcss-custom-properties")(),
>>>>>>> Sun  8 May 2016 02:34:14 JST
    require('autoprefixer')(AUTOPREFIXER_BROWSERS),
    require('postcss-reporter')({ clearMessages: true })
  ];

<<<<<<< 8ee8af6ba8e81b5c081b721c01ac91300dd7fe25
  return gulp.src('./src/fuelpump.css')
    .pipe($.postcss(PROCESSORS))
    .pipe(gulp.dest('dist'))
    .pipe($.if('*.css', $.postcss([
      require('cssnano')({discardComments: {removeAll: true} })
    ])))
    .pipe($.size({title: 'styles'}))
    .pipe($.rename({suffix: ".min"}))
    .pipe(gulp.dest('dist'));
});

// Watch files for changes & reload
gulp.task('serve', ['styles'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app'],
    port: 3000
  });

  gulp.watch(['docs/**/*.html'], reload);
  gulp.watch(['src/**/*.,css'], ['styles', reload]);
=======
  return gulp.src('./src/main.css')
    .pipe($.postcss(PROCESSORS))
    .pipe(gulp.dest('dest'))
    .pipe($.if('*.css', $.postcss([
      require('cssnano')({discardComments: {removeAll: true} })
    ])))
    .pipe($.rename({suffix: ".min"}))
    .pipe(gulp.dest('dest'));
>>>>>>> Sun  8 May 2016 02:34:14 JST
});
