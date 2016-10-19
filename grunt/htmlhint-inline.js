module.exports = {
	options : {
		htmlhintrc:	"<%= path.conf %>/.htmlhintrc",
		ignore: {
			"<?":"?>",
			"<?php":"?>",
			"<%":"%>"
		}
	},
	dist: {
		src : ["<%= path.dist %>/**/*.{htm,html,inc}"]
	}
}