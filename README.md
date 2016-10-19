# CRUNT
아래 환경이 구축되어야 사용이 가능합니다.

* Node.js v6.6.0 - [http://nodejs.org/](http://nodejs.org/)
* Grunt cli v1.2.0 - [https://github.com/gruntjs/grunt-cli](https://github.com/gruntjs/grunt-cli)
  > "npm install -g grunt-cli" (in nodejs)

* ruby - [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)
* Sass - [http://www.sass-lang.com/](http://www.sass-lang.com/)
  > "gem install sass" (in ruby)
  
* 그 외는 [package.json](https://github.com/croot-git/crunt/blob/master/package.json)을 참고 바람.

## PATH
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
	tmpdev: '.tmp/dev',
	tmpdist: '.tmp/dist',
    docs: 'docs',
	conf : 'config'

## TASK FLOW
#### default
    'clean:build',
    'copy:dev',
	'sass:dev',
	'autoprefixer:dev',
	'includes:dev',
	'jsbeautifier:dev',
	'connect:server',
	'watch'

#### dist
    'clean:dist',
	'copy:dist',
	'sass:dist',
	'autoprefixer:dist',
	'includes:dist',
	'jsbeautifier:dist' //do nothing
