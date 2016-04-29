module.exports = {
	options: {
		shorthandCompacting: false,
		roundingPrecision: -1,
		sourceMap: true,
		debug: true
	},
	target: {
		files: [{
			expand: true,
			cwd: '<%= csscomb.dist.dest %>',
			src: ['**/*.css', '**/!*.min.css'],
			dest: '<%= path.dist %>/css/',
			ext: '.min.css'
		}]
	}
};
