define(['global-config', 'jquery', 'common/social-likes', 'common/dtm'], function(globalConfig, $, socialLikes, dtm) {
    'use strict';

    // print
    $('.stickynav .print a').click(function() {
        window.print();
        return false;
    });


    $(window).resize(function() {
        if ($('.stickynav').length > 0) stickyNav();
    }).resize();
    $(window).scroll(function() {
        if ($('.stickynav').length > 0) stickyNav();
        if ($('.product_share').css('display') != "none") $('.product_share .close a').trigger('click');
    }).scroll();

    function stickyNav() {
        if ($('body').hasClass('is-mobile') == true) {
            return false;
        } else {
            var _headerHeight = $('.app-tabs').offset().top;
            var _navH = 100;
            var _navHie8 = 100;
            //var _navH = $('.stickynav').outerHeight();
            //var _tabsH = $('.tabs-nav-wrapper').outerHeight();
            var chkt = $(window).scrollTop();
            if (chkt >= _headerHeight && !$('.stickynav').hasClass('float')) {
                $('.stickynav').addClass('float');
                $('.tabs-nav-wrapper').addClass('float');
                $('.tabs-panels').addClass('float');
                //$('.tabs').css('padding-top', (_navH + _tabsH) + 'px')
                $('.tabs-nav').css('top', 'auto !important');
                if ($('html').hasClass('lt-ie9')) {
                    $('.tabs-nav-wrapper').css('position', 'fixed').css('top', 100 + 'px').css('width', '100%').css('z-index', '999');
                } else {
                    $('.tabs-nav-wrapper').css('position', 'fixed').css('top', _navH + 'px').css('width', '100%').css('z-index', '999');
                }
            }
            if (chkt < _headerHeight && $('.stickynav').hasClass('float')) {
                $('.stickynav').removeClass('float');
                $('.tabs-nav-wrapper').removeClass('float');
                $('.tabs-panels').removeClass('float');
                $('.tabs-nav-wrapper').css('position', 'relative').css('top', '0px');
                //$('.tabs').css('padding-top', '0')
                $('.tabs-nav').css('top', '0');
            }
        }
    }



});
