import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: true })
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(groupCssMediaQueries())
		.pipe(
			webpcss({
				webpClass: '.webp',
				noWebpClass: '.no-webp',
			})
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 6 versions'],
				cascade: true,
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};
