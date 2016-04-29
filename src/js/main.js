$(function () {
	var $mainBox = $('div.mainBox') ;								// 메인 박스
	var $middleCont = $mainBox.find('> div.middleCont') ;						// 메인 미들컨텐츠 박스	
	var $footBox = $mainBox.find('> div.footBox') ;							// 메인 푸터컨텐츠 박스
	var $slideBox = $middleCont.find('div.slideBox') ; 						// 메인 이미지슬라이드 박스
	var $browser = $(window) ; 									// 현재 브라우저	
	winHalfWidth = ($browser.width() - $mainBox.width()) / 2 ;					// 브라부어 여백 길이의 중간 값


	// var $naviBox = $('ul.naviBox') ;
	// var $naviWrapBox = $('<div class="naviWrap" />').append('<div class="movingBox" />') ;

	var $naviBox ;
	var $naviWrapBox ;
	var $movingBox ;

	/* [ 최초 브라우저 백그라운드 셋업 ] */
	function browserSet () {
		$(".imgBox .cont").width($(window).width());
		if ( $mainBox.find('div.bgSet').length == 0 ) {
			$naviBox = $('ul.naviBox') ;
			$naviWrapBox = $('<div class="naviWrap" />').append('<div class="movingBox" />') ;
			$naviWrapBox.remove() ;
			$naviBox.wrap( $naviWrapBox ) ;
			$naviWrapBox = $('div.naviWrap') ;
			$movingBox = $('div.movingBox') ;
			$movingBox.append('<p class="shadow"></p>') ;

			var $mainBg = $('<div class="bgSet" />') ;
			$mainBox.prepend( $mainBg.clone().addClass('left').append('<div class="box" />') , $mainBg.clone().addClass('right').append('<div class="box" />') ) ;
			$middleCont.prepend( $mainBg.clone().addClass('left') ) ;
			$footBox.prepend( $mainBg.clone().addClass('left') , $mainBg.clone().addClass('right') ) ;

			$slideBox.find('div.imgBox div').each(function (idx) {
				$(this).addClass( 'idx' + idx ) ;
			})			
			browserResize () ;
		} else {
			browserResize () ;
		}
	}

	browserSet () ;
	


	
	


	$naviBox.bind( 'mouseenter' , naviBoxOverHandler ) ;
	$movingBox.bind( 'mouseleave' , naviBoxOutHandler ) ;
	$naviBox.find('> li').bind( 'mouseenter' , naviBoxListOverHandler ) ;


	// [ 왼쪽 메뉴 ] //
	var $castCategory = $('ul.castCategory') ;
	var $castDetail = $castCategory.find('div.detail') ;	
	var $castCategoryClose = $castCategory.find('a.close') ;	
	var moveWidth = 640 ;
	// $castDetail.wrap('<div class="screen" />') ;	

	/* [ 브라우저 좌우 배경 리사이즈 셋업 ] */
	function browserResize () {
		$mainBox.find('div.bgSet').css({ 'width' : winHalfWidth + 'px' }) ;
		$mainBox.find('div.bgSet.left').css({ 'left' : -winHalfWidth + 'px' }) ;
		$mainBox.find('div.bgSet.right').css({ 'right' : -winHalfWidth + 'px' }) ;

		if ( $(window).width() > 960 ) {
			$('body').css({ 'overflow-x' : 'hidden' }) ;
			$naviWrapBox.css({ 'width' : $browser.width() , 'margin-left' : -(($browser.width() - 960) / 2) + 'px' }) ;
			$mainBox.css({ 'overflow' : 'visible' }) ;
		} else {
			$('body').css({ 'overflow-x' : 'auto' }) ;
			// $naviWrapBox.css({ 'width' : $browser.width() , 'margin-left' : '0px' }) ;
			$naviWrapBox.css({ 'min-width' : '960px' , 'margin-left' : '0px' }) ;
			$mainBox.css({ 'overflow' : 'hidden' }) ;
		}
	}

	/* [ 브라우저 리사이즈 제어 ] */
	$browser.resize(function () {
		
		$(".contents_top .imgBox .cont").width($(window).width());
		winHalfWidth = ($browser.width() - $mainBox.width()) / 2 ;
		if ( $browser.width() > 960 ) {
			// slideBoxWidth = $browser.width() - winHalfWidth - $castCategory.find('div.intro').width() ;
		}
		// trace( winHalfWidth ) ;
		browserSet () ;
	})

	/* [ top navi 고객센터 제어 ] */
	var $customeBtn = $mainBox.find('.quickMenu ul.type2 li.menu1 > a') ;
	var $customeList = $customeBtn.find('+ div.list') ;
	$customeList.slideUp() ;

	$customeBtn.bind( 'click' , customeBtnClickHandler ) ;
	function customeBtnClickHandler (e) {
		var $arr = $('<p class="arr" />') ;
		$customeList.closest('li').append( $arr ) ;
		$customeList.css({ 'visibility' : 'visible' }) ;
		$customeList.slideDown( 250 ) ;
	}

	$customeList.bind( 'mouseleave' , customeListOutHandler ) ;
	function customeListOutHandler (e) {
		$customeList.slideUp( 250 , function () {
			$customeList.css({ 'visibility' : 'hidden' }) ;
			$customeList.closest('li').find('p.arr').remove() ;
		}) ;
	}

	$customeList.find('a:last').bind( 'keydown' , customeListKeydownHandler ) ;
	function customeListKeydownHandler (e) {
		if ( e.keyCode == 9 && !e.shiftKey ) {
			customeListOutHandler () ;
		}
	}

	$customeBtn.bind( 'keydown' , customeBtnKeydownHandler ) ;
	function customeBtnKeydownHandler (e) {
		if ( e.keyCode == 9 && e.shiftKey && $customeList.css('visibility') == 'visible' ) {
			customeListOutHandler () ;
		}
	}
	
	// [ 내비게이션 ] //
	function naviBoxOverHandler () {
		$naviBox.find('ul').css({ 'visibility' : 'visible' }) ;
		$naviBox.stop().animate({ 'height' : '240px' } , 100 ) ;
		$movingBox.stop().animate({ 'height' : '240px' } , 100 , function () {
			$movingBox.addClass( 'chk' ) ;
		}) ;
	}

	function naviBoxOutHandler () {
		if ( $movingBox.hasClass( 'chk' ) ) {
			$naviBox.stop().animate({ 'height' : '88px' } , 100 ) ;
			$movingBox.stop().animate({ 'height' : '88px' } , 100  , function () {
				$naviBox.find('ul').css({ 'visibility' : 'hidden' }) ;
				$movingBox.removeClass( 'chk' ) ;
			}) ;
		}
		$naviBox.find('> li > a').removeClass( 'active' ) ;
	}

	function naviBoxListOverHandler (e) {
		e.stopPropagation() ;
		$(this).closest('li').siblings().find('> a').removeClass( 'active' ) ;
		$(this).closest('li').find('> a').addClass( 'active' ) ;
	}

	$naviBox.find('> li').bind( 'focusin' , naviBoxFocusinHandler ) ;
	function naviBoxFocusinHandler (e) {
		if ( !$movingBox.hasClass( 'chk' ) ) {
			$movingBox.addClass( 'chk' ) ;
			naviBoxOverHandler () ;
		}
	}

	$naviBox.find('li:last').bind( 'keydown' , naviBoxLastKeydownHandler ) ;
	function naviBoxLastKeydownHandler (e) {
		if ( e.keyCode == 9 ) {
			naviBoxOutHandler () ;
			$movingBox.removeClass( 'chk' ) ;
		}
	}
	
	$familySite = $('div.familySite > a') ;
	$familySite.find('> div.list').slideUp() ;

	$familySite.bind( 'click' , function (e) {
		e.preventDefault() ;
		$familySite.find('> div.list').css({ 'visibility' : 'visible' }).slideDown() ;
	}) ;

	$familySite.find('a:last').bind( 'keydown' , function (e) {
		$familySite.find('> div.list').slideUp() ;
	}) ;

	$familySite.find('> a').bind( 'keydown' , function (e) {
		if ( e.keyCode == 9 && e.shiftKey ) {
			$familySite.find('> div.list').slideUp() ;
		}
	}) ;

	$familySite.find('> div.list').bind( 'mouseleave' , function () {
		$familySite.find('> div.list').slideUp() ;
	})

	// [ 메인 레프트 박스 제어 ]
	var $castCategory = $middleCont.find('> ul.castCategory') ;
	// var castSetup = castObject ( $castCategory ) ;
	var castCtrl = castHandler ( $castCategory ) ;

	/* Main slide Controll*/
	mainSlide();
	
	siteMapHandler ( $mainBox.find('.quickMenu ul.type2 li.menu2') ) ;
})

