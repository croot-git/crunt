module.exports = {
	options: {
		config: "<%= path.conf %>/.jsbeautifyrc"
	},
	dev: {
		src: ["<%= path.build %>/**/*.{js,json,html}","!**/*.min.js"],
	},
	dist: {
		src: ["<%= path.tmpdist %>/**/*.{js,json,html}","!**/*.min.js"],
	}
}