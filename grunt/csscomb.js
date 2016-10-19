module.exports = {
	options: {
		config: '<%= path.conf %>/.csscomb.json'
	},
    dist: {
		files: [{
			expand: true,
			cwd: '<%= path.tmpdist %>',
			src: ['**/*.css','!**/*.min.css'],
			dest: '<%= path.tmpdist %>',
			ext: '.css'
		}]
    },
	dev: {
		files: [{
			expand: true,
			cwd: '<%= path.build %>',
			src: ['**/*.css','!**/*.min.css'],
			dest: '<%= path.build %>',
			ext: '.css'
		}]
	}
}