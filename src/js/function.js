/**
 *	@filename	functions.js
 *	@desc		기능정의 Javascript
 *	@author		Jinwoo.Yuk
 *	@version		2013.05.27
 */

/**
* @name	    fnSetLnb
* @desc	    Front LNB 제어
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function fnSetLnb(strId) {
	if ($(".left_area > .lnb_area > ul > li > ul").length > 0) {
		$(".left_area > .lnb_area > ul > li > ul").css("display", "none");
		$('#' + strId).parent().parent().css("display", "block");
		if ($('#' + strId).parent().parent().parent()[0].tagName != "DIV") {
		    $('#' + strId).parent().parent().parent().find("A").eq(0).addClass("tit_on");
		}
	}

	$('#' + strId).addClass("on");
	$('#' + strId).attr("title", "_현재 페이지");
}

//TIMESTAMP
function fnTimeStamp() {
	return Math.floor(new Date().getTime() / 1000);
}

/**
* @name	Popup
* @desc	open popup
* @author	Jinwoo.Yuk
* @version	2013.04.23
*/
var Popup = function () {
	this.open = function (opt) {
		var def = {
			target: "_blank",
			href: null,
			width: screen.width / 2,
			height: screen.height / 2,
			titlebar: "no",
			status: "no",
			resizable: "no",
			toolbar: "no",
			scrollbars: "no",
			menubar: "no"
		};
		var options = $.extend(def, opt);
		var posY = (parseInt(screen.height / 2)) - (parseInt(options.height / 2));
		var posX = (parseInt(screen.width / 2)) - (parseInt(options.width / 2));
		var win = window.open(options.href, options.target, 'titlebar=' + options.titlebar + ', screenX=' + posX + ', screenY=' + posY + ', left=' + posX + ', top=' + posY + ', status=' + options.status + ', resizable=' + options.resizable + ', toolbar=' + options.toolbar + ', scrollbars=' + options.scrollbars + ', menubar=' + options.menubar + ', width=' + options.width + ', height=' + options.height);
		win.focus();
		return false;
	};
};

/**
* @name	    autoFitSize
* @desc	    resize to poup window
* @author	Jinwoo.Yuk
* @version	2013.04.23
*/
function autoFitSize() {
	window.resizeTo(100, 100);
	var thisX = parseInt(document.body.scrollWidth);
	var thisY = parseInt(document.body.scrollHeight);
	var maxThisX = screen.width;
	var maxThisY = screen.height;
	var marginY = 0;

	if (thisX > maxThisX) {
		window.document.body.scroll = "yes";
		thisX = maxThisX;
	}
	if (thisY > maxThisY - marginY) {
		window.document.body.scroll = "yes";
		thisX += 19;
		thisY = maxThisY - marginY;
	}
	window.resizeTo((thisX + 16), (thisY + marginY + 67));
}

/**
* @name	getUrlVars
* @desc	get Parameter
* @author	Jinwoo.Yuk
* @version	2013.06.03
* @use 
	var allVars = $.getUrlVars();
	var byName = $.getUrlVar('name');
*/
$.extend({
	getUrlVars: function () {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar: function (name) {
		return $.getUrlVars()[name];
	}
});

/**
* @name	sendTwitter
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function sendTwitter(strHashTag, strRelated, strText, strUrl) {
	var twitUrl = "https://twitter.com/intent/tweet?hashtags=%hash&related=%related&text=%text&url=%url";

	twitUrl = twitUrl.replace("%hash", strHashTag);
	twitUrl = twitUrl.replace("%related", strRelated);
	twitUrl = twitUrl.replace("%text", strText);
	twitUrl = twitUrl.replace("%url", strUrl);

	var popup = new Popup();
	popup.open({
			target: "twitter",
			href: twitUrl,
			width: screen.width / 2,
			height: screen.height / 2,
			titlebar: "no",
			status: "no",
			resizable: "yes",
			toolbar: "no",
			scrollbars: "yes",
			menubar: "no"
	});
}

/**
* @name	sendFacebook
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function sendFacebook(strText, strUrl) {
	var faceUrl = "https://www.facebook.com/sharer/sharer.php?u=%url&t=%text";

	faceUrl = faceUrl.replace("%url", strUrl);
	faceUrl = faceUrl.replace("%text", strText);

	var popup = new Popup();
	popup.open({
		target: "facebook",
		href: faceUrl,
		width: screen.width / 2,
		height: screen.height / 2,
		titlebar: "no",
		status: "no",
		resizable: "yes",
		toolbar: "no",
		scrollbars: "yes",
		menubar: "no"
	});
}

/**
* @name	openPopupPrint
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function openPopupPrint(strUrl, intIdx) {
	var popup = new Popup();
	popup.open({
		target: "printPopup",
		href: strUrl + "/" + intIdx,
		width: 780,
		height: 600,
		titlebar: "no",
		status: "no",
		resizable: "no",
		toolbar: "no",
		scrollbars: "yes",
		menubar: "no"
	});
}

/**
* @name	    openMainPopup
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function openMainPopup(options) {
	window.open(options.href, options.target, 'width=' + options.width + ', height=' + options.height + ', screenX=' + options.posX + ', screenY=' + options.posY + ', left=' + options.posX + ', top=' + options.posY + ',, titlebar=no, status=no, resizable=no, toolbar=no, scrollbars=no, menubar=no');
}

/**
* @name	    setCookies
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function setCookies(name) {
	var when = new Date();
	when.setDate(when.getDate() + 1);
	when.setHours(0);
	when.setMinutes(0);
	when.setSeconds(0);
	document.cookie = name + "=done;expires=" + when.toGMTString() + ";path=/";
}

/**
* @name	    getCookies
* @desc	
* @author	Jinwoo.Yuk
* @version	2013.06.03
*/
function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0) break;
	}
	return "";
}

