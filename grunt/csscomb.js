module.exports = {
	options: {
		config: '<%= path.conf %>/.csscomb.json'
	},
    dist: {
		expand: true,
		cwd : '<%= autoprefixer.dist.dest %>',
        src: '**/*.css',
        dest: '<%= path.tmp %>/csscomb/',
		ext: '.css'
    }
}