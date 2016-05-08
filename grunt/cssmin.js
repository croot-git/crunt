module.exports = {
	options: {
		shorthandCompacting: false,
		roundingPrecision: -1,
		sourceMap: false,
		debug: true
	},
	target: {
		files: [{
			expand: true,
			cwd: '<%= path.tmpdist %>',
			src: ['**/*.css', '**/!*.min.css'],
			dest: '<%= path.dist %>',
			ext: '.min.css'
		}]
	}
};
