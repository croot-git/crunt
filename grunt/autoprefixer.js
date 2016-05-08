module.exports = {
	options: {
		//map: true,
		silent: true,
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
	},
	dist: {
		expand: true,
        cwd: '<%= path.tmpdist %>',
		src: ['**/*.css', '**/!*.min.css'],
		dest: '<%= path.tmpdist %>',
		ext: '.css'
	},
	dev: {
		options: {
			map: true
		},
		expand: true,
        cwd: '<%= path.tmpdev %>',
		src: ['**/*.css', '**/!*.min.css'],
		dest: '<%= path.tmpdev %>',
		ext: '.css'
	}
}