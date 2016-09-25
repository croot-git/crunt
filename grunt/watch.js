module.exports = {
	options:{
		interrupt: true
	},
	html: {
		files: ['<%= path.src %>/**/*.{htm,html}'],
		tasks: ['includes:dev','jsbeautifier:dev']
	},
	css: {
		files: ['<%= path.src %>/**/*.{css,sass,scss}'],
		tasks: ['copy:dev','sass:dev','autoprefixer:dev']
	},
	js: {
		files: ['<%= path.src %>/**/*.{js,json}'],
		tasks: ['copy:dev','jsbeautifier:dev']
	}
};