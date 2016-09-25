module.exports = {
	'test': [
		//testing task
		'clean:build',
		'includes:dev',
	],
	'default': [
		'clean:build',
		'copy:dev',
		'sass:dev',
		'autoprefixer:dev',
		'includes:dev',
		'jsbeautifier:dev',
		'connect:server',
		'watch'
	],
	'dist': [
		'clean:dist',
		'copy:dist',
		'sass:dist',
		'autoprefixer:dist',
		'includes:dist',
		'jsbeautifier:dist' //do nothing
	],
	//v2.0.0
	'webfont': [],
	'splite': []
}