function siteMapHandler ( obj ) {
	var that = siteMapObj ( obj ) ;
	that.$siteMap.css({ 'visibility' : 'hidden' }).slideUp(0 , function () {
		that.$siteMap.css({ 'visibility' :'visible' }) ;
	}) ;
	
	that.$target.bind( 'click' , function (e) {
		e.stopPropagation() ;
		that.siteMapOpenHandler () ;
	}) ;

	that.$btnClose.bind( 'click' , function (e) {
		e.stopPropagation() ;
		that.siteMapCloseHandler () ;
	}) ;

	that.$windo.resize(function () {
		that.siteMapWidthResizeHandler ( $(this).width() ) ;
	})
}

function siteMapObj ( target ) {
	var that = {
		$target : target ,
		$siteMap : target.find('div.siteMap') ,
		$btnClose : target.find('a.close') ,
		$shadow : target.find('div.bgBox') ,
		$windo : $(window) ,
		speed : 350 ,

		siteMapOpenHandler : function () {
			that.$siteMap.slideDown( that.speed ) ;
		} ,

		siteMapCloseHandler : function () {
			that.$siteMap.slideUp( that.speed ) ;
		} , 
		siteMapWidthResizeHandler : function ( _w ) {
			var halfW = (_w - 960) / 2 ;
			that.$siteMap.css({ 'width' : _w + 'px' , 'left' : -halfW + 'px' }) ;
		}
	} ;
	return that ;
}

