define(['jquery', 'ic/ic', 'ic/ui/module'], function($, ic, Module) {

    var pn = $('.notice-board .list-nav');

    if ($('body').hasClass('is-mobile')) {
        pn.click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next().slideUp(250);
                $('.notice-board .dimmed').remove();
                $('#appHeaderMobile').removeAttr('style');
            } else {
                $(this).addClass('active');
                $(this).next().slideDown(250);
                $('.notice-board').append('<div class="dimmed"></div>');
                $('#appHeaderMobile').css('position', 'relative').css('z-index', '6');
            }
            return false;
        });
    } else {
        $('.notice-board .title-box .util .print a').unbind('click').bind('click', function() {
            window.print();
            return false;
        });
    }


    var board,
        events = ic.events,
        isMobile = $("body").is(".is-mobile");

    var boardFnc = function(el, options) {
        var self = this;
        // Call the parent constructor
        boardFnc.superclass.constructor.call(self, el, options);
        self.$form = self.$el.find("form");
        self.$boardTab = self.$form.find(".board-list");
        self.$boardList = self.$form.find(".board-lists");
        if (!isMobile) self.$pageControls = self.$form.find(".board-page .pages");
        else self.$pageControls = self.$form.find(".loadmore_btn");
        self._init();
    };
    ic.util.inherits(boardFnc, Module);
    board = boardFnc.prototype;
    board._defaults = {
        //active class
        ac: 'active'
    };
    board._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);

        self.$pageControls.find('a').on("click", $.proxy(self._pageTrigger, self));
    }

    board._reinit = function() {
        var self = this;
        if (!isMobile) self.$pageControls = self.$form.find(".board-page .pages");
        else self.$pageControls = self.$form.find(".loadmore_btn");
        self.$pageControls.find('a').unbind().on('click', $.proxy(self._pageTrigger, self));
    }


    board._pageTrigger = function(e) {
        var self = this,
            url = self.$form[0].action,
            t = e.currentTarget;
        e.preventDefault();
        if (!isMobile && $(t).parent(".pages")[0]) { // desktop Page
            self.$form[0].page.value = $(e.currentTarget).data("page");
            self.$form[0].pagePosition.value = $(e.currentTarget).data("pageposition");
        } else { // mobile
            self.$form[0].page.value++;
        };

        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: self.$form.serialize(),
            success: function(b) {
                $b = $(b);
                if (isMobile) {
                    self.$pageControls.html($b.filter(".loadmore_btn").html());
                    self.$boardList.append($b.filter(".board-lists").html());
                } else {
                    self.$pageControls.html($b.filter(".pages").html());
                    self.$boardList.html($b.filter(".board-lists").html());
                };
            },
            error: $.proxy(function(d, b, c) {
                // console.log(d.status, c);
                return false
            }),
        });
        self._reinit();
        if (!isMobile) $("html, body").animate({
            scrollTop: self.$boardTab.offset().top
        }, 500);
    }
    ic.jquery.plugin('boardFnc', boardFnc, '.notice-board');
    return boardFnc;


});
