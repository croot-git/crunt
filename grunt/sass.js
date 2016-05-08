module.exports = {
	dist: {
		options: {
			style: 'compact',
			cacheLocation: '<%= path.tmp %>/.sass/',
			//noCache: true,
		},
		{
			expand: true,
			cwd: '<%= path.src %>',
			src: ['**/*.{scss,sass}'],
			dest: '<%= path.tmpdist %>',
			ext: '.css'
		}
	}
}