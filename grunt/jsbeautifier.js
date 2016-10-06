module.exports = {
	dev: {
		src: ['<%= path.tmpdev %>**/*.{js,json,html}','!**/*.min.js'],
	},
	dist: {
		src: ['<%= path.tmpdist %>**/*.{js,json,html}','!**/*.min.js'],
	}
}