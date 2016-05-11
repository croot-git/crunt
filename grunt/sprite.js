module.exports = {
	options: {
		algorithms: 'binary-tree',
		cssFormat: 'scss'
	},
	dist: {
		src: '<%= path.src %>/images/sprites/*.png',
		dest: '<%= path.dist %>/images/sp_common.png',
		destCss: '<%= path.tmpdist %>/css/sprite.css'
	},
	dev: {
		src: '<%= path.src %>/images/sprites/*.png',
		dest: '<%= path.tmpdev %>/images/sp_common.png',
		destCss: '<%= path.tmpdev %>/css/sprite.scss'
	}
}