module.exports = {
	options: {
		algorithms: "binary-tree",
		cssFormat: "css"
	},
	dev: {
		scss: {
			options: { cssFormat: "scss" },
			src: "<%= path.src %>/images/sprites/*.png",
			dest: "<%= path.src %>/images/<%= path.spliteImage %>.png",
			destCss: "<%= path.src %>/css/sprite.scss"
		},
		css: {
			src: "<%= path.src %>/images/sprites/*.png",
			dest: "<%= path.build %>/images/<%= path.spliteImage %>.png",
			destCss: "<%= path.build %>/css/sprite.css"
		}
	},
	dist: {
		src: "<%= path.src %>/images/sprites/*.png",
		dest: "<%= path.tmpdist %>/images/<%= path.spliteImage %>.png",
		destCss: "<%= path.tmpdist %>/css/sprite.css"
	}
}