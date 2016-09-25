define(['global-config', 'jquery', 'common/dtm'], function(globalConfig, $, dtm) {

    'use strict';

    var isMobile = 0;
    if ($('body').hasClass('is-mobile')) {
        isMobile = 1;
    }

    function videoStop(myid) {
        var v = $('#' + myid);
        //var v = document.getElementById(myid);
        v.get(0).pause();
        v.get(0).currentTime = 0;
        return false;
    }

    function videoPlay(myid, loop) {
        var v = document.getElementById(myid);
        v.play();
        bindEnd(myid);
        if (loop != 1) {
            $(v).parent().css({
                zIndex: 6
            });
        }
    }

    function bindEnd(myid) {
        var v = document.getElementById(myid);
        $("#" + myid).unbind('ended').bind('ended', function() {
            $("html").stop().animate({
                "null": 1
            }, 500).promise().done(function() {
                v.pause();
                v.currentTime = 0;
                $("#" + myid).parent().attr('style', '').closest('.video-asset').css('z-index', '-1');
            });
        });
        // $(this).css({visibility:"visible"});
    }

    function appendVideo(myid, myvideo_mp4, myvideo_webm, loop, obj, title) {
        var t = "";
        loop = loop == 1 ? "loop" : "";
        t = t + '<video ' + loop + ' width="100%" height="100%" id="' + myid + '" title="' + title + '"><source src="' + myvideo_webm + '" type="video/webm" /><source src="' + myvideo_mp4 + '" type="video/mp4" /></video>';
        obj.empty().append(t);
        if (loop != "loop") {
            $("#" + myid).closest('.module').find("a.stop").remove();
        }
        $("#" + myid).load();
    }
    if (isMobile == 0) {
        $('.background-animation .video-asset').each(function() {
            appendVideo($(this).attr('data-video-id'), $(this).attr('data-video-file-mp4'), $(this).attr('data-video-file-webm'), $(this).attr("data-video-loop"), $(this), $(this).attr('data-video-alt-text'));
            $(this).css({
                'position': 'absolute',
                'left': '0',
                'top': '0',
                'width': '100%',
                'height': '100%',
                'overflow': 'hidden',
                'background': '#000000'
            });
        });
    }
    if ($('html').hasClass('no-video')) {
        $('.background-animation .video-asset').remove();
    }
    $('.background-animation a.play').unbind('click').bind('click', function() {
        var v = $(this).closest('.background-animation').find('.video-asset').attr('data-video-id'),
            loop = $(this).closest('.background-animation').find('.video-asset').attr('data-video-loop');
        videoPlay(v, loop);
        $(this).css({
            visibility: "hidden"
        });
        $(this).parents('.background-animation').find('a.stop').css({
            visibility: "visible"
        }).focus();
        return false;
    });
    $('.background-animation a.stop').unbind('click').bind('click', function() {
        var v = $(this).closest('.background-animation').find('.video-asset').attr('data-video-id');
        videoStop(v);
        $(this).css({
            visibility: "hidden"
        });
        $(this).parents('.background-animation').find('a.play').css({
            visibility: "visible"
        }).focus();
        return false;
    });
    $('.module .see-video').each(function() {
        if ($('html').hasClass('lt-ie9')) {
            if ($(this).closest('.module').find('.video-asset').data('video-type') == "bc") $(this).hide();
            else $(this).show();
        }
    });
    $('.module .see-video').on({
        click: function(e) {
            e.preventDefault();
            var _this = $(this);
            var obj = $(this).closest('.module').find('.video-asset');
            var tit = $(this).closest('.module').find('.text-block h3').text();
            //alert(tit);
            if (obj.attr('data-video-type') == 'youtube') {
                var videoCode = obj.attr('data-embed-code'),
                    alt = obj.attr('data-iframe-title');
                if (isMobile == 0 || $(this).closest('.module').hasClass('m01')) {
                    $(this).closest('.module').find('.text-block').hide();
                }
                $(this).closest('.module').find('.video-thumb').hide();
                sendEvent('video-info', tit); // DTM
                //var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/BivPPWI0q7Q" frameborder="0" allowfullscreen></iframe>';
                var html = '<div class="video-content"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoCode + '?rel=0&showinfo=0&wmode=opaque" frameborder="0" allowfullscreen title="' + alt + '"></iframe><a href="#" title="Close Video" class="close no-underline"><i class="icon icon-close"></i></a></div>';
                obj.empty().append(html);
                obj.show();
                obj.find('.video-content').attr('tabIndex', -1).focus();
                obj.find("a.close").unbind('click').on({
                    click: function(e) {
                        e.preventDefault();
                        obj.empty().hide();
                        obj.closest('.module').find('.text-block').attr('style', '');
                        obj.closest('.module').find('.video-thumb').attr('style', '');
                        _this.focus();
                    }
                });
            } else {
                var videoId = obj.attr('data-video-id'),
                    accountId = obj.attr('data-account'),
                    player = obj.attr('data-player') != null ? obj.attr('data-player') : 'default',
                    alt = obj.attr('data-iframe-title'),
                    html;
                if (isMobile == 0 || $(this).closest('.module').hasClass('m01')) {
                    $(this).closest('.module').find('.text-block').hide();
                }
                $(this).closest('.module').find('.video-thumb').hide();
                if ($('html').hasClass('lt-ie9')) {
                    $(this).closest('.module').find('.text-block').show();
                    return;
                }
                sendEvent('video-info', tit); // DTM
                //html = '<div class="video-content"><video data-video-id="3811035969001" data-account="1432358930001" data-player="default" data-embed="default" class="video-js" controls></video><a href="#" class="close no-underline"><i class="icon icon-close"></i></a></div>'
                html = '<div class="video-content"><iframe src="http://players.brightcove.net/' + accountId + '/' + player + '_default/index.html?videoId=' + videoId + '" title="' + alt + '" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe><a href="#" title="Close Video" class="close no-underline"><i class="icon icon-close"></i></a></div>';
                obj.empty().append(html);
                obj.show();
                obj.find('.video-content').attr('tabIndex', -1).focus();
                obj.find("a.close").unbind('click').on({
                    click: function(e) {
                        e.preventDefault();
                        obj.empty().hide();
                        obj.closest('.module').find('.text-block').attr('style', '');
                        obj.closest('.module').find('.video-thumb').attr('style', '');
                        _this.focus();
                    }
                });
            }
        }
    });
    /*
    $(window).scroll(function(){
		var k = $('.module.offset').find('.video-asset').attr('data-video-id');
		var x = document.getElementById(k);
		x.play();
	}).scroll();
	*/
    // hero
    $('.ProductHero').find('.slide .visuals').each(function() {
        if (!$(this).attr('data-video-type')) return;
        var vtype = $(this).attr('data-video-type');
        var obj = $(this);
        if (vtype == 'youtube') {
            // youtube
            var videoCode = obj.attr('data-embed-code'),
                alt = obj.attr('data-iframe-title'),
                html
            html = '<div class="hero_video"><div><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoCode + '?rel=0&showinfo=0&wmode=opaque" frameborder="0" allowfullscreen title="' + alt + '"></iframe></div></div>';
        } else {
            // bc
            var videoId = obj.attr('data-video-id'),
                accountId = obj.attr('data-account'),
                player = obj.attr('data-player') != null ? obj.attr('data-player') : 'default',
                alt = obj.attr('data-iframe-title');
            html;
            html = '<div class="hero_video"><div><iframe src="http://players.brightcove.net/' + accountId + '/' + player + '_default/index.html?videoId=' + videoId + '" title="' + alt + '" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe></div></div>';
        }
        obj.empty().append(html);
    });


});
