# CRUNT


이건 어디까지나 내 개인적인 grunt임니다.

남이 사용하는걸 뭐 어떻게 말릴 순 없지만 써볼테면 써보던가!

이거 crunt쓸려면 아래 소프트웨어들 있어야댐니다

* Node.js - [http://nodejs.org/](http://nodejs.org/)
* Grunt CLI - [https://github.com/gruntjs/grunt-cli](https://github.com/gruntjs/grunt-cli)
* Sass - [http://sass-lang.com/install](http://sass-lang.com/install)

## dist
### CSS flow
> #### 1. sass

>> sass문법을 css로 변경

>> [path.src]/\*.sass => [path.tmp]/*.css


> #### 2. csscomb:dist

>> [path.tmp]/\*.css => [path.tmp]/*.css


> #### 3. autoprefixer:dist

>> css prefix를 추가

>> [path.tmp]/\*.css => [path.tmp]/*.css


> #### 4. csslint:dist

>> css 파일 유효성 검사

>> [path.doc]/csslint.txt


> #### 5. cssmin:target

>> css 파일을 압축함

>> [path.tmp].css => [path.dist].css

### JS flow

> #### 1. jshint:dist

> #### 2. uglify:dist


### HTML flow

> #### 1. includes:files
