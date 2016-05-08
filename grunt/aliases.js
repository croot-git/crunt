module.exports = {
	'test': [
		'sass'
	],
	'html': [
		'includes:files'
	],
	'css': [
		'sass:dist',
		'csscomb:dist',
		'autoprefixer:dist',
		'cssmin'
	],
	'js': [
		'concat:dist',
		'uglify:dist'
	],
	'lint': [
		'htmlhint',
		'csslint',
		'jshint'
	],
	'default': [
		'connect'
	]
}