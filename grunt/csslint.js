module.exports = {
	options: {
		csslintrc: '<%= path.conf %>/.csslintrc',
		quiet_all: true,
		force: true,
		formatters: [
			{
				id: 'text',
				dest: '<%= path.doc %>/csslint.txt'
			}
		],
		
	},
	dist: {		
        src: '<%= path.src %>/**/*.css'
    }
}