module.exports = {
	options: {
		includePath: "<%= path.include %>",
		includeRegexp: /^\s*<!--\s*include\s+"(\S+)"\s*-->\s*$/, // <!-- include "FILENAME" -->
		//includeRegexp: /^\s*<!--\#include\svirtual\=+"(\S+)"\s*-->\s*$/, // <!--#include virtual="FILENAME" -->
		duplicates: true,
		silent: true,
	},
	dev: {
		options: {
			debug: true,
			flatten: true,
			silent: true,
		},
		files: [{
			cwd: "<%= path.src %>",
			src: "**/*.{htm,html}",
			dest: "<%= path.build %>"
		}]
	},
	dist: {
		options: {
			flatten: true,
			expand: true
		},
		files: [{
			cwd: "<%= path.html %>",
			src: "**/*.{htm,html}",
			dest: "<%= path.dist %>"
		}]
	}
}