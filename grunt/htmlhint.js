module.exports = {
	html : {
		options : {
			'head-script-disabled': false,
			'tag-self-close': false,
			'id-class-value': false//'dash'
		},
		src : ['<%= path.dist %>/**/*.html']
	}
}