module.exports = {
	dist: {
		options: {
			formatter: [
				{
					id: 'text',
					dest: 'csslint.txt'
				}
			]
		},
        src: '<%= path.src %>/css/**/*.{scss,css}'
    }
}