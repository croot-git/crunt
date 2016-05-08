module.exports = {
	options: {
		// regexp :: <!-- include "filename" -->
		includeRegexp: /^\s*<!--\s*include\s+"(\S+)"\s*-->\s*$/,
		silent: true
	},
	files: {
		flatten: true,
		expand: true,
		cwd: '<%= path.src %>',
		src: '**/*.{htm,html}',
		dest: '<%= path.tmpdist %>'
	},
	dev: {
		flatten: true,
		expand: true,
		cwd: '<%= path.src %>',
		src: '**/*.{htm,html}',
		dest: '<%= path.tmpdev %>'
	}
}