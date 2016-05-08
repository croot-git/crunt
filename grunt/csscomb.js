module.exports = {
	options: {
		config: '<%= path.conf %>/.csscomb.json'
	},
    dist: {
		files: [{
			expand: true,
			cwd: '<%= path.tmpdist %>',
			src: ['**/*.css','**/!*.min.css'],
			dest: '<%= path.tmpdist %>',
			ext: '.css'
		}]
    }
}