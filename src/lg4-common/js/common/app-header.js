/**
 * The app header module.
 * @module common/app-header
 * @requires ic/ic
 * @requires ic/ui/module
 */
define(['jquery', 'ic/ic', 'ic/ui/module'], function($, ic, Module) {

    'use strict';

    //alert($(window).width()+'/'+$(window).height());

    var proto,
        events = ic.events,
        $window = ic.dom.$window,
        tabletNav = $('.inner-category ul.primary-nav-list > li.primary-nav-part'),
        lengthTabletNav = tabletNav.length,
        isTabletNav = 0;

    var AppHeader = function(el, options) {
        var self = this;

        // Call the parent constructor
        AppHeader.superclass.constructor.call(self, el, options);

        //Desktop Nav Items
        self.$primaryNavLinks = $('#appHeader .primary-nav-link').data('open', false);
        self.$navLinks = $("#appHeader .primary-nav .primary-nav-list");
        self.$primaryNavSkip = self.$navLinks.find(".skip-button a");
        self.$searchTakeover = self.$('.search-takeover');
        self.$primaryNavSearch = self.$('.primary-nav-search');
        self.$closeNav = self.$('.close-button');
        self.$searchInput = self.$searchTakeover.find('input');
        self.$searchCloseBtn = self.$('.primary-nav-search-close');
        self.currentNavIndex = 0;
        self.$searchSubmitButton = self.$('.search-box button');
        self.$cookieNotice = $('.cookie-notice');
        self.$cookieNoticeButton = $('.cookie-notice-close');
        self._init();
    };




    // Inherit from Module
    ic.util.inherits(AppHeader, Module);

    // Alias the prototype for less typing and better minification
    proto = AppHeader.prototype;

    proto._defaults = {
        //active class
        ac: 'active'
    };

    proto._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);

        self.$primaryNavLinks.on('click', $.proxy(self._primaryNavFocusHandler, self));

        self.$primaryNavSearch.on('click', $.proxy(self._positionSearch, self));
        self.$primaryNavSearch.on('focus', $.proxy(self._primaryNavSearchFocus, self));
        self.$primaryNavSkip.on('click', $.proxy(self._primaryNavSkipAction, self));
        self.$closeNav.on('click', $.proxy(self._primaryNavCloseTrigger, self));
        self.$searchCloseBtn.on('click', $.proxy(self._closeSearch, self));
        self.$searchCloseBtn.on('focus', $.proxy(self._closeSearchFocus, self));
        self.$cookieNoticeButton.on('click', $.proxy(self._cookieClose, self));
        // events.subscribe('app.meganav.off', $.proxy(self._deativatePrimaryNavItem, self));
        // events.subscribe('app.meganav.on', $.proxy(self._activatePrimaryNavItem, self));

        /* Tablet Only */
        // click tablet control button
        $('.tablet-sub-control').attr('data-shift', 0);
        $('.tablet-sub-control a').click(function() {
            var p = $(this).parent();
            if (p.hasClass('dimmed')) {
                return false;
            } else {
                var n = parseInt($('.tablet-sub-control').attr('data-shift'));
                if (p.hasClass('prev')) { // prev
                    n = n - 1;
                } else { // next
                    n = n + 1;
                }
                tabletNav.each(function() {
                    var i = $(this).index();
                    if (i < n || i > n + 3) $(this).removeClass("show-tablet").addClass("hide-tablet");
                    else $(this).addClass("show-tablet").removeClass("hide-tablet");
                });
                $('.tablet-sub-control').attr('data-shift', n);
                if (n <= 0) {
                    $('.tablet-sub-control .prev').addClass('dimmed').find("a").attr("tabindex", -1);
                    $('.tablet-sub-control .next').removeClass('dimmed').find("a").removeAttr("tabindex");
                } else if (n >= lengthTabletNav - 4) {
                    $('.tablet-sub-control .prev').removeClass('dimmed').find("a").removeAttr("tabindex");
                    $('.tablet-sub-control .next').addClass('dimmed').find("a").attr("tabindex", -1);
                } else {
                    $('.tablet-sub-control .prev').removeClass('dimmed').find("a").removeAttr("tabindex");
                    $('.tablet-sub-control .next').removeClass('dimmed').find("a").removeAttr("tabindex");
                }
            }
        });
        /* Tablet Nav Init */
        self._initTabletNav();


    }

    function setCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (90 * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    if (getCookie('cookiesaccepted') + '' !== 'true') {
        $('body').addClass('cookie-check');
    }

    proto._initTabletNav = function() {
        var self = this;
        if ($(self.el).find(".outer-category.primary-nav-link").css("display") == 'none') return false;
        var lengthTabletNav = $('.inner-category ul.primary-nav-list > li.primary-nav-part').length;
        $('.tablet-sub-control').attr('data-shift', 0)
        if (lengthTabletNav > 4) {
            isTabletNav = 0;
            tabletNav.each(function(i) {
                if (i < isTabletNav || i > isTabletNav + 3) $(this).removeClass("show-tablet").addClass("hide-tablet");
                else $(this).addClass("show-tablet").removeClass("hide-tablet");
            });
            $('.tablet-sub-control .prev').addClass('dimmed').find("a").attr("tabindex", -1);
            $('.tablet-sub-control .next').removeClass('dimmed').find("a").removeAttr("tabindex");
            $('.inner-category').addClass('over-length');
        } else {
            $('.tablet-sub-control').hide();
        };
    }
    proto._cookieClose = function(e) {
        var self = this;
        setCookie('cookiesaccepted', 'true');
        self.$cookieNotice.slideUp();
        e.preventDefault();
    };

    proto._handleEvent = function(e) {
        var self = this;
        e.preventDefault();
    };

    proto._primaryNavSearchFocus = function(e) {
        var self = this;
        if ($('.primary-nav').css('display') != 'none') { // search 
        } else { // close
            $('a.primary-nav-search-close').focus();
        }
    }

    proto._positionSearch = function(e) {
        var self = this,
            searchBoxWidth = self.$searchInput.outerWidth(),
            $navLinks = $(self.el).find("li.primary-nav-part");
        $('.primary-nav-biz, .primary-nav').css({
            'visibility': 'hidden', // thetheJ
            'pointer-events': 'none'
        });
        $('.primary-nav-search .icon-search').css({
            'visibility': 'hidden'
        });

        $navLinks.removeClass("active");
        $('.primary-nav .primary-nav-link, .app-meganav').removeClass('active');
        $('.primary-nav-biz').next().show().find('.icon').removeClass('hide');
        self.$searchTakeover.css('left', self.$primaryNavSearch.offset().left - self.$searchTakeover.outerWidth() + (parseInt(self.$primaryNavSearch.css('padding-right')) / 2) + (parseInt(self.$primaryNavSearch.css('padding-left')) / 2) + 5).addClass(this.options.ac);
        // focus
        self.$searchTakeover.find('.search-box input').focus();
    }


    proto._closeSearch = function(e) {
        var self = this;
        $('.primary-nav-biz, .primary-nav').css({
            //'display': 'block', // thetheJ
            'visibility': 'visible',
            'pointer-events': 'auto'
        });

        $('.primary-nav-search .icon-search').css({
            'visibility': 'visible'
        });
        //$('.primary-nav-biz').show().next().hide();
        $('.primary-nav-biz').next().hide();
        self.$searchTakeover.removeClass(this.options.ac);
        self.$primaryNavSearch.focus();
        e.preventDefault();
    };

    proto._primaryNavSkipAction = function(e) {
        e.preventDefault();
        var self = this,
            isTablet = $(self.el).find(".outer-category.primary-nav-link").css("display") != "none",
            _target = e.currentTarget,
            $targetLi = $(_target).parents("li.primary-nav-part"),
            $nextLi = $targetLi.eq(0).next("li");

        if (!isTablet || (isTablet && !$targetLi.parents(".inner-category")[0])) {
            $targetLi.removeClass("active");
        }

        if ($nextLi.hasClass("hide-tablet") && isTablet) {
            $(".tablet-sub-control .next a").click();
        } else if (!$nextLi[0]) {
            if ($targetLi.parents(".inner-category")[0]) {
                $targetLi.removeClass("active");
                $nextLi = $targetLi.eq(1).next("li");
            } else {
                $nextLi = $targetLi.parents(".primary-nav").next();
                $nextLi.find("a").eq(0).focus();
                return false;
            }
        }
        $nextLi.find("a.primary-nav-link").focus();
    };

    proto._primaryNavFocusHandler = function(e) {
        e.preventDefault();
        var self = this,
            isTablet = $(self.el).find(".outer-category.primary-nav-link").css("display") != "none",
            _target = e.currentTarget,
            $target = $(_target),
            $navLinks = $(self.el).find("li.primary-nav-part"),
            $currentLink = $target.parents("li.primary-nav-part"),
            $a = $currentLink.find("a");

        $a.unbind('focus blur', $.proxy(self._checkNavLinksFocus, self)).bind('focus blur', $.proxy(self._checkNavLinksFocus, self));
        $(self.el).unbind('mouseleave').bind('mouseleave', $.proxy(self._checkNavLinksFocus, self));
        $navLinks.removeClass("active");

        if ($currentLink.hasClass("hide-tablet") && isTablet) {
            var s = $currentLink.index() < $currentLink.parent().find("li.show-tablet").eq(0).index() ? ".prev a" : ".next a";
            $(".tablet-sub-control " + s).click();
        }
        if ($target.hasClass("outer-category")) {
            $(self.el).find(".inner-category li.primary-nav-part").eq(0).addClass("active");
            self._initTabletNav();
        }
        $currentLink.addClass("active");
    };

    proto._checkNavLinksFocus = function(e) {
        var self = this,
            $navLinks = $(self.el).find("li.primary-nav-part"),
            $currentLink = $(e.currentTarget).parents("li.primary-nav-part");

        if (e.type == "mouseleave") {
            $(self.el).find("li.primary-nav-part").removeClass("active");
            self._initTabletNav();
        } else {
            $currentLink.each(function(i) {
                if (e.type == "blur") {
                    //$(this).removeClass("active");
                } else if (e.type == "focus") {
                    //$(this).addClass("active");
                }
            });
        }

    };

    proto._primaryNavCloseTrigger = function(e) {
        var self = this,
            isTablet = $(self.el).find(".outer-category.primary-nav-link").css("display") != "none",
            $focusNav = $(self.el).find("li.primary-nav-part.active"),
            $focusNavAnchor = null;
        //focusNav = $(self.el).find("li.primary-nav-part.active a").eq(0);
        $(self.el).find("li.primary-nav-part").removeClass("active");
        if (!isTablet && $focusNav.parents(".inner-category")[0]) {
            $focusNavAnchor = $focusNav.eq(1);
        } else {
            $focusNavAnchor = $focusNav.eq(0);
        }
        $focusNav.removeClass("active")
        $focusNavAnchor.find("a").eq(0).focus();
        self._initTabletNav();
    }

    proto._primaryNavOutHandler = function(e) {

    };

    proto._deativatePrimaryNavItem = function(index) {
        var self = this;
        $(self.$primaryNavLinks.get(self.currentNavIndex)).data('open', false).removeClass(this.options.ac);
    };

    proto._activatePrimaryNavItem = function(index) {
        var self = this;
        $(self.$primaryNavLinks.get(self.currentNavIndex)).data('open', true).addClass(this.options.ac);
    };


    var _updateScroll = function() {
        //todo
    };

    var _onCollapse = function() {
        //todo
    };

    $(window).on("resize", function(event) {
        $('#appHeader .primary-nav-link.active').removeClass('active');
        if ($('html').hasClass('no-touch')) {
            if ($('.search-menu').hasClass('active')) {
                $('.primary-nav').css({
                    'display': 'block',
                    'visibility': 'visible',
                    'pointer-events': 'auto'
                });
                $('.primary-nav-biz').css({
                    'display': 'table', // table-cell
                    'visibility': 'visible',
                    'pointer-events': 'auto'
                });
                $('.primary-nav-search .icon-search').css({
                    'visibility': 'visible'
                });
                // $('.primary-nav-biz').show().next().hide();
                $('.primary-nav-biz').next().hide();
                $('.search-takeover').removeClass('active');
                $('.search-menu-btn .icon-search').removeClass('hide');
                $('.search-menu-btn .icon-close').addClass('hide');
            }
        }
    });


    //   Create the jquery plugin and set it to auto-wire to specified selector
    ic.jquery.plugin('appHeader', AppHeader, '.appHeader');

    return AppHeader;

});
