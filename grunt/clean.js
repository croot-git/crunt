module.exports = {
	all: [ "<%= path.build", "<%= path.dist %>", "<%= path.tmp %>", "<%= path.docs %>" ],
	dev: [ "<%= path.cache %>", "<%= path.build %>","<%= path.tmpdev" ],
	dist:  [ "<%= path.cache %>", "<%= path.tmpdist %>", "<%= path.dist %>" ],
	docs:  [ "<%= path.docs %>" ],
	temp:  [ "<%= path.tmp %>" ]
}