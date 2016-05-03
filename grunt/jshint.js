module.exports = {
    options: {
		jshintrc: '<%= path.conf %>/.jshintrc',
        force: true,
        reporter: require('jshint-html-reporter'), // output을 수정 할 수 있는 옵션
		reporterOutput: '<%= path.docs %>/jshint.html'
    },
    dist: {
        expand: true,
        cwd: '<%= path.src %>/js/',
        src: ['**/*.js'],
        dest: '<%= path.tmp %>/js/'
    }
}