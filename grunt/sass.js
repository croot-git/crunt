module.exports = {
	options: {
		style: 'compact',
		noCache: true,
		update: true
	},
	dist: {
		expand: true,
		cwd: '<%= path.src %>',
		src: ['**/*.{scss,sass}'],
		dest: '<%= path.tmpdist %>',
		ext: '.css'
	},
	dev: {
		options: {
			trace: true,
			cacheLocation: '<%= path.tmp %>/.sass/',
		},
		expand: true,
		cwd: '<%= path.src %>',
		src: ['**/*.{scss,sass}'],
		dest: '<%= path.tmpdev %>',
		ext: '.css'
	}
}