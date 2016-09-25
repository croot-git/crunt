/**
 * @module common/search
 * @requires ic/ic
 * @requires ic/ui/module
 */
define(['jquery', 'ic/ic', 'ic/ui/module', 'lodash', 'common/dtm'], function($, ic, Module, _, dtm) {

    'use strict';

    var proto,
        events = ic.events,
        $window = ic.dom.$window;
    var PredictiveSearch = function(el, options) {
        var self = this;
        // Call the parent constructor
        PredictiveSearch.superclass.constructor.call(self, el, options);

        // fnc use items
        self.$form = self.$el.parents("form");
        self.$submitBtn = self.$form.find("[type=submit], .submit");
        self._init();
    };

    // Inherit from Module
    ic.util.inherits(PredictiveSearch, Module);

    // Alias the prototype for less typing and better minification
    proto = PredictiveSearch.prototype;

    proto._defaults = {
        ac: 'active'
    };

    proto._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);
        //self.$LayerToggleBtn.on('click', $.proxy(self._primaryNavOverHandler, self));
        self.$el.attr("autocomplete", "off");
        if (self.options.url.indexOf("?") < 0) {
            self.options.url += "?"
        }
        if ($("html").hasClass("lt-ie9") || $("html").hasClass("ie9")) {
            if (!self.$el.closest('.search-result-list').is('div')) {
                self.$el.val(self.$el.attr("placeholder")).addClass("placeholder");
                self.$el.on('focus blur', $.proxy(self._settingPlaceholder, self));
            }
        };
        //if(!$('body').is(".is-mobile")){
        self.$form.css({
            position: "relative",
            "z-index": 9900
        });
        //}

        self.$el.on('keyup', $.proxy(self._detectInputKeyup, self));
        self.$el.on('keydown', $.proxy(self._detectInputKeydown, self));
        self.$form.on('submit', $.proxy(self._submitForm, self));

    }

    proto._settingPlaceholder = function(e) {
        var self = this;
        if (e.type == "focus") {
            if (e.currentTarget.value === self.$el.attr("placeholder")) {
                self.$el.val("").removeClass("placeholder");
            }
        } else if (e.type == "blur") {
            if (e.currentTarget.value === "") {
                self.$el.val(self.$el.attr("placeholder")).addClass("placeholder");
            }
        }
    }

    proto._detectInputKeyup = function(c) {
        var self = this;
        if ($(c.currentTarget).val().length > 0 && c.keyCode != "13") {
            self._loadResults();
        } else if ($(c.currentTarget).val().length > 2 && c.keyCode != "13") {
            self._loadResults();
        } else if ($(c.currentTarget).val().length > 1 && c.keyCode != "13" && (lg.locale == "/us" || lg.locale == "/ru")) {
            self._loadResults();
        } else if ($(c.currentTarget).val().length > 0 && c.keyCode != "13" && lg.locale == "/jp") {
            if ($(c.currentTarget).parents('.support-main').length > 0) {
                self._loadResults();
            };
        } else if ($(c.currentTarget).val().length > 0 && c.keyCode != "13" && lg.locale == "/es") {
            self._loadResults();
        } else if ($(c.currentTarget).val().length <= 0) {
            $("#psearch-results" + self.$el.attr("name"), self.$form).hide();
        }
    };

    proto._detectInputKeydown = function(c) {
        if (c.keyCode == 9 && c.shiftKey) {
            $("#psearch-results" + self.$el.attr("name")).hide();
        }
    };

    proto._submitForm = function() {
        var self = this;
        self.$el.val(XSSfilter($.trim(self.$el.val())));
        sendEvent('predictive-search', XSSfilter(self.$el.val())) //DTM
    }

    proto._loadResults = function() {
        var self = this;
        $.ajax({
            type: "GET",
            url: self.options.url + "&id=" + escape(encodeURIComponent(XSSfilter(self.$el.val()))),
            success: $.proxy(function(c) {
                //console.log(self.options.url + "&id=" + escape(encodeURIComponent(XSSfilter(self.$el.val()))))
                $("#psearch-results" + self.$el.attr("name")).remove();
                self.results = '<div class="search-box-body psearch-results" id="psearch-results' + self.$el.attr("name") + '">' + c + "</div>";
                if (self.$form.closest("header").length || self.$form.closest("nav").length) {
                    $(self.results).insertAfter(self.$form.find(".search-box-heading")).find(".close, .psearch-results-close").click(function(e) {
                        e.preventDefault();
                        self.$el[0].focus();
                        $("#psearch-results" + self.$el.attr("name"), self.$form).hide();
                    });
                } else {
                    $(self.results).insertAfter(self.$form.find("button[type=submit], .model-search-submit"));
                }

                switch (self.options.alignment) {
                    case "left":
                        self.pos = self.$el.position().left;
                        break;
                    case "right":
                        self.pos = -$("#psearch-results" + self.$el.attr("name")).width() + self.$el.outerWidth(true);
                        break
                }
                if ($("#psearch-results" + self.$el.attr("name") + " ul li").length < 1) {
                    $("#psearch-results" + self.$el.attr("name")).hide();
                } else {
                    var t = self.$el.position().top + self.$el.height() + 6,
                        l = self.pos,
                        w = $window.outerWidth(),
                        x = self.$el.parents(".search-box").offset().left;
                    t = $('body').is(".is-mobile") && !self.$el.parents("section").is(".search-wrap") ? 51 : t;
                    l = $('body').is(".is-mobile") && !self.$el.parents("section").is(".search-wrap") ? 0 - x : l,
                        w = $('body').is(".is-mobile") && !self.$el.parents("section").is(".search-wrap") ? w : "100%";
                    $("#psearch-results" + self.$el.attr("name")).css({
                        top: t,
                        left: l,
                        width: w
                    }).show();
                }
                self._bindActions();

            }, this)
        });
        //console.log(self.$el.val());
    };

    proto._bindActions = function() {
        var self = this;

        $(document).bind("mouseup", $.proxy(function(c) {
            if (!$(c.target).closest("#psearch-results" + self.$el.attr("name")).length) {
                self.$el.trigger("focusin");
                $("#psearch-results" + self.$el.attr("name"), self.$form).hide();
            }
        }, this));
        $(window).bind("resize", $.proxy(function(c) {
            var windowWidth = $(window).width();
            if ($(window).width() == windowWidth) {

            } else {
                if (!$(c.currentTarget).closest("#psearch-results" + self.$el.attr("name")).length) {
                    self.$el.trigger("focusin");
                    $("#psearch-results" + self.$el.attr("name"), self.$form).hide();
                }
            }

        }, this));

        $('.psearch-results').find('a').filter(':last').on('keydown', $.proxy(function(c) {
            if (c.keyCode == 9) {
                $("#psearch-results" + self.$el.attr("name"), self.$form).hide();
                self.$submitBtn.trigger("focusin");
            }
        }, this));
    }

    // Create the jquery plugin and set it to auto-wire to specified selector
    ic.jquery.plugin('psearch', PredictiveSearch, '.psearch');
    ic.jquery.plugin('psearch', PredictiveSearch, '.psearch-nav');



    //return PredictiveSearch;
});
