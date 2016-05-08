module.exports = {
	options: {
		config: '<%= path.conf %>/.csscomb.json'
	},
    dist: {
		expand: true,
        src: '<%= path.tmp %>/**/*.css'
    }
}