function castObject ( target ) {
	var that = {
		openBtn : target.find('div.intro > a') ,
		detailBox : target.find('div.detail') ,
		closeBtn : target.find('div.detail').find('a.close') ,
		oriWidth : parseInt(target.css('width')) ,
		zidx : parseInt(target.find('div.detail').css('z-index')) ,
		duration : 750 ,
		easing : 'easeInOutSine' ,

		slide : function ( idx , css ) {
			target.stop().animate( css , target.duration , that.easing ) ;
		} ,

		btnClick : function ( e , obj ) {
			e.preventDefault() ;
			var idx = obj.closest('li').index() ;
			that.openBtn.removeClass( 'active' ) ;
			obj.addClass( 'active' ) ;

			if ( !obj.hasClass('close')) {
				if ( parseInt(target.css('width')) > that.oriWidth ) {
					that.detailBox.eq(idx).fadeOut(0).fadeIn(that.duration) ;
				} else {
					that.slide( idx , { 'width' : '960px' } ) ;
				}
				that.detailBox.eq(idx).removeClass( 'v-h' ).css({ 'z-index' : that.zidx+1 }) ;
				that.detailBox.filter(':not(:eq(' + idx + '))').addClass( 'v-h' ).css({ 'z-index' : that.zidx }) ;
			} else {				
				that.slide( idx , { 'width' : that.oriWidth + 'px' } ) ;
				setTimeout(function () {
					that.detailBox.filter(':not(:eq(' + idx + '))').addClass( 'v-h' ) ;
				} , that.duration ) ;
			}
		}
	} ;
	return that ;
}

