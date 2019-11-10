const gulp = require("gulp");
const append = require("gulp-append-prepend").appendText;
const babel = require("gulp-babel");
const prepend = require("gulp-append-prepend").prependText;
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");

const nos = Object("");

gulp.task("dist", () => gulp.src("./index.js")
	.pipe(sourcemaps.init())
	.pipe(replace("module.exports =", "return"))
	.pipe(prepend("!function(a){if(typeof define=='function'&&define.amd){define(a);}else{window.writecsv=a();}}(function(){", nos))
	.pipe(append("})", nos))
	.pipe(babel({
		presets: ["babel-preset-env"],
		minified: true,
		comments: false
	}))
	.pipe(terser({mangle: {toplevel: true}}))
	.pipe(rename("simple-csv-writer.min.js"))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("dist"))
)