> How install me project 

1. git clone __git.url.__ site (input real URL)
2. cd site
3. boweer i
4. npm i
5. gulp


Move to the dirrectory with project and do:
bower i jquery normalize.css modernizer -S
npm i gulp browser-sync -D
touch app/index.html
cd app
mkdir css js
touch css/{main.css,about-me.css}
touch js/main.js
- open main.js and write for test components:
	$(document).ready(function(){
	console.log('I am on the global page');
	});

- copy this in the gulpfile.js
var gulp = require("gulp"),
	browserSync = recuire('browser-sync');

gulp.task('server', function (){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function (){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);



<!-- install gulp -->
global:
npm install --global gulp

local:
npm install --save-dev gulp

# varden-dz1
# varden-dz1

Add project to the Git:
git remote add origin https://github.com/you-login/name-project.git
git push -u origin master