function castHandler ( target ) {
	var that = castObject ( target ) ;

	that.openBtn.bind({
		click : function (e) {
			that.btnClick( e , $(this) ) ;
			// e.preventDefault() ;
			// idx = $(this).closest('li').index() ;
			// that.detailBox.eq(idx).removeClass( 'v-h' ).css({ 'z-index' :'118' }) ;
			// that.slide( idx , { 'width' : 960 } ) ;
		}
	}) ;

	that.closeBtn.bind({
		click : function (e) {
			e.preventDefault() ;
			that.btnClick( e , $(this) ) ;
		}
	}) ;
}



// <li class="menu1">
// 	<div class="intro">
// 		<h3>No.1 Food &amp; Service Innovator</h3>
// 		<p>생활을 더욱 풍료롭고 편리하게 눈에 보이지 않는 곳에 삼양이 함께 하고 있습니다.</p>
// 		<a href="#">About Samyang 자세히 보기</a>
// 	</div>
// 	<div class="detail v-h">


/* Main Slide sdh*/
var slideSet = function (param){
	var $element = param,
		slideList = new Array;

	$element.find(" > div").each(function(idx){
		slideList[idx] = $(this);
	});

	var that = {

		slideList:slideList,
		
		slide:function(css, duration, callback){
			$element.stop().animate(css, duration, callback);
		},

		dot:function(element, className, handler){
			// var btnTable = "<ul class='dotList'>";
			// for(var i=0; i < element.find("li").length-1; i++){
			// 	if(i == 0){
			// 		btnTable = btnTable + "<li class='"+className+" on' ></li>";
			// 	}
			// 	btnTable = btnTable + "<li class="+className+"></li>";
			// }
			// btnTable = btnTable + "</ul>";
			// element.append(btnTable);
			
			// $btnTable = $("ul.dotList");
			// $btnTable.delegate("."+className, 'click', handler);
			var $btnTable = element;
			$btnTable.bind("click",handler);
			return $btnTable;
		}
	}
	return that;
}

var chkThumBool = true ;
var mainSlide = function(){
	var $slide = $(".imgBox"),
		slide = slideSet($slide),
		index = 0, animated = true, index2 = 0, width = $(window).width(),
		slideList = slide.slideList;

	var $dotList = slide.dot($(".pageControl a"), 'thum', function(e){
		e.preventDefault();

		if($(this).hasClass('thum')){
			if ( chkThumBool == false ) {
				clearInterval(moveAuto);
				chkThumBool = true ;
			}
			if(animated == true && $(this).index() != index){
				clearInterval(moveAuto);				
				var gap = index - $(this).index()
				gap = gap
				index = $(this).index();
				
				$dotList.filter('.stop').addClass( 'active' ) ;
				$dotList.eq(index).addClass("active").siblings().removeClass("active");
				$('.pageControl a.stop').addClass('active') ;
				$slide.find("div").eq(0).after($slide.find("div#main_img0"+(index+1)));				
				slide.slide({'left':-$(window).width()}, 1000, function(){					
					$slide.find("div").eq(0).appendTo($slide);
					$(this).css({"left":0});
					animated = true;
				});
				
			}	
		}

		else if($(this).hasClass("play")){			
			
			$(this).addClass( 'active' ) ;
			$dotList.filter('.stop').removeClass( 'active' ) ;
			if ( chkThumBool == true ) {
				// alert('chk play')
				moveAuto = setInterval(function(){slideMove()}, 5000);
				chkThumBool = false ;
			}
		}

		else if($(this).hasClass("stop")){
			// $dotList.filter('.stop').addClass( 'active' ) ;
			// $dotList.siblings().removeClass("active");

			$('.pageControl a.play').removeClass('active') ;

			$(this).addClass( 'active' ) ;
			clearInterval(moveAuto);
		}	
		
	});

	// var moveAuto = setInterval(function(){slideMove()}, 3000);

	var slideMove = function(){
		animated = false;
		index++;
		if(index >= $dotList.length-2){
		 	index = 0;
		}
		$dotList.eq(index).addClass("active").siblings().removeClass("active");
		$dotList.filter('.play').addClass( 'active' ) ;
		
		slide.slide({'left':-$(window).width()}, 1000, function(){
			$slide.find("div").eq(0).appendTo($slide);
			$(this).css({"left":0});
			animated = true;
		});
	}
	$('.pageControl a.play').addClass('active') ;
	moveAuto = setInterval(function(){slideMove()}, 5000);
}

