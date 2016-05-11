module.exports = {
	dev: {
		files: [{
			expand: true,
			cwd: '<%= path.src %>',
			src: ['**/*.{css,js}'],
			dest: '<%= path.tmpdev %>'
		}],
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= path.src %>',
			src: ['**/*.min.{css,js}','**/{lib,libs}/*.js'],
			dest: '<%= path.dist %>'
		}],
	}
}