// var gulp = require('gulp');

// gulp.task('default', function() {
//   // place code for your default task here
// });
var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('server', function (){
	browserSync({
			proxy: "dz1.com"

	});
});

// var gulp = require('gulp'),
// 	browserSync = require('browser-sync');
//
// gulp.task('server', function (){
// 	browserSync({
// 		port: 9000,
// 		server: {
// 			baseDir: 'app'
// 		}
// 	});
// });

gulp.task('watch', function (){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});


// Gulp watch Sass
//
// Cледить за одним типом файлов.
// gulp.watch('app/scss/**/*.scss', ['sass']);
//
// Cледить за несколькими типами файлов. Все это можно объединить в методе watch:
// gulp.task('watch', function(){
//   gulp.watch('app/scss/**/*.scss', ['sass']);
//   // другие ресурсы
// })
//
// Следим за изменениями в Sass файлах
//
// gulp.task('sass', function() {
// 	// Получаем все файлы с окончанием .scss в папке app/scss и дочерних директориях
// 	// Если добавить в проект файл print.scss, то в папке app/css появится файл print.css
// return gulp.src('app/scss/**/*.scss')
// .pipe(sass())
// .pipe(gulp.dest('app/css'))
// })
//
// Gulp watch Sass

gulp.task('default', ['server', 'watch']);

// gulp.task('hello', function() {
//   console.log('Hello Varden! You are happy?');
// });
