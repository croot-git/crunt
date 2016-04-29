module.exports = {
	'test' : [
		'clean',
		'autoprefixer:dist',
		'csscomb:dist',
		'cssmin:target'
	],
	'html' : [
		'includes:files'
	],
	'css' : [
		'autoprefixer:dist',
		'csscomb:dist',
		'cssmin'
	],
	'lint' : [
		'htmlhint',
		'csslint',
		'jshint'
	],
	'default' : [
		'connect'
	]
}