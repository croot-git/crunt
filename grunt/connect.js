module.exports = {
	server : {
		options: {
			protocol: "http",
			port: 8080,
			useAvailablePort: true,
			base: ["<%= path.serverRoot %>"],
			open: true,
		}
	}
}