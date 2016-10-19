module.exports = {
	options: {
		config: "<%= path.conf %>/.jsbeautifyrc"
	},
	dev: {
<<<<<<< HEAD
		src: ["<%= path.build %>/**/*.{js,json,html}","!**/*.min.js"],
	},
	dist: {
		src: ["<%= path.tmpdist %>/**/*.{js,json,html}","!**/*.min.js"],
=======
		src: ['<%= path.tmpdev %>**/*.{js,json,html}','!**/*.min.js'],
	},
	dist: {
		src: ['<%= path.tmpdist %>**/*.{js,json,html}','!**/*.min.js'],
>>>>>>> 02d02afb2b3ac19eccbaa2151185db1535a6468c
	}
}