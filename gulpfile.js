var gulp = require('gulp')
,imagemin = require('gulp-imagemin')
,clean = require('gulp-clean')
,concat = require('gulp-concat')
,htmlReplace = require('gulp-html-replace')
,uglify = require('gulp-uglify')
,usemin = require('gulp-usemin')
,cssmin = require('gulp-cssmin')
,browserSync = require('browser-sync').create()
,jshint = require('gulp-jshint')
,jshintStylish = require('jshint-stylish')
,csslint = require('gulp-csslint')
,autoprefixer = require('gulp-autoprefixer')
,sass = require('gulp-sass');

gulp.task('default', ['copy'], function() {
  gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
  return gulp.src('src/**/*')
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist')
      .pipe(clean());
});

gulp.task('build-img', function() {

return gulp.src('dist/assets/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('usemin', function() {
return gulp.src('dist/**/*.html')
  .pipe(usemin({
    js: [uglify],
    css: [autoprefixer]
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('src/assets/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('sassWatch', function () {
  gulp.watch('src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['clean', 'copy', 'usemin', 'build-img','sass', 'sassWatch'], function() {
  browserSync.init({
      server: {
          baseDir: ''
      }
  });

  gulp.watch('src/**/*').on('change', browserSync.reload);

  gulp.watch('src/assets/js/**/*.js').on('change', function(event) {
      console.log("Linting " + event.path);
      gulp.src(event.path)
          .pipe(jshint())
          .pipe(jshint.reporter(jshintStylish));
  });

  gulp.watch('src/assets/css/**/*.css').on('change', function(event) {
      console.log("Linting " + event.path);
      gulp.src(event.path)
          .pipe(csslint())
          .pipe(csslint.reporter());
  });

  gulp.watch('src/assets/less/**/*.less').on('change', function(event) {
     var stream = gulp.src(event.path)
          .pipe(less().on('error', function(erro) {
            console.log('LESS, erro compilação: ' + erro.filename);
            console.log(erro.message);
          }))
          .pipe(gulp.dest('src/assets/css'));
  });

});
