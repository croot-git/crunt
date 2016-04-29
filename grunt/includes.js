module.exports = {
	files: {
		options: {
			silent: true
		},
		src: '<%= path.src %>/html/**/*.html',
		dest: '<%= path.dist %>/html',
		flatten: true,
		cwd: '.'
	}
}