/**
* @name	    fnFileDown
* @desc	
* @author	Blue
* @version	2013.06.22
*/
function fnFileDown(dType, fname, fpath) {
	$.post("/Download/Exist", { dType: dType, filename: fname, filepath: fpath }, function (jdata) {
		if (jdata.result) {
			location.href = "/Download?dType=" + dType + "&filename=" + fname + "&filepath=" + fpath;
		} else {
			alert("파일이 존재하지 않습니다.");
		}
	});
}

/**
* @name	mobileLayout
* @desc		적응형 구현 : 기본 정의 추가
* @author	David Kim
* @version	2016.01.31
*/
var sitediv = location.href.replace("//", "/").split("/");	// function.js 사이클, 채용관, 홍보관 공통사용으로 분기처리
var filter = "win16|win32|win64|mac|macintel";
if(navigator.platform && filter.indexOf(navigator.platform.toLowerCase()) < 0 && !(sitediv[2].toLowerCase() == "cycle") && !(sitediv[2].toLowerCase() == "recruit") && !(sitediv[2].toLowerCase() == "info")){
	var headContents = document.getElementsByTagName("head")[0].innerHTML,
		addViewport = "<meta name='viewport' content='width=768, target-densitydpi=device-dpi' />",
		addLink = "<link rel='stylesheet' type='text/css' href='/common/css/mobile_layout.css' />";
	document.getElementsByTagName("head")[0].innerHTML = addViewport + headContents + addLink;
}

/**
* @name	mobileLayoutSub
* @desc		적응형 구현 : sub layout 관련
* @author	David Kim
* @version	2016.01.31
*/
$(function(){
	if(navigator.platform && filter.indexOf(navigator.platform.toLowerCase()) < 0 && !(sitediv[2].toLowerCase() == "cycle") && !(sitediv[2].toLowerCase() == "recruit") && !(sitediv[2].toLowerCase() == "info")){
		// gnb
		$("#header").append('<a href="javascript:void(0);" class="btn_gnb_open">gnb open</a>');
		$("#header .gnb_top").append('<a href="javascript:void(0);" class="btn_gnb_close">gnb close</a>');
		$("#header .gnb_top .util_nav div.siteMap div.fixed > ul.list").append("<li><dl class='menu7'>"+$("#header .gnb_top .util_nav div.siteMap dl.menu7").html()+"</dl></li>");
		$("#header .btn_gnb_open").click(function(){
			$("#header .gnb_top .util_nav div.siteMap div.fixed").css({"height":+($(window).height()-($("#header .btn_gnb_close").height()+2))+"px"});
			$("#header .gnb_top .util_nav div.siteMap div.fixed").scrollTop(0);
			$("#header .gnb_top .util_nav div.siteMap").fadeIn(0);
			$("#header .gnb_top").animate({"left":"0"}, function(){
				if ( $("*").is(".contents_middle") ){
					$(".contents_top").css({"overflow-y":"hidden", "height":"0px"});
					$(".contents_middle").css({"overflow-y":"hidden", "height":"0px"});
				}else{
					$(".container").css({"overflow-y":"hidden", "height":"0px"});
				}
			});
		});
		$("#header .btn_gnb_close").click(function(){
			$("#header .gnb_top").animate({"left":"768px"});
			if ( $("*").is(".contents_middle") ){
				$(".contents_top").css({"overflow-y":"auto", "height":"auto"});
				$(".contents_middle").css({"overflow-y":"auto", "height":"auto"});
			}else{
				$(".container").css({"overflow-y":"auto", "height":"auto"});
			}
		});
		// lnb
		$(".container .left_area").append('<a href="javascript:void(0);" class="btn_mlnb">open</a>');
		$(".container .left_area .btn_mlnb").click(function(){
			$(".container .left_area h2").animate({"left":"0px"}, 400);
			$(".container .left_area .lnb_area").animate({"left":"0px"}, 400);
		});
		$(".container .left_area h2").click(function(){
			$(".container .left_area h2").animate({"left":"-180px"}, 300);
			$(".container .left_area .lnb_area").animate({"left":"-180px"}, 300);
		});
		// resize gnb height 조정
		function resizeGnb(){
			$("#header .gnb_top .util_nav div.siteMap div.fixed").css({"height":+($(window).height()-($("#header .btn_gnb_close").height()+2))+"px"});
		}
		$(window).resize(function(){
			resizeGnb();
		});
		// popup click
		$('a.openPopBtn').click(function(){
			$("#header .btn_gnb_close").click();
		});
	}
});