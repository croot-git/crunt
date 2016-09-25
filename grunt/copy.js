module.exports = {
	dev: {
		files: [{
			expand: true,
			cwd: '<%= path.src %>',
			src: ['**/*.{css,min.js,json}'],
			dest: '<%= path.tmpdev %>'
		}],
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= path.src %>',
			src: ['**/*.{css,min.js,json}'],
			dest: '<%= path.dist %>'
		}],
	}
}