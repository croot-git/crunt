module.exports = {
	options: {
		//map: true,
		silent: true,
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
	},
	dist: {
        src: '<%= path.tmp %>/**/*.css'
	}
}