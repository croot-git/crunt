module.exports = {
	"test": [
		//Task for test.
	],
	"build": [
		"clean:dev",
		"copy:dev",
		"sass:dev",
		"autoprefixer:dev",
		"includes:dev",
		//"jsbeautifier:dev",  //속도개선 필요
		"connect:server",
		"watch"
	],
	"dist": [
		"clean:dist",
		"copy:dist",
		"sass:dist",
		"autoprefixer:dist",
		"includes:dist",
		"jsbeautifier:dist",
		"htmlhint-inline:dist"
	],
	//v2.0.0
	"webfont": [],
	"splite": []
}