module.exports = {
	options: {
		includePath: '<%= path.src %>',
		//includeRegexp: /^\s*<!--\s*include\s+"(\S+)"\s*-->\s*$/, // <!-- include "FILENAME" -->
		includeRegexp: /^\s*<!--\#include\svirtual\=+"(\S+)"\s*-->\s*$/, // <!--#include virtual="FILENAME" -->
		duplicates: true,
		silent: true,
	},
	dev: {
		options: {
			debug: true,
			flatten: true,
			expand: true,
		},
		files: [{
			cwd: '<%= path.src %>',
			src: '**/*.{htm,html,incl}',
			dest: '<%= path.tmpdev %>'
		}]
	},
	dist: {
		options: {
			flatten: true,
			expand: true
		},
		files: [{
			cwd: '<%= path.src %>',
			src: '**/*.{htm,html}',
			dest: '<%= path.dist %>'
		}]
	}
}