module.exports = {
    options: {
		//preserveComments:  function(node, comment) { return /^!/.test( comment.value ); },
		preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
		//report: 'gzip',
    },
    dist: {
		expand: true,
        cwd: '<%= concat.dist.dest %>',
		src: 'js/*.js',
        dest: '<%= path.dist %>'
    }
}