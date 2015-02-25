var lr = require('tiny-lr');
var gulp = require('gulp');
var gulputil = require('gulp-util');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var less = require('gulp-less');
var bower = require('gulp-bower');
var usemin = require('gulp-usemin');
var rename = require("gulp-rename");

var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var rjsConfig = require('./public/scripts/requirejsConfig');
var es = require('event-stream');

var server = lr();
// gulp.task('default', function(){
//   // place code for your default task here
// });

var ngConstant = require('gulp-ng-constant');

gulp.task('translations', function(done) {

  var locales = ['en', 'zh-TW'];
  locales.forEach(function(locale) {
    var translations = require('./public/locale/' + locale + '.json');
    var translationFile = {};
    console.log(translations);
    var localeKey = 'taxCalculator.translations.' + locale;
    translationFile[localeKey] = translations;
    //gulp.src()
    //get file
    var count = 0;
    var stream = ngConstant({
        name: localeKey,
        deps: [],
        constants: translationFile,
        wrap: 'amd',
        stream: true
      })
      // Writes config.js to dist/ folder
      .pipe(rename("translations.js"))
      .pipe(gulp.dest('dist/scripts/' + locale))
      .pipe(gulp.dest('public/scripts/' + locale));

    stream.on('end', function() {
      if (count == locales.length) {
        done();
      }
    });
  });
  //quick hack

});


var deployIEScripts = function() {
  gulp.src(['public/bower_components/es5-shim/es5-shim.min.js',
      'public/bower_components/json3/lib/json3.min.js'
    ])
    .pipe(gulp.dest('public/scripts/'))
    .pipe(gulp.dest('dist/scripts/'));
};

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md#running-tasks-in-series

var concatJs = function() {
  console.log(rjsConfig);
  rjsConfig.baseUrl = "public/scripts";
  rjsConfig.out = 'concat.js';
  rjsConfig.name = "main";

  return rjs(rjsConfig).pipe(uglify({
      outSourceMap: true,
      output: {
        ascii_only: false
      }
    }))
    .pipe(gulp.dest('dist/scripts/')); // pipe it to the output DIR

};

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css/'))
})

gulp.task('build2', ['build'], function(cb) {
  //smell of bad design but works
  //trick let this two overwite the concated js file
  //simple overwrite wont do as it just stream to same files ignoring existing content length

  es.concat(
    gulp.src('pre-dist/index.html')
    .pipe(gulp.dest('dist/')),
    gulp.src(['public/scripts/require.min.js'])
    .pipe(gulp.dest('dist/scripts/')),
    concatJs()
  ).on('end', cb);

});

gulp.task('pre-dist-clean', ['build', 'build2'], function() {
  //     //ok remove folder not scripts
  //     console.log('clean');
  gulp.src('pre-dist/', {
    read: true
  }).pipe(clean({
    force: true
  }));
});



gulp.task('dist', ['build', 'build2', 'pre-dist-clean']);



gulp.task('build', function(cb) {

  deployIEScripts();

  var lessStream = gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css/'));

  var templatesStream = gulp.src(['public/templates/**.html'])
    .pipe(gulp.dest('dist/templates/'));


  var htmlMinStream = gulp.src('public/index.html')
    .pipe(usemin({
      // css: [minifyCss(), 'concat'],
      // html: [minifyHtml({empty: true})],
      js: []
    }))
    .pipe(gulp.dest('pre-dist/'));
  //discard it as concat may run before above
  es.concat(
    lessStream, templatesStream, htmlMinStream
  ).on('end', cb);

});

gulp.task('default', ['listen', 'translations'], function() {

  bower()
    .pipe(gulp.dest('public/bower_components/'));

  //TODO ensure bower end

  deployIEScripts();

  gulp.src(['public/*', 'public/templates/*', 'public/scripts/*',
      'public/locale/*'
    ])
    .pipe(watch())
    .pipe(livereload(server))


  gulp.watch('public/locale/*', ['translations']);

  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css/'))

  concatJs();



});

gulp.task('listen', function(next) {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    next();
  });
});
