module.exports = {
    options: {
		//preserveComments:  function(node, comment) { return /^!/.test( comment.value ); },
		preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
		//report: 'gzip',
    },
    dist: {
		expand: true,
        cwd: '<%= path.src %>',
		src: [
			'**/*.js',
			'!**/{lib,libs}/*.js',
			'!**/*.min.js'
		],
        dest: '<%= path.dist %>',
		ext: '.min.js'
    }
}