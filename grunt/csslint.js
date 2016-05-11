module.exports = {
	options: {
		csslintrc: '<%= path.conf %>/.csslintrc',
		force: true,
		quiet: true,
		formatters: [{
			id: 'text',
			dest: '<%= path.doc %>/csslint.txt'
		}],
	},
	dist: {
		options: {
			quiet_all: true
		},
        src: '<%= path.src %>/**/*.css'
    },
	dev: {
		src: '<%= path.tmpdev %>/**/*.css'
	}
}