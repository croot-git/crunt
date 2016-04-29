module.exports = {
	options: {
		//map: true,
		silent: true,
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
	},
	dist: {
		expand: true,
        cwd: '<%= path.src %>/css',
        src: ['**/*.{sass,css}'],
        dest: '<%= path.tmp %>/autoprefixer/',
		ext: '.css'
	}
}