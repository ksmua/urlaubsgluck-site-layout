let gulp = require('gulp'),
//  concat = require('gulp-concat'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync');


// function js() {
//   return src('client/javascript/*.js', { sourcemaps: true })
//     .pipe(concat('app.min.js'))
//     .pipe(dest('build/js', { sourcemaps: true }))
// }

gulp.task('br-sync', function(){
	browserSync.init(
		{
			server: {baseDir: "./src/"}
		}
	);
});


gulp.task('runSass', function (){
	// console.log('It run.');
	return gulp.src('./src/sass/*.+(sass|scss)')
		.pipe(sass(
			{
				errorLogToConsole: true,
				outputStyle: 'compresed'
			}
		))
		// .pipe(autoprefixer(
		// 	{
		// 		browsers: ['last 8 versions']
		// 	}
		// ))
		// .on('error', console.error.bind(console))
		.pipe(gulp.dest('./src/css/',))
		.pipe(browserSync.reload({stream: true}));
	});
	
	gulp.task("html", function (){
		return gulp.src("./src/*.html")
			.pipe(browserSync.reload({ stream: true }));
	});
	gulp.task('watch', function(){
		gulp.watch('./src/sass/*.+(sass|scss)', gulp.parallel('runSass'));
		gulp.watch('./src/*.html', gulp.parallel('html'))
	});
	
gulp.task("default", gulp.parallel('watch', 'br-sync'));
	//exports.default = defaultTask;





// function runSass(go) {
// 	   console.log('It run.');
// 	gulp.src('./src/sass/*.+(sass|scss)')
//         .pipe(sass(
// 					{
// 						errorLogToConsole: true,
// 						outputStyle: 'compresed'
// 					}
// 				))
// 				.pipe(autoprefixer({
// 					browsers:['last 8 versions']
// 				}))
//         .on('error', console.error.bind(console))
// 				.pipe(gulp.dest('./src/css/'));

// 	go();
// }

