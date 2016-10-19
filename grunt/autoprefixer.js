module.exports = {
	options: {
		map: false,
		silent: true,
		browsers: ["last 2 versions", "ie 8", "ie 9"]
	},
	dist: {
		expand: true,
        cwd: "<%= path.tmpdist %>",
		src: ["**/*.css", "!**/*.min.css"],
		dest: "<%= path.dist %>",
		ext: ".css"
	},
	dev: {
		expand: true,
        cwd: "<%= path.build %>",
		src: ["**/*.css","!**/*.min.css"],
		dest: "<%= path.build %>",
		ext: ".css"
	}
}