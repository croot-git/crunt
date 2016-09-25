/**
 * The app header module.
 * @module common/app-header
 * @requires ic/ic
 * @requires ic/ui/module
 */
define(['ic/ic', 'ic/ui/module'], function(ic, Module) {

    'use strict';

    var proto,
        events = ic.events,
        $window = ic.dom.$window;

    var AppHeaderMobile = function(el, options) {
        var self = this;
        // Call the parent constructor
        AppHeaderMobile.superclass.constructor.call(self, el, options);

        //Mobile Nav Items
        self.$primaryMobileNavLinks = self.$('.primary-nav-link');
        self.$mobileFlyoutNav = $('#mobileFlyoutNav').css('min-width', $window.innerWidth() - 50);;
        self.$backToMainMenuLink = $('.main-menu-link').addClass('hide').on('click', $.proxy(_backToMainMenu, self));
        self.$mobilePrimaryNavLink = $('.nav-section-link').not('.main-menu-link').on('click', $.proxy(_mobilePrimaryNavHandler, self));
        self.$navSubListItem = $('.nav-sub-list-item');

        self._init();
    };

    // Inherit from Module
    ic.util.inherits(AppHeaderMobile, Module);

    // Alias the prototype for less typing and better minification
    proto = AppHeaderMobile.prototype;

    proto._defaults = {
        //active class
        ac: 'active'
    };

    proto._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);

        self.$mobileFlyoutNav.hide();
        //open and close the mobile nav
        $('a.mobile-nav-hamburger').on('click', function(e) {
            self.$primaryMobileNavLinks.find('.icon-search').removeClass('hide').end().find('.icon-close').addClass('hide');
            $('.search-takeover').removeClass('active');
            self.$mobileFlyoutNav.show();
            setTimeout(function() {
                self.$mobileFlyoutNav.addClass(self.options.ac);
                var v_height = parseInt($(window).height());
                var v_heightF = v_height - 55;
                $('.mobile-flyout-body-wrapper').css('height', v_heightF).css('position', 'absolute').css('right', '0').css('width', '85%').css('overflow', 'auto'); //.css('-webkt-overflow-scrolling','touch');
                $('html').css('overflow', 'hidden').css('position', 'fixed').css('width', '100%');
                $('#mobileFlyoutNav').css('overflow', 'auto');
            }, 100);
        });
        $('.mobile-flyout-header .hamburger a').on('click', function(e) {
            self.$mobileFlyoutNav.removeClass(self.options.ac);
            $('html').css('overflow', 'auto').css('position', 'static').css('width', 'auto');
            setTimeout(function() {
                self.$mobileFlyoutNav.hide();
            }, 500);
        });

        $('.nav-sub-list-item').on('click', function(e) {
            var $target = $(e.currentTarget);
            $('.nav-sub-list-item').not($target).addClass('hide');
            $target.addClass(self.options.ac).find('.icon-arrow-next').addClass('hide').end().next().toggleClass('hide');
            $target.parent().parent().parent().find('.nav-section-link').removeClass(self.options.ac).end().find(".nav-section-link").addClass("return-state-wrap").find('.icon-arrow-prev').removeClass('hide').addClass('return-state');
        });

        $('.nav-sub-accordion').on('click', function(e) {
            var $tar = $(e.currentTarget);
            if ($tar.next().length == 0) {
                return //no accordion ul present
            }
            if ($tar.find('.icon-menu-plus').hasClass('hide')) {
                $tar.find('.icon-menu-plus').removeClass('hide').end().find('.icon-menu-minus').addClass('hide').end().next().removeClass('active');
            } else {
                $tar.find('.icon-menu-plus').addClass('hide').end().find('.icon-menu-minus').removeClass('hide').end().next().addClass('active');
            }
        });

        self.$('.search-menu-btn').on('click', function(e) {
            $('.search-menu').toggleClass('active');
            $('.search-menu').find("input.psearch").focus();
            $(e.currentTarget).find('.icon-search').toggleClass('hide').end().find('.icon-close').toggleClass('hide');
            var n = parseInt($(window).width()) - 96;
            if ($('body').hasClass('is-mobile')) {
                $('.search-takeover').css('width', n);
                $('.appHeader .search-menu .search-box').css('width', '100%');
            }
        });
    }

    var _backToMainMenu = function(e) {
        var self = this;
        //Hide the back to main menu button
        $(e.currentTarget).addClass('hide');
        //Restore all primary nav items to default and collapse all nav-sub-lists
        self.$mobilePrimaryNavLink.removeClass(this.options.ac).removeClass('hide').next().removeClass(this.options.ac)
            .end().find('.icon').removeClass('hide');

        self.$mobilePrimaryNavLink.find('.icon-arrow-prev').removeClass('return-state').parent().removeClass('return-state-wrap');

        $('.nav-sub-list ul').removeClass(self.options.ac);
        self.$mobilePrimaryNavLink.removeClass(self.options.ac);
        self.$navSubListItem.removeClass(self.options.ac).removeClass('hide').find('.icon').removeClass('hide').end().next().addClass('hide');
    }

    var _mobilePrimaryNavHandler = function(e) {
        var self = this,
            $tar = $(e.currentTarget);

        if ($tar.find('.icon-arrow-prev').hasClass('return-state')) {
            //return up one level
            $tar.addClass('active').removeClass("return-state-wrap").find('.icon-arrow-prev').removeClass('return-state');
            $tar.next().find('.nav-sub-list-item').removeClass(this.options.ac).removeClass('hide').find('.icon').removeClass('hide').end().next('ul').addClass('hide');
            return;
        }

        self.$mobilePrimaryNavLink.not($tar).addClass('hide');

        $tar.addClass(this.options.ac).find('.icon').addClass('hide').end().next().addClass(this.options.ac);

        self.$backToMainMenuLink.removeClass('hide');
    };

    // Create the jquery plugin and set it to auto-wire to specified selector
    ic.jquery.plugin('appHeaderMobile', AppHeaderMobile, '.appHeader');

    return AppHeaderMobile;
});
