var gulp = require("gulp"),
	sass=require("gulp-sass"),
	livereload = require('gulp-livereload');
	
gulp.task("_sass", function() {
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(livereload());
		
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.scss', ['_sass']);
});

