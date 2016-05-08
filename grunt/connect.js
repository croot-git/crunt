module.exports = {
	server : {
		options: {
			port: 8080,
			base: ['<%= path.tmpdev %>'],
//			directory: '<%= path.tmpdev %>',
//			open: true,
			keepalive: true,
//			livereload: true
		}
	}
}