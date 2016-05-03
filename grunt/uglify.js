module.exports = {
    options: {
        banner: '<%= banner %>'
    },
    dist: {
		expand: true,
        cwd: '<%= path.src %>',
		src: ['!**/*.min.js','**/*.js'],
        dest: '<%= path.tmp %>'
    }
}