// $(function () {
// 	openPopHandler ( $('a.openPopBtn') ) ;
// }) ;

// function openPopObj ( target ) {
// 	var that = {
// 		$target :  target ,
// 		$body : $('body') ,
// 		docHeight : $(document).height() ,
// 		winHeight : $(window).height() ,
// 		scrollTop : $(window).scrollTop() ,
// 		$popArea : $('<div class="popArea" style="visibility:hidden; " />').append('<div class="box" />') ,
// 		urlName : '/html/pop/' + target.attr('href').replace( '#' , '' ) + '.html' ,
// 		offSetTop : target.offset().top ,
// 		chkBool : true ,
// 		toggle : 'open' ,
// 		$loadPop : null ,

// 		popOpen : function () {
// 	 		that.$popArea.load( that.urlName , function () {
// 	 			that.toggle = 'open' ;
// 	 			that.$loadPop = that.$popArea.find('div.pop_wrap') ;
// 	 			var $btnClose = that.$popArea.find('a.pop_close') ;
// 	 			var popWrapH = that.$loadPop.height() ;
// 	 			var areaCss = { 'visibility' : 'visible' } ,
// 	 			areaAni = { 'height' : that.docHeight + 'px' } ,
// 	 			popCss = { 'margin' : 'auto' , 'top' : -popWrapH + 'px' } ,
// 	 			popAni = { 'top' : ((that.docHeight / 2) - (popWrapH / 2)) + 'px' } ;

// 				if ( popWrapH > that.docHeight ) {
// 					that.slideUpDown ( areaCss , areaAni , popCss , popAni ) ;
// 				} else if ( $(window).scrollTop() > 0 ) {
// 					var chkHeight = $(window).scrollTop() ;
// 					that.chkBool = false ;
// 					that.slideUpDown ( areaCss , areaAni , popCss , popAni , chkHeight ) ;
// 				} else {
// 					var chkHeight = $(window).scrollTop() ;
// 					popAni = { 'top' : (chkHeight + 50) + 'px' } ;

// 					that.chkBool = false ;
// 					that.slideUpDown ( areaCss , areaAni , popCss , popAni , chkHeight ) ;
// 				}

//  				var $linkTitle = that.$loadPop.find('a[href=#popCont]') ;

// 	 			$btnClose.bind({
// 	 				click : function (e) {
// 		 				e.preventDefault () ;

// 		 				that.toggle = 'close' ;
// 		 				areaAni = { 'height' : '0px' } ,
// 		 				popCss = { 'top' : ((that.docHeight / 2) - (popWrapH / 2)) + 'px' } ,
// 		 				popAni = { 'top' : -(popWrapH + 500) + 'px' } ;

// 		 				if ( $(window).scrollTop() > 0 ) {
// 		 					var chkHeight = $(window).scrollTop() ;
// 		 				}
		 				
// 		 				that.slideUpDown ( areaCss , areaAni , popCss , popAni , chkHeight ) ;
// 	 				} ,

// 	 				keydown : function (e) {
// 	 					if ( e.keyCode == 9 && !e.shiftKey ) {
// 	 						$linkTitle.trigger( 'focus' ) ;
// 	 					}
// 	 				}
// 	 			}) ;

// 	 			$linkTitle.bind({
// 	 				keydown : function (e) {
// 	 					if ( e.keyCode == 9 && e.shiftKey ) {
// 	 						$btnClose.trigger( 'focus' ) ;
// 	 					}
// 	 				}
// 	 			}) ;
// 	 		}) ;
// 	 		that.$body.append( that.$popArea ) ;
// 		} , 

