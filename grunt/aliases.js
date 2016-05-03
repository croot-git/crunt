module.exports = {
	'test': [
		'clean',
		'uglify:dist',
		'concat:dist'
	],
	'html': [
		'includes:files'
	],
	'css': [
		'autoprefixer:dist',
		'csscomb:dist',
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