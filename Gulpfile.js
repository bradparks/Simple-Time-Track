var gulp = require("gulp"), gutil = require("gulp-util");

var coffee = require("gulp-coffee"),
		uglify = require('gulp-uglify'),
		less = require("gulp-less"),
		concat = require("gulp-concat"),
		zip = require("gulp-zip");

gulp.task("zip", function () {
	return gulp.src([
				'css/*',
				'img/*',
				'js/*',
				'manifest.json',
				'popup.html',
				'timer128x128.png',
				'timer32x32.png'
			])
			.pipe(zip('simple_time_track.zip'))
			.pipe(gulp.dest('dist'));
});

gulp.task("default", ["zip"]);
