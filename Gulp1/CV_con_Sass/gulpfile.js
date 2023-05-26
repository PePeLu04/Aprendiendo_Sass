const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// Tarea inicio
gulp.task('inicio', function (done) {
  console.log('Generando proyecto CV');
  done();
});

// Tarea final
gulp.task('final', function (done) {
  console.log('Proyecto CV generado');
  done();
});

// Tarea por defecto
gulp.task('default', function (done) {
  return gulp.src(['index.html', 'sass/styles.css'])
    .pipe(gulp.dest('dist/'));
  done();
});
