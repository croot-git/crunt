$(function(){

	// gnb
	$(".gnb").each(function(){
		//$("> li > ul", this).css({"display":"none"});
		$("li li.on",this).parents("li").addClass("on");
		$("> li, li li", this).on("mouseenter focusin",function(){
			$(this).addClass("hv");
		}).on("mouseleave focusout",function(){
			$(this).removeClass("hv");
		});
		$(this).on("mouseenter focusin",function(){
			$(this).addClass("on").stop(true,true).animate({"height":"194px"},200);
		}).on("mouseleave",function(){
			$(this).removeClass("on").stop(true,true).animate({"height":"38px"},200);
		});
	});
	$('*:not(".gnb a")').focus(function(){
		$(".gnb").removeClass("hv")
		$(".gnb").removeClass("on").stop(true,true).animate({"height":"38px"},200);
	});

	// util_nav
	$(".util_nav > li:first-child").on("click focusin",function(){
		$(".util_nav").addClass("on");
		$(".util_nav ul.custom").stop(true,true).slideDown(150);
	}).on("mouseleave",function(){
		$(".util_nav").removeClass("on");
		$(".util_nav ul.custom").stop(true,true).slideUp(150);
	});
	$('*:not(".util_nav > li:first-child a")').focus(function(){
		$(".util_nav").removeClass("on");
		$(".util_nav ul.custom").stop(true,true).slideUp(150);
	});

	$(".util_nav ul.custom > li:last").keydown(function (e) {
		if ( e.keyCode == 9 && !e.shiftKey ) {
			$(".util_nav ul.custom").stop(true,true).slideUp(150);
		}
	})

	// resize
	var browWidth ;
	$(window).resize( winResize ) ;
	function winResize () {
		browWidth = $('#header').width() ;  /* 06.21 LMU 수정 */
	} ;
	winResize () ;

	// sitemap
	var $siteMap = $(".util_nav > li.siteMap").find('div.siteMap') ;
	$siteMap.css({ 'visibility' : 'hidden' }) ;

	$siteMap.stop(true,true).slideUp(200 , function () {
		$siteMap.css({ 'visibility' : 'visible' }) ;
	});
	$siteMap.css({ 'width' : browWidth + 'px' , 'margin-left' : -(browWidth/2) + 'px' }) ;

	$(".util_nav > li.siteMap").on("click",function(){
		var $liBox = $(this) ;
		$siteMap.stop(true,true).slideDown(200);
	});

	/*$(".util_nav > li.siteMap").on("mouseleave",function(){
		var $liBox = $(this) ;
		$siteMap.stop(true,true).slideUp(200);
	});*/

	$siteMap.find('a.close').bind( 'click' , function (e) {
		e.stopPropagation() ;
		$siteMap.stop(true,true).slideUp(200);
	}).bind( 'keydown' , function (e) {
		if ( e.keyCode == 9 && !e.shiftKey ) {
			$siteMap.stop(true,true).slideUp(200);
		}
	}) ;

	// $siteMap.find('a.close').click(function (e) {
	// 	$siteMap.stop(true,true).slideUp(100);
	// })

	// lnb
	$(".lnb_menu ul .on").parents("ul").siblings("a").css({
		"color":"#525da0",
		"letterSpacing":"-1px",
		"font-weight":"bold"
	});

	// 계열회사 SITE
	$(".product_site > a").bind( 'click ' , function(e){
		e.preventDefault();
	})
	$(".product_site").on("mouseenter focusin", function(e){
		e.preventDefault();			
		$(this).find(".product_list").stop(true,true).slideDown(200);
	}).mouseleave(function(){
		$(this).find(".product_list").stop(true,true).slideUp(200);
	});
	$('*:not(".product_site a")').focus(function(){
		$(".product_list").stop(true,true).slideUp(200);
	});

	/*$("a[href^='#']").click(function(evt){
		var anchortarget = $(this).attr("href");
		$(anchortarget).attr("tabindex", -1).focus();
		$(anchortarget).removeAttr("tabindex");
	});

	if (window.location.hash) {
		$(window.location.hash).attr("tabindex", -1).focus();
	}*/
	// Fxes anchor focus in Chrome/Safari/IE by setting the tabindex of the 
	// target container to -1 on page load
	$("a[href^='#']").click(function(evt){		
		var anchortarget = $(this).attr("href");
		$(anchortarget).attr("tabindex", -1).focus();
		setTimeout(function(){
			$(anchortarget).removeAttr("tabindex");
		},10)
	});

	if (window.location.hash) {
	$(window.location.hash).attr("tabindex", -1).focus();
	}

	$("#skip a").bind("focus",function(){
		$("#skip a").removeClass("on");
		$(this).addClass("on");
	})
	$("#skip a").bind("blur",function(){
		$("#skip a").removeClass("on");
	})//2013-09-03 수정


	/* 롤오버 이미지 */
	$(".rollOver").each(function(){
		$(this).bind("focus mouseenter",function(){
			over_img($(this),"on");
		})
		$(this).bind("blur mouseleave",function(){
			over_img($(this),"off");
		})
	})

	$("#skip a").bind("focus",function(){
		$("#skip a").removeClass("on");
		$(this).addClass("on");
	})
	$("#skip a").bind("blur",function(){
		$("#skip a").removeClass("on");
	})


})

