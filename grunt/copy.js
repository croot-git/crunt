module.exports = {
	dev: {
		files: [{
			expand: true,
			cwd: "<%= path.src %>",
			src: ["**/*.{css,js,json,png,gif,jpg,jpeg,bmp,eot,woff2,woff,ttf,otf,svg,mp4,mp3}"],
			dest: "<%= path.build %>"
		}],
	},
	dist: {
		files: [{
			expand: true,
			cwd: "<%= path.src %>",
			src: ["**/*.{css,js,json,png,gif,jpg,jpeg,bmp,eot,woff2,woff,ttf,otf,svg,mp4,mp3}"],
			dest: "<%= path.dist %>"
		}],
	}
}