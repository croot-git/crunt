module.exports = {
	dist: {
		expand: true,
		cwd: '<%= uglify.dist.dest %>',
		src: '**/*.js',
		dest: '<%= path.dist %>',
		ext: '.min.js'
	}
}