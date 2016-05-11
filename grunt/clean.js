module.exports = {
	all: [ '<%= path.dist %>', '<%= path.tmp %>', '<%= path.docs %>' ],
	build: [ '<%= path.tmpdev %>' ],
	dist:  [ '<%= path.tmpdist %>', '<%= path.dist %>' ],
	docs:  [ '<%= path.docs %>' ],
	temp:  [ '<%= path.tmp %>' ]
}