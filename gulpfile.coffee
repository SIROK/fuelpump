gulp = require 'gulp'
$ = do require 'gulp-load-plugins'

AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

# Transpile and Automatically Prefix Stylesheets
gulp.task 'style', ->
  gulp.src './stylus/bdash.styl'
  .pipe $.plumber
    errorHandler: (error) ->
      $.util.log($.util.colors.red('Error (' + error.plugin + '): ' + error.message));
      this.emit('end')
  .pipe do $.sourcemaps.init
  .pipe do $.stylus
  .pipe $.autoprefixer(AUTOPREFIXER_BROWSERS)
  .pipe do $.plumber.stop
  .pipe do $.sourcemaps.write
  .pipe $.size {title:  'style'}
  .pipe gulp.dest './css'

# Transpile and Automatically Prefix Stylesheets for style guide
gulp.task 'style:docs', ->
  gulp.src './stylus/bdash.styl'
  .pipe $.plumber
    errorHandler: (error) ->
      $.util.log($.util.colors.red('Error (' + error.plugin + '): ' + error.message));
      this.emit('end')
  .pipe do $.sourcemaps.init
  .pipe do $.stylus
  .pipe $.autoprefixer(AUTOPREFIXER_BROWSERS)
  .pipe do $.minifyCss
  .pipe do $.sourcemaps.write
  .pipe $.rename {suffix: '.min'}
  .pipe $.size {title:  'style:docs'}
  .pipe gulp.dest './docs/assets/css'

# Minify Stylesheets
gulp.task 'style:minify', ->
  gulp.src './css/bdash.css'
  .pipe do $.minifyCss
  .pipe $.rename {suffix: '.min'}
  .pipe $.size {title: 'min'}
  .pipe gulp.dest './css'

# Watch
gulp.task 'watch', ->
  gulp.watch './stylus/**/*.styl', ['default']

# Generate Style guides
gulp.task 'default', ['style', 'style:minify', 'style:docs']
