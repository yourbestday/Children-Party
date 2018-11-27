// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
/*gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});*/
gulp.task('watch', function(){
    gulp.watch('app/css/*.css')
    .on('change', function(path, stats) {
        console.log(path);
        // code to execute on change
    })
    .on('unlink', function(path, stats) {
        console.log(path);
        // code to execute on delete
    });
});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('default', gulp.series('del', function() {
    // default task code here
}));
