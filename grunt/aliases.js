module.exports = {
	'test': [
		'sprite:dev'
	],
	'default': [
		'clean:build',
		'copy:dev',
		'sass:dev',
		'csscomb:dev',
		'autoprefixer:dev',
		'csslint:dev',
		'jshint:dev',
//		'sprite:dev',
		'includes:dev',
		'connect:server'
	],
	'dist': [
		'clean:dist',
		'copy:dist',
		'sass:dist',
		'csscomb:dist',
		'autoprefixer:dist',
		'cssmin:target',
		'uglify:dist',
		'includes:files'
	],
	'webfont': []
/*******************************
	'html': [
		'includes:files'
	],
	'css': [
		'sass:dist',
		'csscomb:dist',
		'autoprefixer:dist',
		'cssmin:target'
	],
	'js': [
		'concat:dist',
		'uglify:dist'
	],
	'lint': [
		'htmlhint',
		'csslint',
		'jshint:dist'
	]
*******************************/
}