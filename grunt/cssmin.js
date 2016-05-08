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
			cwd: '<%= path.tmp %>',
			src: ['**/*.css', '**/!*.min.css'],
			dest: '<%= path.dist %>',
			ext: '.min.css'
		}]
	}
};
