module.exports = {
	options: {
		style: "compact",
		noCache: true,
		update: true,
		//usemap: true
	},
	dist: {
		options: {
			usemap: false
		},
		expand: true,
		cwd: "<%= path.src %>",
		src: ["**/*.{scss,sass}"],
		dest: "<%= path.tmpdist %>",
		ext: ".css"
	},
	dev: {
		options: {
			trace: true,
			cacheLocation: "<%= path.tmp %>/.sass/",
		},
		expand: true,
		cwd: "<%= path.src %>",
		src: ["**/*.{scss,sass}"],
		dest: "<%= path.build %>",
		ext: ".css"
	}
}