// 		slideUpDown : function ( css1 , ani1 , css2 , ani2 , ani ) {
// 			if ( that.chkBool != true ) {
// 				$('body').stop().animate({ scrollTop : ani + 'px' } , function () {
// 					that.$popArea.css( css1 ).stop().animate( ani1 ) ;
// 					that.$loadPop.css( css2 ).stop().animate( ani2 , function () {
// 						that.$loadPop.find('a[href=#popCont]').trigger( 'focus' )
// 						if ( that.toggle == 'close' ) {
// 							that.$popArea.css({ 'visibility' : 'hidden' }) ;
// 							that.$target.trigger( 'focus' ) ;
// 						}
// 					} ) ;
// 				}) ;
// 			}
// 		}
		
// 	} ;

// 	return that ;
// }

// function openPopHandler ( obj ) {
// 	var that = openPopObj ( obj ) ;
// 	that.$target.bind( 'click' , function (e) {
// 		e.preventDefault () ;
// 		that.popOpen () ;
// 	}) ;
// }


$(function () {
	 var $openPopBtn = $('a.openPopBtn') ;
	 

	 $openPopBtn.bind( 'click' , openPopBtnClickHandler ) ;
	 function openPopBtnClickHandler (e) {
	 	e.preventDefault() ;
	 	
	 	// 20130515 중복 팝업 차단
	 	if ( $('body div.popArea') )	$('body div.popArea').remove();	 

	 	var $popArea = $('<div class="popArea" style="visibility:hidden;" />').append('<div class="box" />') ;
	 	var urlName = '/html/pop/' + $(this).attr('href').replace( '#' , '' ) + '.html';

	 	$popArea.find(' > div.box').load( urlName , function () {

	 		var $motherBox = $(this) ;
	 		var $contBox = $motherBox.find('div.pop_wrap') ;
	 		var $pop_close = $contBox.find('a.pop_close') ;

	 		var winH = $(window).height() ;
	 		var docH = $(document).height() ;
	 		var contH = $contBox.height() ;
	 		var scrollT = $(window).scrollTop() ;
	 		var chkH ;	 		

	 		$contBox.css({ 'top' : -(contH + 200) }) ;
	 		$(this).css({ 'width' : $contBox.width() }) ;
	 			 		
	 		$popArea.stop().animate({ 'height' : docH + 'px' }) ;
	 		//$popArea.stop().css({ 'height' : docH + 'px' }) ;
	 		
	 		$popArea.css('visibility','visible');

	 		( contH < winH ) ? chkH = scrollT + ( ( winH - contH ) / 2 ) : chkH = scrollT + 20 ;

	 		$contBox.stop().animate({ 'top' : chkH + 'px' }, function(){
	 			$contBox.attr("tabindex", -1).focus();	
	 		}) ;

	 		$pop_close.click(function (e) {
	 			e.preventDefault() ;
	 			$contBox.stop().animate({ 'top' : -(contH + 200) }) ;
	 			$popArea.stop().animate({ 'height' : '0px' }) ;
	 			$('.currentTab').focus();
	 			$popArea.css('visibility','hidden');
	 		}) ;	 		

		 	$contBox.find('.pop_close').bind("keydown",function(e){						
		 		if ( e.keyCode == 9 ) {			
					if ( e.shiftKey ) {						
					} else {					
						e.preventDefault();
						$popArea.find('popArea div.pop_wrap').attr("tabindex", -1).focus();
					}
				}
			}) ;

			$contBox.find('a').eq(0).bind("keydown",function(e){						
				if ( e.keyCode == 9 ) {							
					if ( e.shiftKey ) {
						e.preventDefault();						
					}
				}
			}) ;
			// end of 2013_0516 레이어팝업 탭운영 

	 	} )
		
		// 20130515 탭운영 (현재위치 저장)
	 	$(this).addClass('currentTab').attr('href');

	 	$('body').append( $popArea );
	 	
	 }
})