module.exports = {
	options:{
		interrupt: true
	},
	html: {
		files: ["<%= path.src %>/**/*.{htm,html}"],
		tasks: ["newer:includes:dev"]
	},
	css: {
		files: ["<%= path.src %>/**/*.{css,sass,scss}"],
		tasks: ["newer:copy:dev","newer:sass:dev"]
	},
	js: {
		files: ["<%= path.src %>/**/*.{js,json}"],
		tasks: ["newer:copy:dev"]
	},
	etc: {
		files: ["<%= path.src %>/**/*.{png,gif,jpg,jpeg,bmp,eot,woff2,woff,ttf,otf,svg,mp4,mp3}"],
		tasks: ["newer:copy:dev"]
	}
};