module.exports = {
	'test': [
		'includes:dist'
	],
	'default': [
		'clean:build',
		'sass:dev',
		'csscomb:dev',
		'autoprefixer:dev',
//		'csslint:dev',
//		'jshint:dev',
		'includes:dev',
		'connect:server'
	],
	'dist': [
		'clean:dist',
		'sass:dist',
		'csscomb:dist',
		'autoprefixer:dist',
		'cssmin:target',
		'uglify:dist',
		'includes:files'
	],
/////////////////////////////////
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
}