"use strict";

let gulp = require("gulp");
let imagemin = require("gulp-imagemin");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let server = require("browser-sync");
//let mqpacker = require("css-mqpacker");
let minify = require("gulp-csso");
let rename = require("gulp-rename");
let svgstore = require("gulp-svgstore");
let svgmin = require("gulp-svgmin");
let run = require("run-sequence");
let del = require("del");

gulp.task("style", function(){
	gulp.src("scss/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer({browsers: [
				"last 1 version",
				"last 2 Chrome versions",
				"last 2 Firefox versions",
				"last 2 Opera versions",
				"last 2 Edge versions"
			]})
		]))
		.pipe(gulp.dest("build/css"))
		/*.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))*/
        .pipe(server.reload({stream: true}));
});

gulp.task("minify-css", function(){
	return gulp.src("css/style.css")
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("css"));
});

gulp.task("images", function(){
	return gulp.src("build/images/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({optimizationlevel: 3}),
			imagemin.jpegtran({progressive: true})
		]))
		.pipe(gulp.dest("build/images"));
});

gulp.task("symbols", function(){
	return gulp.src("build/images/*.svg")
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("symbols.svg"))
		.pipe(gulp.dest("build/images"));
});

gulp.task("serve", function(){
	server.init({
		server: "build"
	});
    gulp.watch("scss/*.scss", ["style"]);
    gulp.watch("scss/blocks/*.scss", ["style"]);
    gulp.watch("*.html", ["copy_html"]);
    gulp.watch("js/*.js", ["copy_html"]);
});

gulp.task("build", function(fn){
	run("clean", "copy", "style", "images", "symbols", "minify-css", fn);
});

gulp.task("copy", function(){
	return gulp.src([
		"images/**",
		"fonts/**",
		"js/**",
		"*.html"
		], {
			base: "."
		})
		.pipe(gulp.dest("build"))
});

gulp.task("copy_html", function(){
    return gulp.src([
        "*.html",
		"js/*.js"
    	], {
        	base: "."
    	})
        .pipe(gulp.dest("build"))
		.pipe(server.reload({stream: true}));
});

gulp.task("clean", function(){
	return del("build");
});

//gulp.task('serve', serve('public'));

/*(function (r) {
    "use strict";
    let scss = r("gulp-scss");
    let gulp = r("gulp");
    gulp.task("scss", function () {
        gulp.src(
            "scss/*.scss"
        ).pipe(scss()).pipe(gulp.dest("css"));
    });
}(require));*/