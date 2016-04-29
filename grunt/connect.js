module.exports = {
	server : {
		options: {
			port : 8080,
			base : '<%= path.dist %>',
			open : true,
			keepalive: true,
			livereload: true
		}
	}
}