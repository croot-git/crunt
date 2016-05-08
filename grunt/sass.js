module.exports = {
	dist: {
		options: {
			style: 'compact',
			cacheLocation: '<%= path.tmp %>/.sass',
			//noCache: true,
		},
		files: [{
			expand: true,
			cwd: '<%= path.tmp %>',
			src: ['**/*.{scss,sass}'],
			dest: '<%= path.tmp %>',
			ext: '.css'
		}]
	}
}