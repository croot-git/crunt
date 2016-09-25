define(['jquery', 'ic/ic', 'ic/ui/module', 'lodash', 'slick-carousel', 'chosen', 'common/dtm', 'common/lazyload'], function($, ic, Module, _, slick, chosen, dtm, lazyload) {

    'use strict';

    var category,
        loadMore,
        events = ic.events,
        isMobile = $("body").hasClass("is-mobile");
    // ** Mobile Tabs
    function runSearchAccordian() {
        if (isMobile) {
            var accordian = $(".search-wrap .accordian-wrap");
            accordian.each(function(i) {
                var btn = $(this).children(".accordian-tab"),
                    div = $(this);
                btn.find("a").unbind('click').on({
                    click: function(e) {
                        e.preventDefault();
                        div.toggleClass("active");
                        var top = $($(this).attr("href"));
                        $("body").animate({
                            scrollTop: top.offset().top
                        }, 500, "easeOutCubic");
                    }
                });
            });
        };
    };
    if ($(".search-wrap").length > 0) {
        runSearchAccordian();
    };

    // Mobile Tabs **
    $('.search-wrap .product-lists.with-carousel').each(function(i) {
        var self = this;
        if ($(this).is(".with-ajax")) {
            $.ajax({
                type: "GET",
                timeout: 50000,
                url: $(this).data('url'),
                success: $.proxy(function(c) {
                    $(this).find(".container").append(c);
                    runCarousel($(this), i);
                }, this)
            });
        } else {
            runCarousel($(this), i);
        }
    });

    // paging, category, tab 
    $.urlParam = function(name, url) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
        if (results == null) {
            return null;
        } else {
            return results[1] || 0;
        }
    }
    if ($('.search-wrap').is('section')) {
        // $('.search-wrap .search-result-area .search-result-toolbox .search-pagenation-wrap .search-pagenation ol li a').unbind('click').bind('click', function() {
        //  var url = $(this).attr('href');
        //  goSearchPost(url);
        //  return false;
        // });
        $('.search-wrap .search-result-area .search-category-tabs>ul>li a').unbind('click').bind('click', function() {
            var url = $(this).attr('href');
            goSearchPost(url);
            return false;
        });
        $('.search-wrap .search-input-area form').unbind('submit').bind('submit', function() {
            var _this = $(this);
            var n = $.trim(_this.find('.search-box-heading input[type=search]').val());
            _this.find('.search-box-heading input[type=search]').val(n);
            return true;
        });
    }

    function goSearchPost(va) {
        $('#tmpForm').remove();
        if (va == "#" || va == "") return false;

        //var url = decodeURIComponent(va).split('?')[1].split('&');
        var url = (va).split('?')[1].split('&');
        var urlArray = [];
        var html = '';
        $.each(url, function(idx, val) {
            urlArray[val.split('=')[0]] = val.split('=')[1];
        });
        html = html + '<div id="tmpForm" style="width:1px;height:1px;overflow:hidden;">';
        html = html + '<form action="' + urlArray['srchActionURL'] + '" method="post">';
        $.each(url, function(idx, val) {
            if (val.split('=')[0] != "srchActionURL") {
                html = html + ' <input type="hidden" name="' + val.split('=')[0] + '" value="' + val.split('=')[1] + '" />';
            }
        });
        html = html + ' <button type="submit">Search</button>';
        html = html + '</form>';
        html = html + '</div>';
        $('body').eq(0).append(html);
        //alert(html)
        $('#tmpForm form').submit();
    }

    function runCarousel(t, i) {
        var numberOfSlidesToShow;
        if (typeof t.attr('data-slides-to-show') !== "undefined") {
            numberOfSlidesToShow = Number(t.attr('data-slides-to-show'));
        } else {
            numberOfSlidesToShow = 3;
        }
        t.addClass("i_" + i);
        t.find(".carousel").slick({
            lazyLoad: 'ondemand',
            slidesToShow: numberOfSlidesToShow,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }]
        });
    };

    function actionVideoPopupTrigger() {
        if ($(".video-popup-trigger").length > 0) {
            $(".video-popup-trigger").each(function() {
                var $this = $(".video-popup-trigger");
                $this.unbind().on({
                    click: function(e) {
                        var url = $this.data("url");
                        e.preventDefault();
                        if ($("#dimmed-layer").length > 0) $("#dimmed-layer").remove();
                        $.ajax({
                            url: url,
                            success: function(b) {
                                $("body").append($(b));
                                $(".dimmed-layer").css({
                                    height: $("body").outerHeight()
                                });
                                $(".dimmed-layer .layer-content").css({
                                    marginTop: $(window).scrollTop() + 75
                                });
                                $(".dimmed-layer a.close").unbind().on({
                                    click: function(e) {
                                        e.preventDefault();
                                        $(".dimmed-layer").remove();
                                    }
                                })
                            },
                            error: $.proxy(function(d, b, c) {
                                console.log(d.status, c);
                                return false
                            })
                        });
                    }
                })
            });
        }
    };

    // ** Desktop filter selectbox script
    var runfilterCategory = function(el, options) {
        var self = this;
        // Call the parent constructor
        runfilterCategory.superclass.constructor.call(self, el, options);
        self.categoryList = productCategory;
        self.$major = self.$el.find(".filter-selectbox.major");
        self.$sub = null;
        self.$submit = self.$el.find("a.btn");
        self.$pages = self.$el.parent(".search-result-toolbox").find(".search-pagenation a");
        self._init();
    };
    ic.util.inherits(runfilterCategory, Module);
    category = runfilterCategory.prototype;
    category._defaults = {
        //active class
        ac: 'active'
    };
    category._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);


        self.$major.find("> select").on('change', $.proxy(self._changeMajorCategory, self));
        self.$submit.on('click', $.proxy(self._runSubmit, self));
        self.$pages.on('click', $.proxy(self._changePage, self));
        self._makeOption();
        actionVideoPopupTrigger();
        self.$major.find("> select").chosen({
            disable_search_threshold: 10
        });
    }
    category._makeOption = function(categoryNumber) {
        var self = this,
            html = [],
            h = -1,
            i = category.indexOfObject(self.categoryList, "categoryNumber", categoryNumber),
            listObj = categoryNumber && self.categoryList[i].hasSubCategory ? self.categoryList[i].subCategory : self.categoryList,
            select = categoryNumber ? "sub" : "major";

        if (select == "sub" && !self.categoryList[i].hasSubCategory) return false;

        $.each(listObj, function(index, data) {
            var x = false;
            if (self.$el.data("selected" + select)) {
                x = data.categoryNumber == self.$el.data("selected" + select);
            }
            html[++h] = "<option value='" + data.categoryNumber + "' " + (x == true ? "selected" : "") + ">" + data.categoryName + " (" + (data.itemLength ? data.itemLength : 0) + ")</option>";
        })
        if (categoryNumber) {
            if (self.$el.find(".filter-selectbox.sub").length > 0) self.$el.find(".filter-selectbox.sub").remove();
            self.$major.after('<div class="filter-selectbox sub"><select class="chosen-select" name="subCategory"><option value="">All Products (' + (self.categoryList[i].itemLength ? self.categoryList[i].itemLength : 0) + ')</option>' + html.join("") + '</select></div>');
            self.$sub = self.$el.find(".filter-selectbox.sub");
            self.$sub.find("> select").chosen({
                disable_search_threshold: 10
            });
        } else {
            self.$major.find("> select").html(html.join("")).trigger("chosen:updated");
            if (!self.$major.find("> select").val() || self.$major.find("> select").val() != 0) {
                self._makeOption(self.$major.find("> select").val());
            }
        }
    }
    category.indexOfObject = function(a, b, c) {
        for (var i = 0; i < a.length; i++) {
            if (a[i][b] == c) {
                return i;
            };
        };
        return null;
    };
    category._changeMajorCategory = function(e) {
        var self = this,
            categoryNumber = $(e.currentTarget).val();
        self._makeOption(categoryNumber);
    };
    category._runSubmit = function(e) {
        var self = this,
            majorValue = self.$major.find("> select").val(),
            subValue = self.$sub ? "&subCategory=" + self.$sub.find("> select").val() : "",
            allCategoryValue = [],
            param = null;

        allCategoryValue = productCategory;

        param = "&tabType=" + self.$el.data("tabnumber") + "&majorCategory=" + majorValue + subValue + "&categoryFilter=" + encodeURIComponent(JSON.stringify(allCategoryValue));
        var n = self.$el.data("url") + param;
        goSearchPost(n);
        return false;
    };
    category._changePage = function(e) {
        e.preventDefault();
        var self = this,
            allCategoryValue = [],
            param = null;

        allCategoryValue = productCategory;

        param = "&categoryFilter=" + encodeURIComponent(JSON.stringify(allCategoryValue));
        var n = $(e.currentTarget).attr("href") + param;
        //console.log(n);
        goSearchPost(n);
        return false;
    }

    // Desktop filter selectbox script **

    // ** Load More Script - Mobile Only -
    var runLoadMore = function(el, options) {
        var self = this;
        // Call the parent constructor
        runLoadMore.superclass.constructor.call(self, el, options);
        self.btnText = self.$el.data("btnText");
        self._init();
    };
    ic.util.inherits(runLoadMore, Module);
    loadMore = runLoadMore.prototype;
    loadMore._defaults = {
        morebutton: $('<div class="list-bottom-button loadmore_btn"><a href="#">' + self.btnText + '</a></div>'),
        init: 0,
        loaded: 0,
        get: 3,
        total: 0,
        url: false,
        parentel: ".accordian-wrap"
    };
    loadMore._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self);
        // attatch event
        //self.$major.on('eventName', $.proxy(self._functionName, self));

        self.element = self.$el;
        self.initialize = false;
        self.dat = {
            init: self.options.init,
            loaded: self.options.loaded,
            get: self.options.get,
            total: self.options.total
        };
        if (self.dat.loaded < self.dat.total) {
            self._loadData();
        }
    }
    loadMore._buttonBind = function() {
        var self = this;
        //self.button.unbind("click").bind("click", $.proxy(function (a) {
        //self.button.find('a').unbind("click").bind("click", $.proxy(function (a) {
        // console.log(self.button.length);
        if (typeof self.button == "object") {
            $(self.button).find("a").unbind("click").bind("click", $.proxy(function(a) {
                a.preventDefault();
                this._loadData();
            }, this));
        };
    }
    loadMore.button = null;
    loadMore._loadData = function() {
        var self = this;
        self._setData();
        var c = self.dat;
        var b;
        if ($(self.element).data("addset")) {
            self.bindAddset($(self.element).data("addset"))
        }
        if (!self.dat.loaded) {
            self.dat.get = self.dat.init
        }
        var a = c;
        if (typeof(self.addSet) === "object") {
            a = (self.dat ? $.param(self.dat) + "&" + $.param(self.addSet) : $.param(self.addSet))
        } else {
            a = $.param(self.dat)
        }
        $.ajax({
            url: self.options.url,
            data: a,
            cache: false,
            beforeSend: $.proxy(function() {
                $("<div class='serverSideData'></div>").insertAfter(self.element).hide();
                $("i", self.button).addClass("load")
            }, this),
            error: $.proxy(function(f, d, e) {
                console.log(f.status, e);
                return false
            }),
            success: $.proxy(function(d) {
                $(".serverSideData", $(self.element).parent()).append(d);
                var $this = this;
                $(self.element).parent().find(".dataset .loadmore-item").each(function(e) {
                    if (e < c.get) {
                        $(this).appendTo($(this).closest(".serverSideData").prev());
                    }
                });
                $(".serverSideData", $(this.element).parent()).remove();
                self._setCount("loaded", $(".loadmore-item", $(this.element)).length);
                self._moreCheck();
                self._buttonBind();
                $(self.element).find("img.lazy").lazyload();
                if (!self.initialize) {
                    self.initialize = true
                }
                //bindDTM();
            }, self),
            complete: $.proxy(function() {}, self)
        });
    }
    loadMore._moreCheck = function() {
        var self = this;
        self.options.morebutton.find("a").html("Load More Results");
        self._setData();
        if (self.dat.loaded < self.dat.total) {
            var cnt = self.dat.total - self.dat.loaded;
            cnt = cnt < self.dat.get ? cnt : self.dat.get;
            if ($(self.element).parents().is("table")) {
                $(self.element).closest("table").next(".loadmore_btn").remove();
                self.button = self.options.morebutton.clone().insertAfter($(self.element).closest("table"))
            } else {
                $(".loadmore_btn", self.element).remove();
                self.button = self.options.morebutton.clone().appendTo($(self.element))
            }
            self.button.find(".btntext  .cnt").text(cnt);
            self._buttonBind()
        } else {
            if (self.button) {
                self.button.remove()
            }
        }
    }
    loadMore._setCount = function(a, b) {
        var self = this;
        $(self.element).attr("data-" + a, b)
    }
    loadMore._getCount = function(a) {
        var self = this;
        return $(self.element).data(a)
    }
    loadMore._bindAddset = function(el) {
        var self = this,
            arr = new Array;
        switch ($(el)[0].tagName.toLowerCase()) {
            case "select":
                $el = $(el);
                $el.unbind("change").bind("change", $.proxy(function(e) {
                    $e = $(e.target);
                    $el.each(function() {
                        arr.push("'" + $(this)[0].name + "':'" + $(this).val() + "'")
                    });
                    eval("obj = {" + arr.join(",") + "}");
                    self.addSet = obj;
                    $(this.element).empty();
                    self._setCount("loaded", 0);
                    if ($("option:eq(" + $e[0].selectedIndex + ")", $e).data("total")) {
                        self._setCount("total", $("option:eq(" + $e[0].selectedIndex + ")", $e).data("total"))
                    }
                    self.loadData()
                }, self));
                break;
            case "input":
                $el = $(el + ":checked");
                $el.each(function() {
                    arr.push("'" + $(this)[0].name + "':'" + $(this).val() + "'")
                });
                eval("obj = {" + arr.join(",") + "}");
                self.addSet = obj;
                $(el).unbind("click").bind("click", $.proxy(function(e) {
                    $e = $(e.target);
                    $(this.element).empty();
                    self._setCount("loaded", 0);
                    if ($e.data("total")) {
                        self._setCount("total", $e.data("total"))
                    }
                    self.loadData()
                }, self));
                break
        }
    }
    loadMore.addSet = new Object;
    loadMore._setData = function() {
        var self = this;
        self.dat.init = parseInt($(this.element).attr("data-init"));
        self.dat.loaded = parseInt($(this.element).attr("data-loaded"));
        self.dat.get = parseInt($(this.element).attr("data-get"));
        self.dat.total = parseInt($(this.element).attr("data-total"))
    }
    loadMore._deleteItem = function(a) {
        var self = this;
        idx = $(a).closest(".loadmore-item").data("index");
        url = $(".deleteItem", a).attr("href");
        $this = self;
        $.ajax({
            url: url,
            data: "seqNo=" + idx,
            method: "post",
            success: function(b) {
                if (b == "true") {
                    $(a).slideUp(lg.slideRate, function() {
                        $(this).removeClass("loadmore-item").empty();
                        $this.moreCheck()
                    });
                    $this._setCount("loaded", $this.dat.loaded - 1);
                    $this._setCount("total", $this.dat.total - 1)
                } else {
                    lg.loadpage(b)
                }
            },
            error: $.proxy(function(d, b, c) {
                console.log(d.status, c);
                return false
            })
        })
    }
    loadMore._resendItem = function(a) {
        var self = this;
        idx = $(a).closest(".loadmore-item").data("index");
        url = $(".resendItem", a).attr("href");
        //console.log(url)
        $this = self;
        $.ajax({
            url: url,
            data: "seqNo=" + idx,
            method: "post",
            success: function(b) {
                if (b == "true") {
                    $(a).slideUp(lg.slideRate, function() {
                        $(this).removeClass("loadmore-item").empty();
                        $this.moreCheck()
                    });
                    $this._setCount("loaded", $this.dat.loaded - 1);
                    $this._setCount("total", $this.dat.total - 1)
                } else {
                    lg.loadpage(b)
                }
            },
            error: $.proxy(function(d, b, c) {
                console.log(d.status, c);
                return false
            }),
        })
    }
    ic.jquery.plugin('runfilterCategory', runfilterCategory, '.search-filter');
    ic.jquery.plugin('runLoadMore', runLoadMore, '.loadmore');
    return [runfilterCategory, runLoadMore];
    //return runLoadMore;
    // - Load More Script - Mobile Only **


});