function over_img(img,n){
	if (n == "on")
	{
		var hover = "_on";
	}else{
		var hover = "_off";
	}
	if (img.parent().hasClass("no") == false && img.parent().hasClass("on") == false  && img.hasClass("on") == false ){
		if (img.find("img").length > 0) {
			menuimg = img.find("img");
			if (menuimg.attr("src").indexOf(".jpg") > 0){
				menuimg_type = ".jpg";
			}else if (menuimg.attr("src").indexOf(".gif") > 0){
				menuimg_type = ".gif";
			}else if (menuimg.attr("src").indexOf(".png") > 0){
				menuimg_type = ".png";
			}


			menuimg_src = menuimg.attr("src").split("_off")[0];
			menuimg_src = menuimg_src.split("_on")[0];
			menuimg.attr("src",menuimg_src+hover+menuimg_type);
		};
	}
}

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


	$(function(){

		/* 텝 호버 */

		var award_top_menu_chkidx ;
		$('ul.award_top_menu > li').each(function( idx ){
			if ( $(this).hasClass('on') ) {
				award_top_menu_chkidx = idx ;
			}
		}) ;

		var $award_top_menu = $('ul.award_top_menu > li') ;
		$award_top_menu.bind( 'mouseenter focusin' , function(){
			var $tab = $(this) ;
			$award_top_menu.filter(':not(:eq(' + $(this).index() + '))').removeClass( 'on' ) ;
			$tab.addClass( 'on' ) ;
		}) ;

		$award_top_menu.bind( 'mouseleave focusout' , function(){
			$award_top_menu.removeClass( 'on' ) ;
			$award_top_menu.eq(award_top_menu_chkidx).addClass( 'on' ) ;
		}) ;

		/* 퀵메뉴 */
		$(".quick").css({
			"position":"absolute",
			"width":"105px",
			"right":"0",
			"top":"160px",
			"margin-top":"160px"
		})
		var boxTop=parseInt($(".quick").height());
		$(window).scroll(function(){
			if(navigator.userAgent.toLowerCase().indexOf("webkit")<0){
				var theScrollTop=document.documentElement.scrollTop;
			}else{
				var theScrollTop=document.body.scrollTop;
			}
			var max_scroll = $(".container .contents").height() - $(".quick").height()-150;			
			$(".quick").stop();
			if (theScrollTop < max_scroll)
			{
				$(".quick").animate(
				{top:theScrollTop+"px"},300
				)
			}else{
				$(".quick").animate({top:max_scroll+"px"},300)
			}
		})

	}) ;

/* contact_us */
$(function () {
    var menulist = $('.listTabBox li');
    var menu = $('.listTabBox li a.customer_menu');

    $('.listTabBox').find('li').filter(':first').addClass('on');
    menu.bind('click', function (e) {
        e.preventDefault();
        $('.listTabBox').find('li').filter(':not(this)').removeClass('on');
        $(this).parent('li').addClass('on');
    });
})