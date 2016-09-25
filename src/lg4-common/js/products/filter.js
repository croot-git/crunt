require(['global-config', 'jquery', 'jqueryui', 'jquery.cookie', 'common/ecorebates', 'common/bestbuy', 'chosen', 'common/lazyload', 'common/dtm'], function(globalConfig, $, jqueryui, cookie, ecorebates, bestbuy, chosen, lazyload, dtm) { // theJ
    'use strict';
    var filterInfo = new Array();
    (function($) {
        var lg = {
                compareLoc: $("html").data("compareloc"),
                compareCategory: ($("html").data("compare-category")),
                clearFilterCookie: false,
                msgs: {},
                onCompareClick: function() {
                    var e = lg.compare.pageCategory();
                    var d = $(this).data("product-id");

                    if (lg.compare.isin((d), e)) {
                        lg.compare.remove((d), e);
                        $('input.compare[data-product-id="' + d + '"]').prop("checked", false).next().removeClass('hide');
                        $('input.compare[data-product-id="' + d + '"]').parent().next('.compare_y').addClass('hide');
                    } else {
                        if (lg.compare.count(e) < 10) {
                            lg.compare.add((d), e);

                            $('input.compare[data-product-id="' + d + '"]').parent().next('.compare_y').removeClass('hide');
                        } else {
                            //lg.showError("comparelimit")
                        }
                    }
                    lg.updateCompareButton();
                },
                updateCompareButton: function(d) {
                    var e = lg.compare.count(lg.compare.pageCategory());
                    $(".compare-state").off("click").on("click", function(b) {
                        b.preventDefault();
                        if (lg.compare.get(lg.compareCategory).length) {
                            window.location = lg.compareLoc
                        }
                    }).find("span").text(e);

                    $(".compare-clear").off("click").on("click", function(b) {
                        b.preventDefault();

                        var e = lg.compare.pageCategory();
                        var copyArr = JSON.parse(JSON.stringify(lg.compare.get(lg.compareCategory)));

                        for (var i = 0; i < copyArr.length; i++) {
                            var cid = decodeURIComponent(copyArr[i]);
                            var $el = $('input.compare[data-product-id="' + cid + '"]');

                            if (!$el.length) {
                                lg.compare.remove((cid), e);
                            } else {
                                $el.trigger('change');
                            }
                        }
                        lg.updateCompareButton();
                    })

                    $('.compare_y em').text(e);

                    $('.product-grid-header .compare-state span').text("(" + e + ")");

                    if (lg.compare.get(lg.compareCategory).length) {
                        $('.product-grid-header .compare-clear').removeClass('hide');
                    } else {
                        $('.product-grid-header .compare-clear').addClass('hide');
                    }

                    for (var i = 0; i < lg.compare.get(lg.compareCategory).length; i++) {
                        /* 140429 modify */
                        var cid = decodeURIComponent(lg.compare.get(lg.compareCategory)[i]);
                        var $el = $('input.compare[data-product-id="' + cid + '"]');
                        var $compareEl = $('a.remove-btn[data-product-id="' + cid + '"]');
                        $el.next().addClass('hide');
                        $el.parent().next('.compare_y').removeClass('hide');
                        $el.prop("checked", true);
                        $compareEl.show().prev().hide();
                        $compareEl.addClass('onItem');
                        $el.parent().next('.compare_y').find('a').attr('href', lg.compareLoc);
                    }
                    if (lg.compare.count(lg.compareCategory) >= 10) {
                        $("input.compare:not(:checked)").attr("disabled", "disabled");
                    } else {
                        $("input.compare:not(:checked)").removeAttr("disabled")
                        $("input.compare:checked").removeAttr("disabled")
                    }
                },
                compare: {
                    CARTS: "LG4_COMPARE_CART",
                    pageCategory: function() {
                        return lg.compareCategory
                    },
                    get: function(e) {
                        var g = this._cObjGet()[e];
                        if (!g) {
                            g = []
                        } else {
                            var f = g.length;
                            while (f--) {
                                if (g[f] == "") {
                                    g.splice(f, 1)
                                }
                            }
                        }
                        return g
                    },
                    add: function(j, k, g) {
                        var h = this.get(k);
                        if (g == null) {
                            h.unshift(j)
                        } else {
                            h.splice($.inArray(g, h), 1, j)
                        }
                        var f = this._cObjGet();
                        f[k] = h;
                        this._cObjSet(f)
                    },
                    remove: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                g.splice(l, 1)
                            }
                        }
                        k[j] = g;
                        this._cObjSet(k)
                    },
                    isin: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                return true
                            }
                        }
                        return false
                    },
                    empty: function(d) {
                        var e = this._cObjGet();
                        delete e[d];
                        this._cObjSet(e)
                    },
                    count: function(c) {
                        return this.get(c).length
                    },
                    view_add: function(e) {
                        var g = this._cArrGetViews();
                        var f = g.length;
                        while (f--) {
                            if (g[f] == e) {
                                g.splice(f, 1)
                            }
                        }
                        g.unshift(e);
                        while (g.join(",").length > 1024) {
                            g.pop()
                        }
                        this._cArrSetViews(g)
                    },
                    view_remove: function(e) {
                        var g = this._cArrGetViews();
                        var f = g.length;
                        while (f--) {
                            if (g[f] == e) {
                                g.splice(f, 1)
                            }
                        }
                        this._cArrSetViews(g)
                    },
                    view_clear: function() {
                        this._cArrSetViews([])
                    },
                    view_get: function() {
                        return this._cArrGetViews()
                    },
                    view_count: function() {
                        return this._cArrGetViews().length
                    },
                    _cObjGet: function() {
                        var h = {};
                        var k = this._cGet(this.CARTS);
                        var g;
                        if (k) {
                            g = k.split(",")
                        } else {
                            g = []
                        }
                        for (var l in g) {
                            var j = g[l];
                            h[j.split("=")[0]] = j.split("=")[1].split("|")
                        }
                        return h
                    },
                    _cObjSet: function(h) {
                        var f = [];
                        for (var g in h) {
                            var j = h[g];
                            f.push(g + "=" + j.join("|"))
                        }
                        this._cSet(this.CARTS, f.join(","))
                    },
                    _cSet: function(k, j, h) {
                        if (h) {
                            var l = new Date();
                            l.setTime(l.getTime() + (h * 24 * 60 * 60 * 1000));
                            var g = "; expires=" + l.toGMTString()
                        } else {
                            var g = ""
                        }
                        if (lg.locale == "/br") {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lge.com"
                        } else {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lg.com"
                        }
                    },
                    _cGet: function(l) {
                        var j = decodeURIComponent(l) + "=";
                        var c = decodeURIComponent(document.cookie).split(";");
                        for (var k = 0; k < c.length; k++) {
                            var h = c[k];
                            while (h.charAt(0) == " ") {
                                h = h.substring(1, h.length)
                            }
                            if (h.indexOf(j) == 0) {
                                return h.substring(j.length, h.length)
                            }
                        }
                        return null
                    },
                    _cDel: function(c) {
                        this._cSet(c, "", -1)
                    }
                },
                filter: {
                    CARTS: "LG4_FILTER_CART",
                    page: 1,
                    pageCategory: function() {
                        return lg.compareCategory
                    },
                    get: function(e) {
                        var g = this._cObjGet()[e];
                        if (!g) {
                            g = []
                        } else {
                            var f = g.length;
                            while (f--) {
                                if (g[f] == "") {
                                    g.splice(f, 1)
                                }
                            }
                        }
                        return g
                    },
                    add: function(j, k, g) {
                        var h = this.get(k);
                        if (g == null) {
                            h.unshift(j)
                        } else {
                            h.splice($.inArray(g, h), 1, j)
                        }
                        var f = this._cObjGet();
                        f[k] = h;
                        this._cObjSet(f)
                    },
                    remove: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                g.splice(l, 1)
                            }
                        }
                        k[j] = g;
                        this._cObjSet(k)
                    },
                    isin: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                return true
                            }
                        }
                        return false
                    },
                    count: function(c) {
                        return this.get(c).length
                    },
                    _cObjGet: function() {
                        var h = {};
                        var k = this._cGet(this.CARTS);
                        var g;
                        if (k) {
                            g = k.split(",")
                        } else {
                            g = []
                        }
                        for (var l in g) {
                            var j = g[l];
                            h[j.split("=")[0]] = j.split("=")[1].split("|")
                        }
                        return h
                    },
                    _cObjSet: function(h) {
                        var f = [];
                        for (var g in h) {
                            var j = h[g];
                            f.push(g + "=" + j.join("|"))
                        }
                        this._cSet(this.CARTS, f.join(","))
                    },
                    _cSet: function(k, j, h) {
                        if (h) {
                            var l = new Date();
                            l.setTime(l.getTime() + (h * 24 * 60 * 60 * 1000));
                            var g = "; expires=" + l.toGMTString()
                        } else {
                            var g = ""
                        }
                        if (lg.locale == "/br") {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lge.com"
                        } else {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lg.com"
                        }
                    },
                    _cGet: function(l) {
                        var j = decodeURIComponent(l) + "=";
                        var c = decodeURIComponent(document.cookie).split(";");
                        for (var k = 0; k < c.length; k++) {
                            var h = c[k];
                            while (h.charAt(0) == " ") {
                                h = h.substring(1, h.length)
                            }
                            if (h.indexOf(j) == 0) {
                                return h.substring(j.length, h.length)
                            }
                        }
                        return null
                    },
                    _cDel: function(c) {
                        this._cSet(c, "", -1)
                    }
                },
                compareLOCK: {
                    LOCK: "LG4_COMPARE_LOCK",
                    pageCategory: function() {
                        return lg.compareCategory
                    },
                    get: function(e) {
                        var g = this._cObjGet()[e];
                        if (!g) {
                            g = []
                        } else {
                            var f = g.length;
                            while (f--) {
                                if (g[f] == "") {
                                    g.splice(f, 1)
                                }
                            }
                        }
                        return g
                    },
                    add: function(j, k, g) {
                        var h = this.get(k);
                        if (g == null) {
                            h.unshift(j)
                        } else {
                            h.splice($.inArray(g, h), 1, j)
                        }
                        var f = this._cObjGet();
                        f[k] = h;
                        this._cObjSet(f)
                    },
                    remove: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                g.splice(l, 1)
                            }
                        }
                        k[j] = g;
                        this._cObjSet(k)
                    },
                    isin: function(h, j) {
                        var k = this._cObjGet();
                        var g = this.get(j);
                        var l = g.length;
                        while (l--) {
                            if (g[l] == h) {
                                return true
                            }
                        }
                        return false
                    },
                    empty: function(d) {
                        var e = this._cObjGet();
                        delete e[d];
                        this._cObjSet(e)
                    },
                    count: function(c) {
                        return this.get(c).length
                    },
                    view_add: function(e) {
                        var g = this._cArrGetViews();
                        var f = g.length;
                        while (f--) {
                            if (g[f] == e) {
                                g.splice(f, 1)
                            }
                        }
                        g.unshift(e);
                        while (g.join(",").length > 1024) {
                            g.pop()
                        }
                        this._cArrSetViews(g)
                    },
                    view_remove: function(e) {
                        var g = this._cArrGetViews();
                        var f = g.length;
                        while (f--) {
                            if (g[f] == e) {
                                g.splice(f, 1)
                            }
                        }
                        this._cArrSetViews(g)
                    },
                    view_clear: function() {
                        this._cArrSetViews([])
                    },
                    view_get: function() {
                        return this._cArrGetViews()
                    },
                    view_count: function() {
                        return this._cArrGetViews().length
                    },
                    _cObjGet: function() {
                        var h = {};
                        var k = this._cGet(this.LOCK);
                        var g;
                        if (k) {
                            g = k.split(",")
                        } else {
                            g = []
                        }
                        for (var l in g) {
                            var j = g[l];
                            h[j.split("=")[0]] = j.split("=")[1].split("|")
                        }
                        return h
                    },
                    _cObjSet: function(h) {
                        var f = [];
                        for (var g in h) {
                            var j = h[g];
                            f.push(g + "=" + j.join("|"))
                        }
                        this._cSet(this.LOCK, f.join(","))
                    },
                    _cSet: function(k, j, h) {
                        if (h) {
                            var l = new Date();
                            l.setTime(l.getTime() + (h * 24 * 60 * 60 * 1000));
                            var g = "; expires=" + l.toGMTString()
                        } else {
                            var g = ""
                        }
                        if (lg.locale == "/br") {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lge.com"
                        } else {
                            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(j) + g + "; path=/; domain=.lg.com"
                        }
                    },
                    _cGet: function(l) {
                        var j = decodeURIComponent(l) + "=";
                        var c = decodeURIComponent(document.cookie).split(";");
                        for (var k = 0; k < c.length; k++) {
                            var h = c[k];
                            while (h.charAt(0) == " ") {
                                h = h.substring(1, h.length)
                            }
                            if (h.indexOf(j) == 0) {
                                return h.substring(j.length, h.length)
                            }
                        }
                        return null
                    },
                    _cDel: function(c) {
                        this._cSet(c, "", -1)
                    }
                }
            }
            //init
        lg.updateCompareButton();

        var checkedOptions = {};

        $.fn.extend({
                productFilter: function() {
                    var me = this;
                    me.form = $(me);
                    me.filter = me.form.find('.filterField');
                    me.grid = me.form.find('.grid');
                    //lg.clearFilterCookie = false;


                    var rtobj = {
                        init: function() {
                            var isDeskTop = !$('body').hasClass('is-mobile');
                            var c = lg.filter.pageCategory();

                            /*
						if (typeof mysearchFilter == 'undefined') {} else {
							var $b = mysearchFilter[lg.compareCategory];
							var $el = $('form.filter');
							var i = 0;
							for(var key in $b){
								$el.find('li input').eq(i).attr('name',$b[key]).val($b[key]);
								i++;
							}
						}
						 */

                            //if(me.form.data('search-category')){
                            // init checkbox for start my search
                            me.filter.find('input').each(function() {
                                if ($(this).prop("checked")) {
                                    $(this).prop("checked", false);
                                }
                            });
                            // init slider for start my search
                            if ($('.findTheRightFilter').is('section')) {
                                me.form.find('input[type=hidden]').each(function() {
                                    if ($(this).attr('name') == 'sizeMin' || $(this).attr('name') == 'sizeMax' || $(this).attr('name') == 'priceMin' || $(this).attr('name') == 'priceMax') {
                                        $(this).val('');
                                    }
                                });
                            }

                            //if(me.form.find('.sort-select').val())
                            //}
                            // -- COLOR CHIP SCRIPTS --
                            if (!$('body').hasClass("is-mobile")) { // DESKTOP ONLY
                                var targets = me.filter.find('label.swatch, label.swatch input');
                                targets.bind({
                                    'focus': $.proxy(function(e) {
                                        var item = $(e.currentTarget).is("label") ? $(e.currentTarget).find("input[type='checkbox']") : $(e.currentTarget),
                                            label = item.parent("label"),
                                            colorName = item.data("colorname"),
                                            colorTag = '<span class="color-tag">' + colorName + '</span>';
                                        if (label.find("span.color-tag")[0]) label.find(".color-tag").remove();
                                        label.append(colorTag);
                                    }),
                                    'blur': $.proxy(function(e) {
                                        var item = $(e.currentTarget).is("label") ? $(e.currentTarget) : $(e.currentTarget).parent("label");
                                        item.find(".color-tag").remove();
                                    })
                                });
                                if (!('ontouchend' in document)) {
                                    targets.bind({
                                        'mouseenter': $.proxy(function(e) {
                                            var item = $(e.currentTarget).is("label") ? $(e.currentTarget).find("input[type='checkbox']") : $(e.currentTarget);
                                            item.trigger("focus");
                                        }),
                                        'mouseleave': $.proxy(function(e) {
                                            var item = $(e.currentTarget).is("label") ? $(e.currentTarget).find("input[type='checkbox']") : $(e.currentTarget);
                                            item.trigger("blur");
                                        })
                                    })
                                } else {
                                    targets.bind({
                                        'click': $.proxy(function(e) {
                                            $(e.currentTarget).trigger("focus");
                                        })
                                    })
                                }
                            }
                            me.filter.find('input, select, checkbox, radio').bind('change', $.proxy(function(e) {
                                var chkT;
                                var item = $(e.target);
                                var itemAttr = "";
                                var cookieVal = "";
                                if (e.target.type == 'checkbox' || e.target.type == 'radio') {
                                    if (item.prop("checked")) {
                                        //console.log('checked');
                                        itemAttr = "checked";
                                        if (isDeskTop || me.form.data('search-category')) {
                                            if (!lg.clearFilterCookie && me.form.data('search-category')) {
                                                lg.filter._cSet(lg.filter.CARTS, '');
                                                lg.clearFilterCookie = true;
                                            }
                                            //lg.filter.add((item[0].name+":"+item.val()), c);
                                            lg.filter.add((item.val()), c); // add cookie
                                        }

                                        var colorW, colorS;
                                        (item.parent().prevAll('legend:first').find('a').length > 0) ? colorW = document.getElementById(item.parent().prevAll('legend:first').attr('id')).childNodes[0].nodeValue: colorW = $.trim(item.parent().prevAll('legend:first').text());

                                        if ($(e.target).parent().hasClass('swatch')) {
                                            var colorS = item.data("colorname");
                                            if (isDeskTop) {
                                                checkOptionDraw(colorS, item);
                                                //$(e.target).parent().trigger("mouseleave");
                                            } else {
                                                var label = $(e.target).parent('label.swatch'),
                                                    labels = me.filter.find("label.swatch"),
                                                    colorTag = '<span class="color-tag">' + colorS + '</span>';
                                                if (!me.filter.find("span.color-tag")[0]) {
                                                    $(colorTag).insertAfter(labels.eq(labels.length - 1));
                                                } else {
                                                    me.filter.find("span.color-tag").text(colorS);
                                                }
                                            }
                                            item.attr('title', item.attr('title').replace("{color}", colorS));
                                        } else {
                                            if (isDeskTop) {
                                                checkOptionDraw(item.next().text(), item);
                                            }
                                        }

                                        //if(colorS) {
                                        //	chkT = 'Select'+ ' ' + colorS; /* 20140519 choyearang modify */
                                        //	item.attr('title',chkT);
                                        //}
                                    } else {
                                        //console.log('not checked');
                                        itemAttr = "";
                                        if (isDeskTop) {
                                            if ($(e.target).parent().hasClass('swatch')) {
                                                var colorS = item.data("colorname");
                                                checkOptionDraw(colorS, item);
                                            } else {
                                                checkOptionDraw(item.next().text(), item);
                                            }
                                            // lg.filter.remove((item[0].name+":"+item.val()), c);
                                            lg.filter.remove((item.val()), c);
                                        } else {
                                            me.filter.find("span.color-tag").remove();
                                        }
                                    }
                                } else {
                                    itemAttr = "selected";
                                    (item.find('option[value=' + item.val() + ']').is(':selected')) ? itemAttr = 'selected': itemAttr = '';
                                }

                                var d = item.val();

                                if (isDeskTop || me.form.data('search-category')) {
                                    this.applyFilter();
                                    $(window).trigger('resize');
                                }


                                if (item.parent().hasClass('swatch')) {
                                    if (item.parent().hasClass('active')) {
                                        item.parent().removeClass('active');
                                    } else {
                                        item.parent().addClass('active');
                                    }
                                }
                            }, this));

                            if (!me.form.data('search-category')) { // no - start my search
                                this.setCookieFilter();
                            }

                            me.grid.on('change', '.compare-check input.compare', lg.onCompareClick);
                            me.grid.on('click', '.compare-check a', function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                window.location = lg.compareLoc
                            });
                            me.form.find('.sort-select').bind('change', function() {
                                var _this = this;
                                $('.sort-select').each(function() {
                                    $(this).removeAttr('name');
                                    var siblingItem = this;
                                    if (_this !== siblingItem) {
                                        $(siblingItem).val($(_this).find(':selected').val()).trigger("chosen:updated");;
                                        //console.log($(_this).find(':selected').val() +" === "+$(siblingItem).val())
                                    }
                                })
                                $(_this).attr('name', 'sort');
                                rtobj.applyFilter();
                            });
                            me.form.on('click', '.page-controls a', function() {
                                    var _ank = $(this);
                                    var url = _ank.attr('data-uri');
                                    if (!url) {
                                        return false;
                                    }
                                    $("html, body").animate({
                                        scrollTop: $(this).parents("form.filter").offset().top
                                    }, 500);
                                    rtobj.reload(url)
                                    return false;
                                })
                                // enter key not action
                            me.grid.find("input, select, checkbox, radio").on('keydown', $.proxy(function(b) {
                                if (b.keyCode == 13) {
                                    return false;
                                };
                            }, this));
                        },
                        checkFilter: function() {
                            if (filterInfo.length > 0) {
                                var c = lg.filter.pageCategory();
                                for (var i in filterInfo) {
                                    var filterValues = filterInfo[i]["facetValues"];
                                    for (var j in filterValues) {

                                        var _enable = filterValues[j]["enable"];
                                        var _value = filterValues[j]["facetValueId"];
                                        var _chkfilter = $('*[value="' + _value + '"]');

                                        if (_chkfilter.get(0)) {
                                            if (_chkfilter.get(0).tagName.toLowerCase() == "select") {
                                                if (_enable == "N") {
                                                    _chkfilter.css('display', 'none');
                                                    lg.filter.add(_chkfilter.attr('value'), c);
                                                } else {
                                                    _chkfilter.css('display', 'block');
                                                }
                                            } else {
                                                if (!_chkfilter.is(':checked')) {
                                                    if (_enable == "N") {
                                                        _chkfilter.attr('disabled', 'disabled').css('cursor', 'default').parent().addClass('disabled');
                                                        $.cookie(_chkfilter.attr('value'), '', -1);
                                                        lg.filter.remove(_chkfilter.attr('value'), c);
                                                    } else {
                                                        _chkfilter.removeAttr('disabled').css('cursor', 'pointer').parent().removeClass('disabled');
                                                    }
                                                } else {

                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                this.clear();
                            }

                            return false;
                        },
                        setCookieFilter: function() {
                            var formSubmit = false;
                            me.filter.find('input, select, checkbox, radio').each($.proxy(function(idx, el) {
                                var c = lg.filter.pageCategory();
                                var key = $(el).attr('value');

                                var getVal = lg.filter.isin((key), c);
                                if (getVal) {
                                    formSubmit = true;
                                    //$(el).attr('checked','checked');
                                    $(el).prop('checked', true);
                                    if ($(el).parent().hasClass('swatch')) {
                                        var colorS = $(el).data("colorname");
                                        checkOptionDraw(colorS, $(el));
                                        $(el).parent().addClass('active');
                                    } else {
                                        checkOptionDraw($(el).next().text(), $(el));
                                    }

                                    if (!this.cookieFilter) {
                                        this.cookieFilter = true;
                                    }
                                }
                            }, this));
                            var sliderCookie;
                            var screenTxt = $('.screen .first-unit');
                            var screenTxt2 = $('.screen .last-unit');
                            var priceTxt = $('.budget .first-unit');
                            var priceTxt2 = $('.budget .last-unit');

                            for (var i = 0; i < lg.filter.get(lg.compareCategory).length; i++) {
                                sliderCookie = decodeURIComponent(lg.filter.get(lg.compareCategory)[i]);
                                //console.log(sliderCookie)
                                if (sliderCookie.indexOf('sizeMin') != -1 && objHasValue(dragbarVal.selectOption, sliderCookie.split(':')[1])) {
                                    $('input[name=sizeMin]').val(sliderCookie.split(':')[1]);
                                    formSubmit = true;
                                    setTimeout(function() {
                                        var n = $('.screen .slide-bar').data("slidername");
                                        if (n) {
                                            checkOptionDraw(n, $.trim(screenTxt.text()) + "-" + $.trim(screenTxt2.text()), true)
                                        }
                                    }, 150)
                                }
                                if (sliderCookie.indexOf('sizeMax') != -1 && objHasValue(dragbarVal.selectOption, sliderCookie.split(':')[1])) {
                                    $('input[name=sizeMax]').val(sliderCookie.split(':')[1])
                                    formSubmit = true;
                                    setTimeout(function() {
                                        var n = $('.screen .slide-bar').data("slidername");
                                        if (n) {
                                            checkOptionDraw(n, $.trim(screenTxt.text()) + "-" + $.trim(screenTxt2.text()), true)
                                        }
                                    }, 150)
                                }
                                if (sliderCookie.indexOf('priceMin') != -1 && objHasValue(dragbarVal.priceOption, sliderCookie.split(':')[1])) {
                                    $('input[name=priceMin]').val(sliderCookie.split(':')[1])
                                    formSubmit = true;
                                    setTimeout(function() {
                                        var n = $('.budget .slide-bar').data("slidername");
                                        if (n) {
                                            checkOptionDraw(n, $.trim(priceTxt.text()) + "-" + $.trim(priceTxt2.text()), true)
                                        }
                                    }, 150)
                                }
                                if (sliderCookie.indexOf('priceMax') != -1 && objHasValue(dragbarVal.priceOption, sliderCookie.split(':')[1])) {
                                    $('input[name=priceMax]').val(sliderCookie.split(':')[1])
                                    formSubmit = true;
                                    setTimeout(function() {
                                        var n = $('.budget .slide-bar').data("slidername");
                                        if (n) {
                                            checkOptionDraw(n, $.trim(priceTxt.text()) + "-" + $.trim(priceTxt2.text()), true)
                                        }
                                    }, 150)
                                }
                            }
                            refineDragbar();
                            if (!$('.add-to-compare').length && formSubmit) {
                                this.applyFilter();
                            }
                        },
                        applyFilter: function(c) {
                            c = c ? "&" + c : "";
                            if ($('input[name=page]').length > 0) {
                                $('input[name=page]').remove();
                            }
                            var XSSFilter = function(content) {
                                return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                            }
                            me.form.find('input, select').each(function() {
                                this.value = XSSFilter(this.value);
                                this.name = XSSFilter(this.name);
                            })

                            var uri = me.form.attr('action') + '?' + me.form.serialize() + c;

                            this.reload(uri);
                        },
                        applyFilterMore: function(url, page, limit) {
                            var XSSFilter = function(content) {
                                return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                            }
                            me.form.find('input, select').each(function() {
                                this.value = XSSFilter(this.value);
                                this.name = XSSFilter(this.name);
                            })
                            var pageNum = page;
                            if (pageNum <= limit) {
                                var b = url + '?' + me.form.serialize();
                                $.ajax({
                                    url: b,
                                    type: "post",
                                    success: $.proxy(function(res, data) {
                                        var $b = $(res);
                                        $($b.find('.product-lists').html()).appendTo($('.product-lists'));
                                        $(".product-lists img.lazy").lazyload({
                                            appear: function() {
                                                $(this).attr('style', '').removeClass('lazy');
                                            }
                                        });
                                        lg.updateCompareButton();

                                        if (runEcorebates) runEcorebates(); //rebate theJ
                                        if ($('.buynow').length > 0) {
                                            runBuyNow();
                                        } // buy now theJ
                                        $('.product-lists').each(setBVRatings); // bazaar voide theJ
                                        $(".product-list-wrap img.lazy").lazyload({
                                            appear: function() {
                                                $(this).attr('style', '').removeClass('lazy');
                                            }
                                        });

                                    }, this),
                                    error: $.proxy(function() {
                                        //console.log('ajax error');
                                        return false
                                    })
                                });
                            }
                            if (pageNum == limit) {
                                $('.refind-your-search .more-item').hide();
                            }
                        },
                        reload: function(b, _callback) {
                            if (this.loading) {
                                return;
                            }
                            this.loading = true;
                            $.ajax({
                                url: b,
                                type: "post",
                                success: $.proxy(function(res, data) {
                                    var $b = $(res);
                                    //total
                                    var t = me.form.find('.product-grid-header .total span.check-singular').data("plural");
                                    me.form.find('.product-grid-header .total span.count').text($b.find('.total').text()) // need total only
                                    me.form.find('.result .total').text($b.find('.total').text()) // need total only
                                    if (Number($b.find('.total').text()) <= 1) {
                                        t = me.form.find('.product-grid-header .total span.check-singular').data("singular");
                                    }
                                    me.form.find('.product-grid-header .total span.check-singular').text(t);
                                    me.form.find('.result .check-singular').text(t)
                                        //pages
                                    me.form.find('.page-controls .pages').html($b.find('.pages').html())

                                    //product list

                                    me.form.find('.product-list-wrap').html($b.find('.product-list-wrap').html());

                                    if (!$b.find('ul').length) {
                                        me.form.find('.product-list-wrap').addClass('no-result');
                                    } else {
                                        me.form.find('.product-list-wrap').removeClass('no-result');
                                    }

                                    var listWrap = $('.response .product-grid');
                                    //listWrap.find('.compare_y em').text(compareCount)
                                    //$('.product-grid-header .compare-state span').text("("+compareCount+")")
                                    $b.filter("script").each(function() {
                                        $.globalEval(this.text || this.textContent || this.innerHTML || "")
                                    });
                                    /* filter realtime search : parkjeongmi 20120919 S */
                                    if (typeof filters != "undefined" && filters.length >= 0) {

                                        filterInfo = filters;
                                        this.checkFilter();
                                    }
                                    /* filter realtime search : parkjeongmi 20120919 E */
                                    if ($('div.add-to-compare').length) {
                                        //$('.btn-center').
                                        if (parseInt($b.find('.total').text()) < 1) {
                                            $('.btn-center').find('a:eq(0)').addClass('disable');
                                            $('.btn-center').find('a:eq(1)').addClass('disable');
                                            $('.btn-center').find('a:eq(2)').addClass('disable');
                                        } else {
                                            if (parseInt($b.find('.pages .active').text()) < 2) {
                                                $('.btn-center').find('a:eq(0)').addClass('disable');
                                            } else {
                                                $('.btn-center').find('a:eq(0)').removeClass('disable');
                                            }
                                            if (parseInt($b.find('.pages .active').text()) == parseInt($b.find('.total').text())) {
                                                $('.btn-center').find('a:eq(1)').addClass('disable');
                                            } else {
                                                $('.btn-center').find('a:eq(1)').removeClass('disable');
                                            }
                                            $('.btn-center').find('a:eq(2)').removeClass('disable');
                                        }
                                    }
                                    if ($('.findTheRightFilter').is('section')) {
                                        if (parseInt($b.find('.total').text()) == 0) {
                                            $('.matching-btn a').unbind('click').bind('click', function(b) {
                                                b.preventDefault();
                                                return false;
                                            }).addClass('hide');
                                        } else {
                                            $('.matching-btn a').unbind('click').removeClass('hide').bind('click', function() {
                                                // DTM
                                                var dtm = '';
                                                // Desktop
                                                if ($('.my-search .m-search-select').is('div')) { // TV
                                                    $('.my-search .search-area > div').not('.matching').each(function(i) {
                                                        var _this = $(this);
                                                        if (i != 0) dtm = dtm + ':';
                                                        if (_this.hasClass('screen')) {
                                                            dtm = dtm + $.trim(_this.find('.slide-box .img .img-text').text());
                                                        } else if (_this.hasClass('budget')) {
                                                            dtm = dtm + $.trim(_this.find('.slide-box .first-unit').text()) + "-" + $.trim(_this.find('.slide-box .last-unit').text());
                                                        } else if (_this.hasClass('viewing')) {
                                                            var n = '';
                                                            _this.find('.check-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.text());
                                                            });
                                                            dtm = dtm + n;
                                                        }
                                                    });
                                                } else if ($('.my-search .washers-search-area').is('div')) { // Washer
                                                    $('.my-search .washers-search-area > div').not('.matching').each(function(i) {
                                                        var _this = $(this);
                                                        if (i != 0) dtm = dtm + ':';
                                                        if (_this.hasClass('screen')) {
                                                            dtm = dtm + $.trim(_this.find('.slide-box .slide-bar .text').text());
                                                        } else if (_this.hasClass('budget')) {
                                                            dtm = dtm + $.trim(_this.find('.slide-box .first-unit').text()) + "-" + $.trim(_this.find('.slide-box .last-unit').text());
                                                        } else if (_this.hasClass('washers-choice')) {
                                                            var n = '';
                                                            _this.find('.washers-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.text());
                                                            });
                                                            dtm = dtm + n;
                                                        }
                                                    });
                                                } else if ($('.my-search .refrigerators-search-area').is('div')) { // refrigerators
                                                    $('.my-search .refrigerators-search-area > div').not('.matching').each(function(i) {
                                                        var _this = $(this);
                                                        if (i != 0) dtm = dtm + ':';
                                                        if (_this.hasClass('viewing')) {
                                                            var n = '';
                                                            _this.find('.check-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.text());
                                                            });
                                                            dtm = dtm + n;
                                                        } else if (_this.hasClass('refrigerators-choice')) {
                                                            var n = '';
                                                            _this.find('.refrigerators-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.find('.list-text').text());
                                                            });
                                                            dtm = dtm + n;
                                                        }
                                                    });
                                                }
                                                // Mobile
                                                if ($('.m-my-search .m-search-select').is('div')) { // TV
                                                    $('.m-my-search .m-search-select > div').not('.matching').each(function(i) {
                                                        var _this = $(this);
                                                        if (i != 0) dtm = dtm + ':';
                                                        if (_this.hasClass('m-screen')) {
                                                            if ($.trim(_this.find('.m-slide-box .m-img .m-img-text').text())) dtm = dtm + $.trim(_this.find('.m-slide-box .m-img .m-img-text').text());
                                                            else dtm = dtm + $.trim(_this.find('.m-slide-box .m-slide-bar .m-text').text());
                                                        } else if (_this.hasClass('m-budget')) {
                                                            dtm = dtm + $.trim(_this.find('.m-slide-box .m-first-unit').text()) + "-" + $.trim(_this.find('.m-slide-box .m-last-unit').text());
                                                        } else if (_this.hasClass('m-viewing')) {
                                                            var n = '';
                                                            _this.find('.m-check-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.text());
                                                            });
                                                            dtm = dtm + n;
                                                        } else if (_this.hasClass('m-refrigerators-choice')) {
                                                            var n = '';
                                                            _this.find('.m-refrigerators-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.find('.m-list-text').text());
                                                            });
                                                            dtm = dtm + n;
                                                        } else if (_this.hasClass('m-washers-choice')) {
                                                            var n = '';
                                                            _this.find('.m-washers-list li label.on').each(function(j) {
                                                                var _this2 = $(this);
                                                                if (j != 0) n = n + ",";
                                                                n = n + $.trim(_this2.text());
                                                            });
                                                            dtm = dtm + n;
                                                        }
                                                    });
                                                }
                                                // alert(dtm);
                                                sendEvent('start-my-search', dtm);
                                                // return false; // for test
                                            });
                                        }
                                        $('.matching-count, .m-matching-count').text($b.find('.total').text());
                                    }
                                    //this.setCompareCookie();
                                    this.currentPage = 0;
                                    lg.updateCompareButton();
                                    if (runEcorebates) runEcorebates(); //rebate theJ
                                    if ($('.buynow').length > 0) {
                                        runBuyNow();
                                    } // buy now theJ
                                    $('.product-lists').each(setBVRatings); // bazaar voide theJ
                                    $(".product-list-wrap img.lazy").lazyload({
                                        appear: function() {
                                            $(this).attr('style', '').removeClass('lazy');
                                        }
                                    });

                                    if (_callback) {
                                        _callback.call();
                                    }
                                    this.loading = false;
                                    lg.filter.page = 1;

                                    if ($('body').hasClass('is-mobile')) {
                                        var page_limit = Math.ceil(parseInt($('.product-grid-header').find('.total span').text()) / 6);
                                        if (page_limit > 1) {
                                            $('.refind-your-search .more-item').show();
                                        } else {
                                            $('.refind-your-search .more-item').hide();
                                        }
                                    }

                                }, this),
                                error: $.proxy(function() {
                                    //console.log('ajax error');
                                    return false;
                                })
                            });
                        },
                        clear: function() {
                            me.filter.find('input[type="checkbox"], input[type="radio"]').each($.proxy(function(idx, el) {
                                $(el).removeAttr("checked").parent().not(".swatch").removeClass("red");
                                $(el).removeAttr("checked").parent().removeClass("active");
                                $(el).removeAttr('disabled').css('cursor', 'pointer').parent().removeClass('disable').css('cursor', 'pointer');
                            }, this));

                            this.applyFilter();
                        }
                    }
                    return rtobj;
                }
            })
            //sub category filter
        if ($('form.filter').is('form')) {
            setTimeout(function() {
                var formFilter = $('form.filter').productFilter();
                formFilter.init();
            }, 150);
        }

        // chosen
        if ($('.refind-your-search .sort select').is('select')) {
            $('.refind-your-search .sort select').chosen({
                disable_search_threshold: 10
            });
        }
        if ($('.refind-your-search .refind-apply-btn select').is('select')) {
            $('.refind-your-search .refind-apply-btn select').chosen({
                disable_search_threshold: 10
            });
        };

        if ($(".refind-your-search label.swatch").length > 0) {
            $(".refind-your-search label.swatch").each(function(i) {
                var checkbox = $(this).find("input[type='checkbox']");
                if (checkbox.length > 0 && checkbox.attr("title").indexOf("{color}")) {
                    var colorS = checkbox.data("colorname");
                    checkbox.attr('title', checkbox.attr('title').replace("{color}", colorS));
                };
            });
        };

        //add comma
        function formatCommas(numString) {
                var re = /,|\s+/g;
                numString = numString.replace(re, "");
                re = /(-?\d+)(\d{3})/;
                while (re.test(numString)) {
                    numString = numString.replace(re, "$1,$2");
                }
                return numString;
            }
            /*
			checkOptionDraw
			@param options String
			@param _val String
		*/

        function rtOptions(o, idx) {
            var d = null;
            for (var i = 0; i < o.length; i++) {
                if (i == idx) {
                    var a = $.map(o[i], function(k, v) {
                        d = [v, k];
                    });
                }
            };
            return d;
        }

        function remakeArr(o) {
            var idx = 0;
            var tmp = [];
            var rturnArr = [];
            var str;
            var end = optionsLen(o) - 1;

            $.each(o, function(key, value) {
                key = key + " ";
                //console.log(idx, end)
                if (idx == end) {
                    str = "'" + key + "'" + ":" + '"' + value + '"';
                } else {
                    str = "'" + key + "'" + ":" + '"' + value + '",';
                }
                if (key.toLowerCase().indexOf('min') != -1) {
                    rturnArr.push(str)
                }
                tmp.push(str)
                idx++;
            })

            //tmp = JSON.parse(JSON.stringify(tmp));
            $.each(tmp, function(idx) {
                if (tmp[idx].split(':')[0].toLowerCase().indexOf('min') == -1) {
                    rturnArr.push(tmp[idx])
                }
            })
            rturnArr = "{" + rturnArr.join('') + "}";
            rturnArr = JSON.parse(JSON.stringify(rturnArr));
            rturnArr = eval("(" + rturnArr + ")");
            return rturnArr;
        }

        function jsonObjCheck(o) {
            var k = 0;
            var i = 0;
            var remake = false;
            for (var key in o) {
                if (!remake && k == 0 && key != "min") {
                    o = remakeArr(o);
                    remake = true;
                }
                k++;
            }
            return o;
        }

        function optionsLen(o) {
            var i = 0;
            for (var key in o) {
                i++;
            }
            return i;
        }

        function findOptionIdx(arraytosearch, valuetosearch) {
            // console.log(o+", "+val)
            // var i= 0;

            // for (var key in o){
            // 	if(o[key] == val){
            // 		return i;
            // 	}
            // 	i++;
            // }
            var b = null;
            for (var i = 0; i < arraytosearch.length; i++) {
                $.each(arraytosearch[i], function(s, t) {
                    if (valuetosearch != 0 && valuetosearch == t) {
                        b = i;
                    }
                });
            }
            return b;
        }

        function findOptionKey(arraytosearch, valuetosearch) {
            var b = null;
            for (var i = 0; i < arraytosearch.length; i++) {
                $.each(arraytosearch[i], function(t, s) {
                    if (valuetosearch == t) {
                        b = s;
                    }
                });
            }

            return b;
        }

        function checkOptionDraw(options, _val, isSlider) {
                if ($('.refind-your-search').hasClass("discontinued")) return false; //theJ
                var target = $('.apply-filters');
                var closeTxt = '';
                if (target.data('title-close')) closeTxt = target.data('title-close');
                var tempHtml = '<span>{value} <a href="#" title="' + closeTxt + '"><i class="icon icon-close"></i></a></span>';
                var tempHtmlEtc = '<span class="etc">{value} <a href="#"><i class="icon icon-close"></i>' + closeTxt + '</a></span>';
                var _arr = [];
                options = $.trim(options);

                if (checkedOptions[options]) {
                    if (isSlider) {
                        if (_val.indexOf('Min') != -1 && _val.indexOf('Max') != -1) {
                            var deleteIdx = 0;
                            $.each(checkedOptions, function(key, value) {
                                if (options == key) {
                                    target.find('span').eq(deleteIdx).remove();
                                    return false;
                                }
                                deleteIdx++;
                            })
                            delete checkedOptions[options];
                        } else {
                            checkedOptions[options] = _val;
                        }
                    } else {
                        delete checkedOptions[options];
                    }
                    for (var key in checkedOptions) {
                        if (typeof checkedOptions[key] !== 'object') {
                            _arr.push(tempHtml.replace('{value}', key + ":" + checkedOptions[key]));
                        } else {
                            _arr.push(tempHtml.replace('{value}', key));
                        }
                    }
                    target.html(_arr.join(''))
                } else {
                    if (isSlider) {
                        if (_val.indexOf('Min') != -1 && _val.indexOf('Max') != -1) {} else {
                            checkedOptions[options] = _val;
                        }
                    } else {
                        checkedOptions[options] = _val;
                    }
                    for (var key in checkedOptions) {
                        if (typeof checkedOptions[key] !== 'object') {
                            _arr.push(tempHtml.replace('{value}', key + ":" + checkedOptions[key]));
                        } else {
                            _arr.push(tempHtml.replace('{value}', key));
                        }
                    }
                    target.html(_arr.join(''));
                }
                target.find('a').unbind();
                target.find('a').click(function(e) { //delete icon click 
                    var _optionVal = $.trim($(this).parents('span').text());
                    var etc = false;
                    var isSize = $(".screen .slide-bar").data("slidername");
                    var isPrice = $(".budget .slide-bar").data("slidername");
                    e.preventDefault();
                    if ($(this).parents('span:eq(0)').is('.etc')) {
                        etc = true;
                    }
                    $(this).parents('span').remove();

                    var formFilter = $('form.filter').productFilter();
                    if (_optionVal.indexOf(isSize) != -1 || _optionVal.indexOf(isPrice) != -1) {
                        //no description
                        if (_optionVal.indexOf(isPrice) != -1) {
                            var dragEl = $('.budget .slide-bar');
                            var priceTxt = $('.budget .first-unit');
                            var priceTxt2 = $('.budget .last-unit');
                            var inpPriceMin = $('input[name=priceMin]');
                            var inpPriceMax = $('input[name=priceMax]');
                            var options = dragbarVal.priceOption;
                            var len = optionsLen(options) - 1;
                            dragEl.slider("option", "values", [0, len]);
                            priceTxt.text(rtOptions(options, 0)[0]);
                            priceTxt2.text(rtOptions(options, len)[0]);
                            inpPriceMin.val(rtOptions(options, 0)[1]).removeClass('changed');
                            inpPriceMax.val(rtOptions(options, len)[1]).removeClass('changed');
                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));
                            var c = lg.filter.pageCategory();
                            for (var i = 0; i < copyArr.length; i++) {
                                if (copyArr[i].indexOf('priceMin') != -1 || copyArr[i].indexOf('priceMax') != -1) {
                                    lg.filter.remove(copyArr[i], c);
                                }
                            }
                        } else {
                            var dragEl = $('.screen .slide-bar');
                            var screenTxt = $('.screen .first-unit');
                            var screenTxt2 = $('.screen .last-unit');
                            var inpSizeMin = $('input[name=sizeMin]');
                            var inpSizeMax = $('input[name=sizeMax]');
                            var options = dragbarVal.selectOption;
                            var len = optionsLen(options) - 1;

                            dragEl.slider("option", "values", [0, len]);
                            screenTxt.text(rtOptions(options, 0)[0]);
                            screenTxt2.text(rtOptions(options, len)[0]);
                            inpSizeMin.val(rtOptions(options, 0)[1]).removeClass('changed');
                            inpSizeMax.val(rtOptions(options, len)[1]).removeClass('changed');

                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));
                            var c = lg.filter.pageCategory();
                            for (var i = 0; i < copyArr.length; i++) {
                                if (copyArr[i].indexOf('sizeMin') != -1 || copyArr[i].indexOf('sizeMax') != -1) {
                                    lg.filter.remove(copyArr[i], c);
                                }
                            }
                        }
                        delete checkedOptions[_optionVal.split(':')[0]];
                        formFilter.applyFilter();
                    } else {
                        if (etc) {
                            _optionVal = 'Show Just ' + _optionVal;
                        }
                        checkedOptions[_optionVal].get(0).checked = false;
                        checkedOptions[_optionVal].trigger('change');
                        if ($('body').hasClass('is-mobile')) {
                            formFilter.applyFilter();
                            var c = lg.filter.pageCategory();
                            lg.filter.remove($(checkedOptions[_optionVal]).attr('value'), c);
                        }
                        delete checkedOptions[_optionVal];
                    }
                    return false;
                })
            }
            /*
			refineDragbar
			@param options String
		*/

        function refineDragbar() {
            //if($('.refind-your-search .column1').length>0 && $('.refind-your-search .column1 input[type="checkbox"]').get(0)){
            if ($('.refind-your-search .column1').length > 0) {
                var thisForm = $('.refind-your-search .column1 input')[0];
                var viewAll = ($("html").data("compare-category"));
                var formEl = $('form.filter');

                //console.log(thisForm)
                thisForm = thisForm ? thisForm.form : $('.refind-your-search input')[0].form;

                //dragBar setting
                var screenType = 'selectOption';
                /* model */
                var dragtarget = $('.screen .slide-bar');
                var screenTxt = $('.screen .first-unit');
                var screenTxt2 = $('.screen .last-unit');
                var priceTxt = $('.budget .first-unit');
                var priceTxt2 = $('.budget .last-unit');
                var dagtarget2 = $('.budget .slide-bar');

                /* hidden input model */
                var inpSizeMin = $('input[name=sizeMin]');
                var inpSizeMax = $('input[name=sizeMax]');
                var inpPriceMin = $('input[name=priceMin]');
                var inpPriceMax = $('input[name=priceMax]');

                /* screen */
                var formFilter = $('form.filter').productFilter();
                var isDeskTop = !$('body').hasClass('is-mobile');
                if (!dragtarget[0] && !dagtarget2[0] && !$('.refind-your-search .column1 input')[0]) {
                    return false;
                }
                //dragbarVal[screenType] = jsonObjCheck(dragbarVal[screenType]);
                var options = dragbarVal[screenType];
                if (JSON.stringify(options).length > 3) {
                    var maxScreenVal = findOptionIdx(options, inpSizeMax.val());
                    if (!maxScreenVal) {
                        maxScreenVal = optionsLen(options) - 1;
                    }
                    var minValue = findOptionIdx(options, inpSizeMin.val());
                    if (!minValue) minValue = 0;
                    dragtarget.slider({
                        range: true,
                        min: 0,
                        max: optionsLen(options) - 1,
                        step: 1,
                        values: [minValue, maxScreenVal],
                        slide: function(event, ui) {
                            var sceenNum = ui.value;
                            var screenInch = rtOptions(options, sceenNum);

                            if ($(ui.handle).index() == '3') {
                                screenTxt.text(screenInch[0]);
                            } else {
                                screenTxt2.text(screenInch[0]);
                            }
                            if (isDeskTop) {
                                var n = $(this).data("slidername");
                                checkOptionDraw(n, $.trim(screenTxt.text()) + "-" + $.trim(screenTxt2.text()), true);
                            }
                        },
                        stop: function(event, ui) {
                            var sceenNum = checkSliderValue($(this), ui);
                            if (ui.value != sceenNum) {
                                ui.value = sceenNum;
                            }
                            var screenInch = rtOptions(options, sceenNum);
                            var c = lg.filter.pageCategory();
                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));


                            if ($(ui.handle).index() == '3') {
                                for (var i = 0; i < copyArr.length; i++) {
                                    if (copyArr[i].indexOf('sizeMin') != -1) {
                                        lg.filter.remove(copyArr[i], c);
                                    }
                                }
                                if (sceenNum != 0) {
                                    lg.filter.add(('sizeMin:' + screenInch[1]), c);
                                }
                                screenTxt.text(screenInch[0]);
                                inpSizeMin.val(screenInch[1]).addClass('changed');
                            } else {
                                for (var i = 0; i < copyArr.length; i++) {
                                    if (copyArr[i].indexOf('sizeMax') != -1) {
                                        lg.filter.remove(copyArr[i], c);
                                    }
                                }
                                if (sceenNum != optionsLen(priceOption) - 1) {
                                    lg.filter.add(('sizeMax:' + screenInch[1]), c);
                                }
                                screenTxt2.text(screenInch[0]);
                                inpSizeMax.val(screenInch[1]).addClass('changed');
                            }
                            if (isDeskTop) {
                                formFilter.applyFilter();
                            }
                        }
                    });
                    if (!findOptionIdx(options, inpSizeMin.val())) screenTxt.text(rtOptions(options, 0)[0]);
                    else screenTxt.text(rtOptions(options, findOptionIdx(options, inpSizeMin.val()))[0]);
                    screenTxt2.text(rtOptions(options, maxScreenVal)[0]);
                }

                //dragbarVal.priceOption = jsonObjCheck(dragbarVal.priceOption);
                var priceOption = dragbarVal.priceOption;
                if (JSON.stringify(priceOption).length > 3) {
                    var maxPriceVal = findOptionIdx(priceOption, inpPriceMax.val());
                    if (!maxPriceVal) {
                        maxPriceVal = optionsLen(priceOption) - 1;
                    }
                    var minValue = findOptionIdx(priceOption, inpPriceMin.val());
                    if (!minValue) minValue = 0;
                    dagtarget2.slider({
                        range: true,
                        min: 0,
                        max: optionsLen(priceOption) - 1,
                        step: 1,
                        values: [minValue, maxPriceVal],
                        slide: function(event, ui) {
                            var sceenNum = ui.value;
                            var _price = rtOptions(priceOption, sceenNum);
                            if ($(ui.handle).index() == '3') {
                                priceTxt.text(_price[0]);
                            } else {
                                priceTxt2.text(_price[0]);
                            }
                            if (isDeskTop) {
                                var n = $(this).data("slidername");
                                checkOptionDraw(n, $.trim(priceTxt.text()) + "-" + $.trim(priceTxt2.text()), true);
                            }
                        },
                        stop: function(event, ui) {
                            var sceenNum = checkSliderValue($(this), ui);
                            if (ui.value != sceenNum) {
                                ui.value = sceenNum;
                            }
                            var _price = rtOptions(priceOption, sceenNum);
                            var c = lg.filter.pageCategory();
                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));

                            if ($(ui.handle).index() == '3') {
                                for (var i = 0; i < copyArr.length; i++) {
                                    if (copyArr[i].indexOf('priceMin') != -1) {
                                        lg.filter.remove(copyArr[i], c);
                                    }
                                }
                                if (sceenNum != 0) {
                                    lg.filter.add(('priceMin:' + _price[1]), c);
                                }
                                priceTxt.text(_price[0]);
                                inpPriceMin.val(_price[1]).addClass('changed');
                            } else {
                                for (var i = 0; i < copyArr.length; i++) {
                                    if (copyArr[i].indexOf('priceMax') != -1) {
                                        lg.filter.remove(copyArr[i], c);
                                    }
                                }
                                if (sceenNum != optionsLen(priceOption) - 1) {
                                    lg.filter.add(('priceMax:' + _price[1]), c);
                                }
                                priceTxt2.text(_price[0]);
                                inpPriceMax.val(_price[1]).addClass('changed');
                            }
                            if (isDeskTop) {
                                formFilter.applyFilter();
                            }
                        }
                    });
                    if (!findOptionIdx(priceOption, inpPriceMin.val())) priceTxt.text(rtOptions(priceOption, 0)[0]);
                    else priceTxt.text(rtOptions(priceOption, findOptionIdx(priceOption, inpPriceMin.val()))[0]);
                    priceTxt2.text(rtOptions(priceOption, maxPriceVal)[0]);
                }
            }
        }

        //refine fixed 
        function refineFixed() {
                var hei = false;
                $('.refind-apply-btn .refine').unbind('click').click(function() { // 2015-06-10 change class
                    $('.sticky-wrap').removeClass('hide');
                    $('.column1').removeClass('hide');
                    $('.column2').addClass('hide');

                    var holder = $('.compare-view-item-holder');
                    var target = $('.sticky-wrap');

                    if (!hei) {
                        hei = $('section.refind-your-search').position().top;

                        $(window).scroll(function() {
                            if (!$('.sticky-wrap').is('.hide')) {
                                if ($(window).scrollTop() > hei) {
                                    holder.addClass('on');
                                    target.addClass('sticky');
                                } else {
                                    holder.removeClass('on');
                                    target.removeClass('sticky');
                                }
                            }
                        });
                    }

                    return false;
                })

                //active
                $('.refind-apply-answer-btn a:eq(0)').click(function() {
                        var formFilter = $('form.filter').productFilter();
                        var c = lg.filter.pageCategory();

                        checkedOptions = {};
                        $('.apply-filters').html('');

                        $('fieldset.form').find('input, select').each($.proxy(function(idx, el) {
                            var chkT;
                            var item = $(el);
                            var itemAttr = "";
                            var cookieVal = "";
                            var d = item.val();

                            if (item.is('input[type=checkbox]')) {
                                if (item.prop("checked")) {
                                    itemAttr = "checked";

                                    var colorW, colorS;
                                    (item.parent().prevAll('legend:first').find('a').length > 0) ? colorW = document.getElementById(item.parent().prevAll('legend:first').attr('id')).childNodes[0].nodeValue: colorW = $.trim(item.parent().prevAll('legend:first').text());

                                    if (item.parent().hasClass('swatch')) {
                                        colorS = item.data("colorname");
                                    } else {
                                        colorS = item.next('span').text();
                                    }

                                    // chkT = 'Select'+ ' ' + colorS; /* 20140519 choyearang modify */
                                    // item.attr('title',chkT);									
                                    checkOptionDraw(colorS, item);
                                    lg.filter.add((d), c);
                                }
                            }

                            //$.cookie(item.attr('value'), cookieVal, 1);
                        }, this));

                        $('input[type=hidden]').each(function() {
                            var item = $(this);

                            if (item.is('.changed')) {
                                if (item.attr('name').indexOf('size') != -1) { //size

                                    var screenTxt = $('.screen .first-unit');
                                    var screenTxt2 = $('.screen .last-unit');
                                    var n = $('.screen .slide-bar').data("slidername");
                                    checkOptionDraw(n, $.trim(screenTxt.text()) + "-" + $.trim(screenTxt2.text()), true);
                                } else { //price
                                    var priceTxt = $('.budget .first-unit');
                                    var priceTxt2 = $('.budget .last-unit');
                                    var n = $('.budget .slide-bar').data("slidername");
                                    checkOptionDraw(n, $.trim(priceTxt.text()) + "-" + $.trim(priceTxt2.text()), true);
                                }
                            }
                        });

                        formFilter.applyFilter();

                        $('.sticky-wrap').addClass('hide');
                        $('.column1').addClass('hide');
                        $('.column2').removeClass('hide');

                        return false;
                    })
                    //cancel
                $('.refind-apply-answer-btn a:eq(1)').click(function() {
                    $('.sticky-wrap').addClass('hide');
                    $('.column1').addClass('hide');
                    $('.column2').removeClass('hide');
                    $('input[type=hidden]').removeClass('changed');
                    if ($(".slide-bar").length > 0) {
                        var dragEl = $('.budget .slide-bar');
                        var priceTxt = $('.budget .first-unit');
                        var priceTxt2 = $('.budget .last-unit');
                        var inpPriceMin = $('input[name=priceMin]');
                        var inpPriceMax = $('input[name=priceMax]');
                        var options = dragbarVal.priceOption;
                        var len = optionsLen(options) - 1;
                        dragEl.slider("option", "values", [0, len]);
                        priceTxt.text(rtOptions(options, 0)[0]);
                        priceTxt2.text(rtOptions(options, len)[0]);
                        inpPriceMin.val(rtOptions(options, 0)[1]).removeClass('changed');
                        inpPriceMax.val(rtOptions(options, len)[1]).removeClass('changed');

                        var dragEl = $('.screen .slide-bar');
                        var screenTxt = $('.screen .first-unit');
                        var screenTxt2 = $('.screen .last-unit');
                        var inpSizeMin = $('input[name=sizeMin]');
                        var inpSizeMax = $('input[name=sizeMax]');
                        var options = dragbarVal.selectOption;
                        var len = optionsLen(options) - 1;

                        dragEl.slider("option", "values", [0, len]);
                        screenTxt.text(rtOptions(options, 0)[0]);
                        screenTxt2.text(rtOptions(options, len)[0]);
                        inpSizeMin.val(rtOptions(options, 0)[1]).removeClass('changed');
                        inpSizeMax.val(rtOptions(options, len)[1]).removeClass('changed');
                    }

                    return false;
                })
            }
            // 2015-05-18
            /* Compare Slide */
            // 2015-06-03
        function compareSlide() {
                var _wrap = $('.compare-view-item .item-view');
                var slideTarget = _wrap.find('.item-list');
                var targetSub = $('.compare-item-info .info-cont-view');
                var viewport = _wrap.find('.view-cont');
                var prevBtn = _wrap.find('.view-control .btn-prev');
                var nextBtn = _wrap.find('.view-control .btn-next');
                var distance = slideTarget.find('> li').eq(0).outerWidth();
                var ulWidth = slideTarget.find('> li').length * distance;
                var liLength = slideTarget.find('> li').length;
                var maxPos = ulWidth - viewport.width();
                var liIndex = 0;
                var speed = 400;
                var resizeSlide = function() {
                    var viewportWidth = viewport.width(),
                        contTitel = $('.compare-item-info .info-list'),
                        contWrap = $('.compare-item-info .info-list .info-cont'),
                        nowPos = parseInt(slideTarget.css('margin-left')),
                        ulWidth = slideTarget.find('> li').length * distance,
                        viewportCom = 620;

                    liLength = slideTarget.find('> li').length;
                    /*
				contTitel.each(function(index){
					var contWrapH = contTitel.eq(index).height();
					contWrap.eq(index).css('min-height', contWrapH + 'px');
				});
				*/
                    if (_wrap.hasClass('view-lock')) {
                        viewportCom = 615;
                    }
                    if (viewportWidth > 401) {
                        if (viewportWidth < viewportCom) {
                            if (liLength >= 4) {
                                var marginL;
                                marginL = parseInt(-(ulWidth - (distance * 3)));
                            } else {
                                var marginL = 0;
                                prevBtn.css('display', 'none');
                                nextBtn.css('display', 'none');
                            }

                            if (nowPos < marginL) {
                                slideTarget.stop().animate({
                                    'margin-left': marginL
                                }, speed)
                                targetSub.stop().animate({
                                    'margin-left': marginL
                                }, speed)
                            } else if (nowPos == marginL) {
                                nextBtn.css('display', 'none');
                            } else {
                                if (liLength < 4) {
                                    nextBtn.css('display', 'none');
                                } else {
                                    nextBtn.css('display', '');
                                }
                            }
                        } else {
                            if (liLength >= 5) {
                                var marginL;
                                marginL = parseInt(-(ulWidth - (distance * 4)));
                            } else {
                                var marginL = 0;
                                prevBtn.css('display', 'none');
                                nextBtn.css('display', 'none');
                            }

                            if (nowPos < marginL) {
                                slideTarget.stop().animate({
                                    'margin-left': marginL
                                }, speed)
                                targetSub.stop().animate({
                                    'margin-left': marginL
                                }, speed)
                            } else if (nowPos == marginL) {
                                nextBtn.css('display', 'none');
                            } else {
                                if (liLength < 5) {
                                    nextBtn.css('display', 'none');
                                } else {
                                    nextBtn.css('display', '');
                                }
                            }
                        }
                    } else {
                        var marginL;
                        marginL = parseInt(-(ulWidth - (distance * 2)));
                        if (liLength < 2) {
                            var marginL = 0;
                            prevBtn.css('display', 'none');
                            nextBtn.css('display', 'none');
                        }
                        if (nowPos < marginL) {
                            slideTarget.stop().animate({
                                'margin-left': marginL
                            }, speed)
                            targetSub.stop().animate({
                                'margin-left': marginL
                            }, speed)
                        } else if (nowPos == marginL) {
                            nextBtn.css('display', 'none');
                        }
                        if (nowPos > marginL) {
                            if (liLength < 3) {
                                nextBtn.css('display', 'none');
                                prevBtn.css('display', 'none');
                            } else {
                                nextBtn.css('display', '');
                                if (nowPos < 0) {
                                    prevBtn.css('display', '');
                                }
                            }
                        } else {
                            if (liLength < 3) {
                                nextBtn.css('display', 'none');
                                prevBtn.css('display', 'none');
                            }
                        }
                    }
                }

                //resizeSlide();

                //length view 
                //length view 
                var t = $('.compare-count span.check-singular').data("plural");
                if (liLength <= 1) {
                    t = $('.compare-count span.check-singular').data("singular");
                }

                if ($('body').hasClass('is-mobile')) {
                    $('.compare-count strong span.count').text(liLength); // 2015-06-01 
                    $('.compare-count span.check-singular').text(t);
                } else {
                    $('.compare-count strong span.count').text(liLength); // 2015-06-01 
                    $('.compare-count span.check-singular').text(t);
                }

                //slideTarget.css('width', ulWidth + 'px');
                function setTabfocus() {
                    var nowPos = parseInt(slideTarget.css('margin-left'));
                    var viewportWidth = viewport.width(),
                        viewportStart = Math.abs(Math.ceil(nowPos / distance)),
                        viewportRange = Math.ceil(viewportWidth / distance),
                        viewportEnd = viewportStart + viewportRange;
                    slideTarget.find("li.item").removeClass("show-item").find("a").attr("tabindex", -1);
                    slideTarget.find("li.item").each(function(i) {
                        if (i >= viewportStart && i < viewportEnd) {
                            $(this).addClass("show-item").find("a").removeAttr("tabindex");
                        }
                    });


                }
                prevBtn.click(function() {
                    var nowPos = parseInt(slideTarget.css('margin-left'));
                    if (nowPos != 0 && !slideTarget.is(':animated')) {
                        slideTarget.stop().animate({
                            'margin-left': nowPos + distance
                        }, speed, function() {
                            var lengthViewport = Math.round(parseInt(viewport.width()) / distance); //liLength
                            // alert(lengthViewport +"/"+  (slideTarget.find('> li').length))
                            if (nextBtn.css('display') == 'none' && lengthViewport < slideTarget.find('> li').length) {
                                nextBtn.css('display', '');
                            }
                            if (nowPos >= -distance) {
                                prevBtn.css('display', 'none');
                            }
                            setTabfocus();
                        })
                        targetSub.stop().animate({
                            'margin-left': nowPos + distance
                        }, speed);


                    };
                    return false;
                })

                nextBtn.click(function() {
                    viewport = _wrap.find('.view-cont');
                    liLength = slideTarget.find('> li').length;
                    ulWidth = slideTarget.find('> li').length * distance;

                    var nowPos = parseInt(slideTarget.css('margin-left')),
                        maxPos = -(ulWidth - viewport.width() - distance + liLength);

                    if (_wrap.hasClass('view-lock')) {
                        maxPos = -(ulWidth - viewport.width() - (distance * 2) + liLength);
                    }
                    if (nowPos >= maxPos && !slideTarget.is(':animated')) {
                        slideTarget.stop().animate({
                            'margin-left': nowPos - distance
                        }, speed, function() {
                            if (prevBtn.css('display') == 'none') {
                                prevBtn.css('display', '');
                            }
                            if (nowPos <= maxPos + distance) {
                                nextBtn.css('display', 'none');
                            }
                            setTabfocus();
                        })
                        targetSub.stop().animate({
                            'margin-left': nowPos - distance
                        }, speed)
                    }
                    return false;
                })

                $(window).resize(function() {
                    //resizeSlide();
                    compareNextBtn();
                    setTabfocus();
                });
                // //2015-06-03
                //remove event
                slideTarget.find('.item-uitls li:last-child a').click(function() { // 2015-05-17
                    var pid = $(this).data('product-id'); //theJ
                    var target = $(this).parents('.item');
                    var _idx = target.index();
                    var item = $(this);

                    //  delete product in list - theJ
                    $('.add-to-compare .column2 .response ul.product-lists li').each(function() {
                        var mypid;
                        var my = $(this).find('.copy-area .details .cta-button a');
                        if (my.hasClass('onItem') & my.hasClass('remove-btn')) {
                            mypid = my.data('product-id');
                            if (pid == mypid) {
                                my.parent().find('a.add-btn').css('display', 'inline-block');
                                my.parent().find('a.remove-btn').css('display', 'none');
                            }
                        }
                    });

                    // focus setting
                    var next = target.next()[0] ? target.next()[0] : target.prev()[0];
                    if (next) {
                        $(next).find('.item-uitls li:last-child a').focus();
                    } else {
                        $('.compare-view-left .change-btn').focus();
                    }

                    liLength = slideTarget.find('> li').length;
                    /*if(liLength < 3){
					slideTarget.find('.item-uitls').hide();
					return false;
				}*/
                    target.addClass('hide');
                    $('.info-cont-view').each(function() {
                        $(this).find('ul').eq(_idx).addClass('hide')
                    })
                    target.remove();
                    $('.info-cont-view').find('ul.hide').remove();

                    if (target.is('.item-lock')) {
                        $('.compare-view-item .compare-item .item-view').removeClass('view-lock');
                        $('.compare-item-info .info-cont').removeClass('cont-lock');
                    }

                    var e = lg.compare.pageCategory();

                    var d = item.data("product-id");

                    lg.compare.remove((d), e);
                    //length view
                    var t = $('.compare-count span.check-singular').data("plural");
                    if (liLength - 1 <= 1) {
                        t = $('.compare-count span.check-singular').data("singular");
                    }

                    if ($('body').hasClass('is-mobile')) {
                        $('.compare-count strong span.count').text(liLength - 1);
                        $('.compare-count span.check-singular').text(t);
                    } else {
                        $('.compare-count strong span.count').text(liLength - 1);
                        $('.compare-count span.check-singular').text(t);
                    }

                    //resizeSlide(); // 2015-06-03

                    //if(liLength == 0){
                    if (liLength <= 1) {
                        $('.compare-item-info').remove();
                        $(window).unbind('scroll');
                    }
                    $('.accordion-control .choice-control dd:not(.selected)').eq(0).trigger('click');

                    compareNextBtn();
                    return false;
                })

                $('.item-uitls').find('li:first-child a').each(function() {
                    for (var k = 0; k < lg.compareLOCK.get(lg.compareCategory).length; k++) {
                        var modelID = lg.compareLOCK.get(lg.compareCategory)[k];
                        if ($(this).data('product-id') == modelID) {
                            compareLock($(this).parents('li.item').index());
                        }
                    }
                });
                setTabfocus();
            }
            // //2015-05-18
            // 2015-05-22
        function compareNextBtn() {
                var _wrap = $('.compare-view-item .item-view');
                var slideTarget = _wrap.find('.item-list');
                var slideTarget2 = $('.compare-item-info .info-cont .info-cont-view');
                var viewport = _wrap.find('.view-cont');
                var liLength = slideTarget.find('> li').length;
                var prevBtn = _wrap.find('.view-control .btn-prev');
                var nextBtn = _wrap.find('.view-control .btn-next');
                var viewportWidth = viewport.width();
                var wLeft = parseInt(parseInt(slideTarget.css('margin-left')) * -1);
                var distance = parseInt(slideTarget.find('> li').eq(0).outerWidth());
                var cLeft = Math.round(wLeft / distance);
                var c = "none";
                var n = Math.round(parseInt(viewport.width()) / distance);
                /*
			var n = 5;
			if (viewportWidth > 615) n = 5;
			else if(viewportWidth <= 615 && viewportWidth > 401) n = 4;
			else n = 3;
			*/
                if ($('body').hasClass('is-mobile')) {
                    c = (liLength > n) == true ? "block" : "none";
                } else {
                    c = (liLength > n) == true ? "block" : "none";
                }
                var maxLeft = (liLength - n > 0) ? liLength - n : 0;
                if (_wrap.hasClass('view-lock')) {
                    maxLeft = maxLeft - 1;
                    if (maxLeft < 0) maxLeft = 0;
                }
                // console.log(cLeft +" "+ maxLeft)
                if (cLeft > maxLeft) {
                    if (cLeft <= 1) {
                        prevBtn.css({
                            display: 'none'
                        });
                    }
                    slideTarget.stop().animate({
                        'margin-left': ((wLeft - distance) * -1)
                    }, 400);
                    slideTarget2.stop().animate({
                        'margin-left': ((wLeft - distance) * -1)
                    }, 400);
                    c = 'none';
                }
                nextBtn.css({
                    display: c
                });
                // if one, remove unlock
                if (liLength < 2) {
                    $('.compare-view-item .compare-item .view-cont .item-list .item.item-lock .item-uitls li').eq(0).find('a').trigger('click');
                }
            }
            // //2015-05-22
            // 2015-05-17
            //Compare lock
        function compareLock(thisIndex) {

                var _wrap = $('.compare-view-item .compare-item .item-view'),
                    list = _wrap.find('.item'),
                    contWrap = $('.compare-item-info .info-list .info-cont'),
                    contList = contWrap.find('.info-cont-list'),
                    contTitel = $('.compare-item-info .info-list');
                var lock = list.parent().data('change-text').split('|')[0];
                var unlock = list.parent().data('change-text').split('|')[1];

                _wrap.addClass('view-lock');
                contWrap.addClass('cont-lock');
                /* 2015-06-03 */
                if (list.length == 1) {
                    _wrap.addClass('view-lock-one');
                    contWrap.addClass('cont-lock-one');
                    contTitel.each(function(index) {
                        var contWrapH = contTitel.eq(index).height();
                        contWrap.eq(index).css('min-height', contWrapH + 'px');
                    });
                }
                /* //2015-06-03 */
                list.find('.item-uitls > li').removeClass('hide');
                list.removeClass('item-lock').find('.item-uitls > li:first-child a').text(lock);
                contList.removeClass('info-cont-lock');
                list.eq(thisIndex).addClass('item-lock').find('.item-uitls > li:first-child a').text(unlock);
                //list.eq(thisIndex).find('.item-uitls > li:last-child').addClass('hide');
                contWrap.each(function() {
                    $(this).find('.info-cont-list').eq(thisIndex).addClass('info-cont-lock');
                });
            }
            //Compare unlock
        function compareUnLock() {
                var _wrap = $('.compare-view-item .compare-item .item-view'),
                    list = _wrap.find('.item'),
                    contWrap = $('.compare-item-info .info-list .info-cont'),
                    contList = contWrap.find('.info-cont-list');
                var lock = list.parent().data('change-text').split('|')[0];

                _wrap.removeClass('view-lock');
                contWrap.removeClass('cont-lock');
                //list.find('.item-uitls > li').removeClass('hide');
                list.removeClass('item-lock').find('.item-uitls > li:first-child a').text(lock);
                contList.removeClass('info-cont-lock');
            }
            // //2015-05-17

        /* Technical Specifications toggle action */
        function technicalExpand() {
            var allView = $('.compare-item-info .all-view');
            var allClose = $('.compare-item-info .all-close');
            var anker = $('.compare-item-info .info-list-title a');
            var inCont = $('.compare-item-info .info-technical');
            var fontIcon = inCont.find('.info-list-title i.icon');

            allView.unbind();
            allClose.unbind();
            anker.unbind();

            allView.click(function() {
                $(this).hide();
                allClose.show().focus();
                anker.addClass('hidden-title');
                anker.removeClass('view-title');
                inCont.removeClass('techmical-hidden');
                fontIcon.removeClass('icon-tab-plus');
                fontIcon.addClass('icon-tab-minus');
                if ($('.refind-your-search').hasClass('hide')) {
                    $("html, body").animate({
                        scrollTop: 290 + parseInt($('.info-summary').height())
                    }, 500);
                }
                return false;
            })
            allClose.click(function() {
                $(this).hide();
                allView.show().focus();
                anker.addClass('view-title');
                anker.removeClass('hidden-title');
                inCont.addClass('techmical-hidden');
                fontIcon.removeClass('icon-tab-minus');
                fontIcon.addClass('icon-tab-plus');
                if ($('.refind-your-search').hasClass('hide')) {
                    $("html, body").animate({
                        scrollTop: 290 + parseInt($('.info-summary').height())
                    }, 500);
                }

                return false;
            })
            anker.click(function() {
                    var hideStat = $('.compare-item-info .info-list-title .view-title').length;
                    if (hideStat == anker.length - 1) {
                        if (allClose.is(':visible')) {
                            allClose.hide();
                            allView.show();
                        }

                    } else {
                        if (allView.is(':visible')) {
                            allClose.show();
                            allView.hide();
                        }
                    }
                    $(this).toggleClass('hidden-title');
                    $(this).toggleClass('view-title');

                    $(this).parents('.info-technical').toggleClass('techmical-hidden');

                    $(this).find('i.icon').toggleClass('icon-tab-plus');
                    $(this).find('i.icon').toggleClass('icon-tab-minus');
                    return false;
                })
                //allView.trigger('click');//2015-05-20
        }

        function specsModeChange() {
            if ($('body').hasClass('is-mobile')) {
                var HeitSync = function() {
                    $('.info-summary .info-title').each(function() {
                        var titleUL = $(this);
                        var len = titleUL.find('li').length;
                        var maxHeight = 0;
                        var liGroup = [];
                        for (var i = 0; i < len; i++) {
                            maxHeight = 0;
                            liGroup.push(titleUL.find('li').eq(i))
                            maxHeight = titleUL.find('li').eq(i).innerHeight();
                            titleUL.next().find('.info-cont-list').each(function(idx) {
                                var descUL = $(this);
                                var hei = descUL.find('li').eq(i).innerHeight()
                                liGroup.push(descUL.find('li').eq(i))
                                if (maxHeight < hei) {
                                    maxHeight = hei;
                                }
                            })
                            $.each(liGroup, function(idx) {
                                if (maxHeight < 56) {
                                    maxHeight = 56;
                                }
                                $(this).css('height', maxHeight + 'px');
                            })
                            liGroup = [];
                        }
                    })
                    $('.info-technical .info-title').each(function() {
                        var titleUL = $(this);
                        var len = titleUL.find('li').length;
                        var maxHeight = 0;
                        var liGroup = [];
                        for (var i = 0; i < len; i++) {
                            maxHeight = 0;
                            titleUL.next().find('.info-cont-list').each(function(idx) {
                                var descUL = $(this);
                                var hei = descUL.find('li').eq(i).innerHeight()
                                liGroup.push(descUL.find('li').eq(i))
                                if (maxHeight < hei) {
                                    maxHeight = hei;
                                }
                            })
                            $.each(liGroup, function(idx) {
                                if (maxHeight < 56) {
                                    maxHeight = 56;
                                }
                                $(this).css('height', maxHeight + 'px');
                            })
                            titleUL.find('li').eq(i).css('margin-bottom', maxHeight - 20);
                            liGroup = [];
                        }
                    })
                }
                HeitSync();
                var selectionAnker = $('.accordion-control .choice-control dd:not(.selected)').eq(2);
                var checkLen = $('.info-technical input[type=checkbox]:checked').length;

                var disableLink = function() {

                    if (!checkLen) {
                        selectionAnker.addClass('disabled');
                    } else {
                        selectionAnker.removeClass('disabled');
                    }
                }
                disableLink();
                $('.accordion-control .choice-control dd:not(.selected)').click(function() {
                    if (!checkLen && $(this).index() == 4) {
                        return false;
                    }
                    $('.accordion-control .choice-control dd.selected a').text($(this).text());
                    $('.accordion-control .choice-control dd.selected').removeClass('clicked').siblings('dd').addClass('hide');

                    switch ($(this).index()) {
                        case 2:
                            $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-all');
                            $(this).parents('.compare-item-info').find('.diff').removeClass('diff');
                            $('.compare-item-info .info-technical').removeClass('hide');
                            break;
                        case 3:
                            $('.info-cont-view').each(function() {
                                var wrap = $(this);
                                $(this).find('ul:eq(0) li').each(function(_idx) {
                                    if ($(this).find('img').length) {
                                        var oldTxt = $(this).find('img').attr('alt');
                                    } else {
                                        var oldTxt = $(this).text();
                                    }
                                    wrap.find('ul').each(function() {
                                        var _ul = $(this);
                                        if (_ul.find('li').eq(_idx).find('img').length) {
                                            var _text = _ul.find('li').eq(_idx).find('img').attr('alt');
                                        } else {
                                            var _text = _ul.find('li').eq(_idx).text();
                                        }

                                        if (oldTxt != _text) {
                                            wrap.find('ul:eq(0)').find('li').eq(_idx).addClass('diff');
                                        }
                                        oldTxt = _text;
                                    })
                                })
                                wrap.find('ul:eq(0) li.diff').each(function() {
                                    var delIdx = $(this).index();
                                    wrap.find('ul').not(':eq(0)').each(function() {
                                        $(this).find('li').eq(delIdx).addClass('diff')
                                    })
                                })
                            })

                            $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-differences');
                            $('.compare-item-info .info-technical').removeClass('hide');
                            break;
                        case 4:
                            $(this).parents('.compare-item-info').find('.diff').removeClass('diff');
                            $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-selection');
                            $('.compare-item-info .info-technical').each(function() {
                                if (!$(this).find('ul.info-title li.on').length) {
                                    $(this).addClass('hide');
                                }
                            });
                            $("html, body").animate({
                                scrollTop: 370 + parseInt($('.info-summary').height())
                            }, 500);
                            return false;
                            break;
                    }
                    return false;
                })
                $('.accordion-control .choice-control dd.selected').click(function() {
                        if ($(this).is('.clicked')) {
                            $(this).removeClass('clicked').siblings('dd').addClass('hide');
                        } else {
                            $(this).addClass('clicked').siblings('dd').removeClass('hide');
                        }
                        return false;
                    })
                    //selection
                $('.info-technical input[type=checkbox]').click(function() {
                    var target = $(this).parents('li:eq(0)');
                    var idx = target.index();
                    if (target.is('.on')) {
                        target.removeClass('on');
                        checkLen--;
                        $(this).parents('.info-title').next().find('ul').each(function() {
                            $(this).find('li').eq(idx).removeClass('on');
                        })
                    } else {
                        target.addClass('on');
                        checkLen++;
                        $(this).parents('.info-title').next().find('ul').each(function() {
                            $(this).find('li').eq(idx).addClass('on');
                        })
                    }
                    if (!$(this).parents('.info-technical').find('ul.info-title li.on').length) {
                        if ($('.compare-item-info').is('.mode-selection')) {
                            $(this).parents('.info-technical').addClass('hide');
                        }
                    } else {
                        if ($('.compare-item-info').is('.mode-selection')) {
                            $(this).parents('.info-technical').removeClass('hide');
                        }
                    }
                    if (checkLen) {
                        selectionAnker.removeClass('disabled');
                    } else {
                        selectionAnker.addClass('disabled');
                    }
                })
            } else {
                var HeitSync = function() {
                    $('.info-title').each(function() {
                        var titleUL = $(this);
                        var len = titleUL.find('li').length;
                        var maxHeight = 0;
                        var liGroup = [];
                        for (var i = 0; i < len; i++) {
                            maxHeight = 0;
                            liGroup.push(titleUL.find('li').eq(i))
                            maxHeight = titleUL.find('li').eq(i).innerHeight();
                            titleUL.next().find('.info-cont-list').each(function(idx) {
                                var descUL = $(this);
                                var hei = descUL.find('li').eq(i).innerHeight()
                                liGroup.push(descUL.find('li').eq(i))
                                if (maxHeight < hei) {
                                    maxHeight = hei;
                                }
                            })

                            $.each(liGroup, function(idx) {
                                if (maxHeight < 56) {
                                    maxHeight = 56;
                                }

                                $(this).css('height', maxHeight + 'px');
                            })
                            liGroup = [];
                        }
                    })
                }

                HeitSync();
                var selectionAnker = $('.accordion-control .choice-control dd').eq(2);
                var checkLen = $('.info-technical input[type=checkbox]:checked').length;
                var disableLink = function() {
                    if (!checkLen) {
                        selectionAnker.addClass('disabled');
                    } else {
                        selectionAnker.removeClass('disabled');
                    }
                }
                disableLink();
                $('.accordion-control .choice-control dd').click(function() {
                        if (!checkLen && $(this).index() == 3) {
                            return false;
                        }
                        $(this).addClass('clicked').siblings('dd').removeClass('clicked');

                        switch ($(this).index()) {
                            case 1:
                                $(this).parents('.compare-item-info').find('.diff').removeClass('diff');
                                $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-all');
                                $('.compare-item-info .info-technical').removeClass('hide');
                                break;
                            case 2:
                                $('.info-cont-view').each(function() {
                                    var wrap = $(this);
                                    $(this).find('ul:eq(0) li').each(function(_idx) {
                                        if ($(this).find('img').length) {
                                            var oldTxt = $(this).find('img').attr('alt');
                                        } else {
                                            var oldTxt = $(this).text();
                                        }
                                        wrap.find('ul').each(function() {
                                            var _ul = $(this);
                                            if (_ul.find('li').eq(_idx).find('img').length) {
                                                var _text = _ul.find('li').eq(_idx).find('img').attr('alt');
                                            } else {
                                                var _text = _ul.find('li').eq(_idx).text();
                                            }

                                            if (oldTxt != _text) {
                                                wrap.find('ul:eq(0)').find('li').eq(_idx).addClass('diff');
                                            }
                                            oldTxt = _text;
                                        })
                                    })
                                    wrap.find('ul:eq(0) li.diff').each(function() {
                                        var delIdx = $(this).index();
                                        wrap.find('ul').not(':eq(0)').each(function() {
                                            $(this).find('li').eq(delIdx).addClass('diff')
                                        })
                                    })
                                })

                                $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-differences');
                                $('.compare-item-info .info-technical').removeClass('hide');
                                break;
                            case 3:
                                $(this).parents('.compare-item-info').find('.diff').removeClass('diff');
                                $(this).parents('.compare-item-info').removeClass().addClass('compare-item-info mode-selection');
                                $('.compare-item-info .info-technical').each(function() {
                                    if (!$(this).find('ul.info-title li.on').length) {
                                        $(this).addClass('hide')
                                    }
                                });
                                if ($('.compare .add-to-compare .refind-your-search').hasClass('hide')) $("html, body").animate({
                                    scrollTop: 290 + parseInt($('.info-summary').height())
                                }, 500);
                                return false;
                                break;
                        }
                        return false;
                    })
                    //selection
                $('.info-technical input[type=checkbox]').click(function() {
                    var target = $(this).parents('li:eq(0)');
                    var idx = target.index();
                    if (target.is('.on')) {
                        target.removeClass('on');
                        checkLen--;
                        $(this).parents('.info-title').next().find('ul').each(function() {
                            $(this).find('li').eq(idx).removeClass('on');
                        })
                    } else {
                        target.addClass('on');
                        checkLen++;
                        $(this).parents('.info-title').next().find('ul').each(function() {
                            $(this).find('li').eq(idx).addClass('on');
                        })
                    }
                    if (!$(this).parents('.info-technical').find('ul.info-title li.on').length) {
                        if ($('.compare-item-info').is('.mode-selection')) {
                            $(this).parents('.info-technical').addClass('hide');
                        }
                    } else {
                        if ($('.compare-item-info').is('.mode-selection')) {
                            $(this).parents('.info-technical').removeClass('hide');
                        }
                    }
                    if (checkLen) {
                        selectionAnker.removeClass('disabled');
                    } else {
                        selectionAnker.addClass('disabled');
                    }
                })
            }
        }

        function compareSticky(hei) {
            var posSync = function() {
                if ($('.compare-item-info').length) {
                    var compareOffset = $('.compare-item-info').offset();
                    $('.compare-view-item').css('margin-left', compareOffset.left);
                    //$('.accordion-control.sticky').css('margin-left',compareOffset.left);
                }
            }
            posSync();
            $(window).resize(function() {
                posSync();
            })
            var holder = $('.compare-view-item-holder');
            var target = $('.compare-view-item');
            if (!$('body').hasClass('is-mobile')) {
                var specholder = $('.accordion-control-holder');
                var listholder = $('.compare-view-item-holder')
                var specArea = $('.accordion-control');
                var specTop = 0;
                if (specArea.is('div')) {
                    specTop = specArea.offset().top;
                }
            }
            $(window).scroll(function() {

                if (!$('.refind-your-search').is(':visible')) {

                    if ($(window).scrollTop() > hei) {
                        holder.addClass('on');
                        target.addClass('sticky');
                    } else {
                        holder.removeClass('on');
                        target.hide().removeClass('sticky').show();
                    }
                    if (!$('body').hasClass('is-mobile')) {
                        if ($(window).scrollTop() > specTop - target.outerHeight()) {

                            if (listholder.hasClass("on")) {
                                specholder.addClass('on');
                                specArea.addClass('sticky');
                            }
                        } else {
                            specholder.removeClass('on');
                            specArea.removeClass('sticky');
                        }
                    }
                }
            })
        }

        //RWD helper
        function GIOs(a, b, c, d, i) {
            var bwStep = d - c,
                contStep = b - a,
                per = bwStep / contStep,
                y, rt, xx;
            per = per.toString();
            xx = (per.indexOf('.') != -1) ? eval(per.substr(0, per.indexOf('.') + 5)) : eval(per);
            y = a + i / xx;
            y = y.toString();
            rt = (y.indexOf('.') != -1) ? y.substr(0, y.indexOf('.')) : y;
            return eval(rt);
        }
        if ($('body').hasClass('is-mobile')) {
            // mobile - mySearch-m.js (GIO)

            //START MY SEARCH
            (function($) {
                $.fn.mySearchBox = function() {
                    var _this = $(this);
                    if (!_this.length) {
                        return false;
                    }
                    var thisForm = _this.find('input[type="checkbox"]').get(0).form;

                    var searchStep = 0;

                    _this.find('input[type="checkbox"]').each(function() {
                        this.checked = false;
                        //var c = $(this).is(":checked") ? "on" : "";
                        $(this).parent().attr("class", "");
                    })

                    /* get Count */
                    _this.find('input[type="checkbox"]').change(function() {
                        var c = $(this).is(":checked") ? "on" : "";
                        $(this).parent().attr("class", c);
                        //$(thisForm).applyFilter();
                    })
                    if (typeof dragbarVal != "undefined") {
                        //dragBar setting
                        // 2015-05-22
                        var screenType = 'selectOption';
                        var screenImgW = 0;
                        var screenTextL = 0;
                        var formFilter = $('form.filter').productFilter();
                        var priceOption = dragbarVal.priceOption;

                        if (screenType != 'compare-refrigerators') {
                            /* model */
                            var dragtarget = _this.find('.m-screen .m-slide-bar');
                            var screenBubble;
                            var screenTxt = _this.find('.m-screen .m-text');
                            var screenImg = _this.find('.m-screen .m-img-text');
                            var priceBubble;
                            var priceBubble2;
                            var priceTxt = _this.find('.m-budget .m-first-unit');
                            var priceTxt2 = _this.find('.m-budget .m-last-unit');
                            var priceBar = _this.find('.m-budget .m-bar-bg');
                            var dagtarget2 = _this.find('.m-budget .m-slide-bar');

                            /* hidden input model */
                            var inpSizeMin = $(thisForm).find('input[name=sizeMin]');
                            var inpSizeMax = $(thisForm).find('input[name=sizeMax]');
                            var inpPriceMin = $(thisForm).find('input[name=priceMin]');
                            var inpPriceMax = $(thisForm).find('input[name=priceMax]');


                            if (JSON.stringify(dragbarVal[screenType]).length > 3) {
                                var _options = dragbarVal.distance || dragbarVal.cuFt;
                                /* screen */
                                dragtarget.slider({
                                    value: 1,
                                    min: 0,
                                    max: _options.length - 1,
                                    step: 1,
                                    start: function(event, ui) {
                                        $(ui.handle).prev().css('display', 'none');
                                    },
                                    slide: function(event, ui) {
                                        var sceenNum = ui.value;
                                        if (dragbarVal.cuFt) { // washers
                                            var screenOption = dragbarVal[screenType];
                                            screenBubble.text(_options[sceenNum]);
                                            screenTxt.text(_options[sceenNum]);
                                        } else if (_options) { //tvs
                                            var screenOption = dragbarVal[screenType];
                                            screenBubble.text(_options[sceenNum]);
                                            screenTxt.text(_options[sceenNum]);
                                            switch (sceenNum) {
                                                case 0:
                                                    inpSizeMin.val(findOptionKey(screenOption, '32"'));
                                                    inpSizeMax.val(findOptionKey(screenOption, '32"'));
                                                    break;
                                                case 1:
                                                    inpSizeMin.val(findOptionKey(screenOption, '32"'));
                                                    inpSizeMax.val(findOptionKey(screenOption, '55"'));
                                                    break;
                                                case 2:
                                                    inpSizeMin.val(findOptionKey(screenOption, '55"'));
                                                    inpSizeMax.val(findOptionKey(screenOption, '65"'));
                                                    break;
                                                case 3:
                                                    inpSizeMin.val(findOptionKey(screenOption, '65"'));
                                                    inpSizeMax.val(findOptionKey(screenOption, '65"'));
                                                    break;
                                                case 4:
                                                    inpSizeMin.val(findOptionKey(screenOption, '65"'));
                                                    inpSizeMax.val(0);
                                                    break;
                                            }
                                            if (dragbarVal.distance) {
                                                screenImg.text(dragbarVal.imgs[sceenNum]);
                                                screenTextL = dragbarVal.left[sceenNum];
                                                screenImgW = dragbarVal.size[sceenNum];
                                                // screenImg.prev().css('font-size',screenImgW +'%');
                                                screenImg.prev().css('font-size', (screenImgW * 13 / 100) + 'px');
                                                screenImg.css('left', Math.abs(100 - screenTextL) + '%');

                                            }
                                        }
                                    },
                                    stop: function(e, ui) {
                                        var sceenNum = ui.value;
                                        var screenOption = dragbarVal[screenType];
                                        var capacity = null;

                                        $(ui.handle).prev().css('display', '');

                                        if (!lg.clearFilterCookie) {
                                            lg.clearFilterCookie = true;
                                            lg.filter._cDel(lg.filter.CARTS);
                                        }

                                        if (dragbarVal.cuFt) { // washers
                                            var c = lg.filter.pageCategory();
                                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));

                                            $.each(screenOption, function(index, value) {
                                                $.each(value, function(index2, value2) {
                                                    //lg.filter.remove((index2+":"+value2),c);
                                                    lg.filter.remove((value2), c);
                                                    dragtarget.find("input.size").remove();
                                                });
                                            });

                                            $.each(screenOption[_options[sceenNum]], function(index, value) {
                                                //lg.filter.add((index+":"+value),c);
                                                lg.filter.add((value), c);
                                                dragtarget.append('<input type="hidden" class="size" name="' + index + '" value="' + value + '">');
                                            });
                                            capacity = $.param(screenOption[_options[sceenNum]]);
                                        } else if (dragbarVal.distance) { //tvs
                                            var c = lg.filter.pageCategory();
                                            var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));

                                            for (var i = 0; i < copyArr.length; i++) {
                                                if (copyArr[i].indexOf('size') != -1) {
                                                    lg.filter.remove(copyArr[i], c);
                                                }
                                            }
                                            switch (sceenNum) {
                                                case 0:
                                                    var _v1 = findOptionKey(screenOption, '32"');
                                                    lg.filter.add(('sizeMin:' + _v1), c);
                                                    lg.filter.add(('sizeMax:' + _v1), c);
                                                    break;
                                                case 1:
                                                    var _v1 = findOptionKey(screenOption, '32"');
                                                    var _v2 = findOptionKey(screenOption, '55"');
                                                    lg.filter.add(('sizeMin:' + _v1), c);
                                                    lg.filter.add(('sizeMax:' + _v2), c);
                                                    break;
                                                case 2:
                                                    var _v1 = findOptionKey(screenOption, '55"');
                                                    var _v2 = findOptionKey(screenOption, '65"');
                                                    lg.filter.add(('sizeMin:' + _v1), c);
                                                    lg.filter.add(('sizeMax:' + _v2), c);
                                                    break;
                                                case 3:
                                                    var _v1 = findOptionKey(screenOption, '65"');
                                                    lg.filter.add(('sizeMin:' + _v1), c);
                                                    lg.filter.add(('sizeMax:' + _v1), c);
                                                    break;
                                                case 4:
                                                    var _v1 = findOptionKey(screenOption, '65"');
                                                    lg.filter.add(('sizeMin:' + _v1), c);
                                                    lg.filter.add(('sizeMax:' + 0), c);
                                                    break;

                                            }
                                        }
                                        formFilter.applyFilter(capacity);

                                        // for ios bug
                                        $('.is-mobile .m-my-search .m-screen').append('<div id="mysearch_dim" style="position:absolute;left:-20px;box-sizing:content-box;padding:0 20px;width:100%;height:100%;"></div>');
                                        setTimeout(function() {
                                            $('#mysearch_dim').remove();
                                        }, 100);
                                    }
                                });

                                $('<span class="m-bubble"><span></span></span>').appendTo(dragtarget.find('.ui-slider-handle'));
                                screenBubble = _this.find('.m-screen .m-bubble span');
                                screenImg.prev().css('font-size', '700%');
                                if (dragbarVal.left) {
                                    screenTextL = dragbarVal.left[4];
                                    screenImg.css('left', Math.abs(100 - screenTextL) + '%');
                                }

                            }

                            //init value
                            if (dragbarVal.distance) { //tvs
                                screenBubble.text(dragbarVal.distance[dragtarget.slider("value")])
                                screenTxt.text(dragbarVal.distance[dragtarget.slider("value")]);
                            } else {
                                //screenBubble.text(dragbarVal.distance[dragtarget.slider( "value" )])
                                //screenTxt.text(dragbarVal['lbs'][dragtarget.slider( "value" )]);
                            }
                            if (JSON.stringify(priceOption).length > 3) {
                                dagtarget2.slider({
                                    range: true,
                                    min: 0,
                                    max: optionsLen(priceOption) - 1,
                                    step: 1,
                                    values: [0, optionsLen(priceOption) - 1],
                                    start: function(event, ui) {
                                        if ($(ui.handle).index() == 3) {
                                            $(ui.handle).siblings('.m-first-unit').css('display', 'none');
                                        } else if ($(ui.handle).index() == 4) {
                                            $(ui.handle).siblings('.m-last-unit').css('display', 'none');
                                        }
                                    },
                                    slide: function(event, ui) {
                                        var sceenNum = ui.value;
                                        var _price = rtOptions(priceOption, sceenNum);
                                        if ($(ui.handle).index() == '3') {
                                            priceTxt.text(_price[0]);
                                            priceBubble.text(_price[0]);
                                        } else {
                                            priceTxt2.text(_price[0]);
                                            priceBubble2.text(_price[0]);
                                        }
                                        //checkOptionDraw('price',priceTxt.text() + "-"+ priceTxt2.text());
                                    },
                                    stop: function(event, ui) {
                                        var sceenNum = checkSliderValue($(this), ui);
                                        if (ui.value != sceenNum) {
                                            ui.value = sceenNum;
                                        }
                                        var _price = rtOptions(priceOption, sceenNum);
                                        var c = lg.filter.pageCategory();
                                        var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));
                                        if (!lg.clearFilterCookie) {
                                            lg.clearFilterCookie = true;
                                            lg.filter._cDel(lg.filter.CARTS);
                                        }
                                        if ($(ui.handle).index() == '3') {
                                            for (var i = 0; i < copyArr.length; i++) {
                                                if (copyArr[i].indexOf('priceMin') != -1) {
                                                    lg.filter.remove(copyArr[i], c);
                                                }
                                            }
                                            if (sceenNum != 0) {
                                                lg.filter.add(('priceMin:' + _price[1]), c);
                                            }
                                            priceTxt.text(_price[0]);
                                            priceBubble.text(_price[0]);
                                            inpPriceMin.val(_price[1]).addClass('changed');
                                        } else {
                                            for (var i = 0; i < copyArr.length; i++) {
                                                if (copyArr[i].indexOf('priceMax') != -1) {
                                                    lg.filter.remove(copyArr[i], c);
                                                }
                                            }
                                            if (sceenNum != optionsLen(priceOption) - 1) {
                                                lg.filter.add(('priceMax:' + _price[1]), c);
                                            }
                                            priceTxt2.text(_price[0]);
                                            priceBubble2.text(_price[0]);
                                            inpPriceMax.val(_price[1]).addClass('changed');
                                        }
                                        formFilter.applyFilter();
                                        $(ui.handle).siblings('p').css('display', '');

                                        // for ios bug
                                        $('.is-mobile .m-my-search .m-budget').append('<div id="mysearch_dim" style="position:absolute;left:-20px;box-sizing:content-box;padding:0 20px;width:100%;height:100%;"></div>');
                                        setTimeout(function() {
                                            $('#mysearch_dim').remove();
                                        }, 100);
                                    }
                                });
                                //init

                                $('<span class="m-bubble"><span></span></span>').appendTo(dagtarget2.find('.ui-slider-handle'));
                                priceBubble = _this.find('.m-budget .m-bubble:eq(0) span');
                                priceBubble2 = _this.find('.m-budget .m-bubble:eq(1) span');

                                priceTxt.text(rtOptions(priceOption, 0)[0]);
                                priceBubble.text(rtOptions(priceOption, 0)[0])
                                priceTxt2.text(rtOptions(priceOption, optionsLen(priceOption) - 1)[0]);
                                priceBubble2.text(rtOptions(priceOption, optionsLen(priceOption) - 1)[0])
                            }
                        }
                    }

                    // //2015-05-22
                    //skip
                    _this.find('.m-search-view-control .m-prev').click(function() {
                        searchStep--;
                        if (searchStep == 0) { //min
                            $(this).hide();
                        } else {
                            _this.find('.m-search-view-control .m-next').show();
                        }
                        _this.find('.m-view-index span').eq(searchStep).addClass('m-selected').siblings().removeClass('m-selected');
                        _this.find('.m-search-select > div').eq(searchStep).show().siblings().hide();
                        return false;
                    })
                    _this.find('.m-search-view-control .m-next').click(function() {
                        searchStep++;
                        if (searchStep == 2) { //max
                            $(this).hide();
                        } else {
                            _this.find('.m-search-view-control .m-prev').show();
                        }
                        _this.find('.m-view-index span').eq(searchStep).addClass('m-selected').siblings().removeClass('m-selected');
                        _this.find('.m-search-select > div').eq(searchStep).show().siblings().hide();
                        return false;
                    });
                    // formFilter.applyFilter();
                }
            })(jQuery);

        } else {
            // desktop - mySearch.js (GIO)
            //START MY SEARCH
            (function($) {
                $.fn.mySearchBox = function() {
                    var _this = $(this);
                    if (!_this.length) {
                        return false;
                    }
                    var thisForm = _this.find('input[type="checkbox"]').get(0).form;

                    /* checkbox focus 150517 */
                    _this.find('input[type="checkbox"]').focusin(function() {
                        $(this).parent().addClass('focus');
                    });
                    _this.find('input[type="checkbox"]').focusout(function() {
                        $(this).parent().removeClass('focus');
                    });

                    var formFilter = $('form.filter').productFilter();
                    //	formFilter.init();
                    /* get Count */
                    _this.find('input[type="checkbox"]').each(function() {
                        this.checked = false;
                        //var c = $(this).is(":checked") ? "on" : "";
                        $(this).parent().attr("class", "");
                    });
                    _this.find('input[type="checkbox"]').change(function() {
                        // $(this).parent().toggleClass('on');

                        var c = $(this).is(":checked") ? "on" : "";
                        $(this).parent().attr("class", c);
                        //formFilter.applyFilter();
                    })

                    //dragBar setting
                    // //2015-05-22
                    var screenType = 'selectOption';
                    var screenImgW = 0;
                    var screenTextL = 0;

                    if (typeof dragbarVal != "undefined") {

                        var formFilter = $('form.filter').productFilter();

                        /* model */
                        var dragtarget = _this.find('.screen .slide-bar');
                        var screenTxt = _this.find('.screen .text');
                        var screenImg = _this.find('.screen .img-text');
                        var screenBubble;
                        var priceBubble;
                        var priceBubble2;
                        var priceTxt = _this.find('.budget .first-unit');
                        var priceTxt2 = _this.find('.budget .last-unit');
                        var priceBar = _this.find('.budget .bar-bg');
                        var dagtarget2 = _this.find('.budget .slide-bar');

                        /* hidden input model */
                        var inpSizeMin = $(thisForm).find('input[name=sizeMin]');
                        var inpSizeMax = $(thisForm).find('input[name=sizeMax]');
                        var inpPriceMin = $(thisForm).find('input[name=priceMin]');
                        var inpPriceMax = $(thisForm).find('input[name=priceMax]');


                        if (JSON.stringify(dragbarVal[screenType]).length > 3) {
                            /* screen */
                            var _options = dragbarVal.distance || dragbarVal.cuFt;

                            dragtarget.slider({
                                value: 1,
                                min: 0,
                                max: _options.length - 1,
                                step: 1,
                                start: function(event, ui) {
                                    $(ui.handle).prev().css('display', 'none');
                                },
                                slide: function(event, ui) {
                                    var sceenNum = ui.value;
                                    if (dragbarVal.cuFt) { // washers
                                        var screenOption = dragbarVal[screenType];
                                        screenBubble.text(_options[sceenNum]);
                                        screenTxt.text(_options[sceenNum]);
                                        if (dragbarVal.distance) {
                                            screenImg.text(dragbarVal.imgs[sceenNum]);
                                            screenTextL = dragbarVal.left[sceenNum];
                                            screenImgW = dragbarVal.size[sceenNum];
                                            // screenImg.prev().css('font-size',screenImgW +'%');
                                            screenImg.prev().css('font-size', (screenImgW * 16 / 100) + 'px');
                                            screenImg.css('left', Math.abs(100 - screenTextL) + '%');
                                            if ($('html').hasClass('lt-ie9')) {
                                                screenImg.prev().css('font-size', '700%');
                                            } else {
                                                screenImg.prev().css('font-size', (screenImgW * 16 / 100) + 'px');
                                                screenImg.css('left', Math.abs(100 - screenTextL) + '%');
                                            }
                                        }
                                    } else if (_options) { // tvs
                                        var screenOption = dragbarVal[screenType];
                                        screenBubble.text(_options[sceenNum]);
                                        screenTxt.text(_options[sceenNum]);
                                        switch (sceenNum) {
                                            case 0:
                                                inpSizeMin.val(findOptionKey(screenOption, '32"'));
                                                inpSizeMax.val(findOptionKey(screenOption, '32"'));
                                                break;
                                            case 1:
                                                inpSizeMin.val(findOptionKey(screenOption, '32"'));
                                                inpSizeMax.val(findOptionKey(screenOption, '55"'));
                                                break;
                                            case 2:
                                                inpSizeMin.val(findOptionKey(screenOption, '55"'));
                                                inpSizeMax.val(findOptionKey(screenOption, '65"'));
                                                break;
                                            case 3:
                                                inpSizeMin.val(findOptionKey(screenOption, '65"'));
                                                inpSizeMax.val(findOptionKey(screenOption, '65"'));
                                                break;
                                            case 4:
                                                inpSizeMin.val(findOptionKey(screenOption, '65"'));
                                                inpSizeMax.val(0);
                                                break;
                                        }
                                        if (dragbarVal.distance) {
                                            screenImg.text(dragbarVal.imgs[sceenNum]);
                                            screenTextL = dragbarVal.left[sceenNum];
                                            screenImgW = dragbarVal.size[sceenNum];
                                            // screenImg.prev().css('font-size',screenImgW +'%');

                                            if ($('html').hasClass('lt-ie9')) {
                                                screenImg.prev().css('font-size', '700%');
                                            } else {
                                                screenImg.prev().css('font-size', (screenImgW * 16 / 100) + 'px');
                                                screenImg.css('left', Math.abs(100 - screenTextL) + '%');
                                            }
                                        }
                                    }
                                },
                                stop: function(e, ui) {
                                    var sceenNum = ui.value;
                                    var screenOption = dragbarVal[screenType];
                                    var capacity = null;

                                    $(ui.handle).prev().css('display', '');
                                    if (!lg.clearFilterCookie) {
                                        lg.clearFilterCookie = true;
                                        lg.filter._cDel(lg.filter.CARTS);
                                    }
                                    if (dragbarVal.cuFt) { // washers
                                        var c = lg.filter.pageCategory();
                                        var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));

                                        $.each(screenOption, function(index, value) {
                                            $.each(value, function(index2, value2) {
                                                //lg.filter.remove((index2+":"+value2),c);
                                                lg.filter.remove((value2), c);
                                                dragtarget.find("input.size").remove();
                                            });
                                        });
                                        $.each(screenOption[_options[sceenNum]], function(index, value) {
                                            // lg.filter.add((index+":"+value),c);
                                            lg.filter.add((value), c);
                                            dragtarget.append('<input type="hidden" class="size" name="' + index + '" value="' + value + '">');
                                        });
                                        capacity = $.param(screenOption[_options[sceenNum]]);
                                    } else if (dragbarVal.distance) { //tvs
                                        var c = lg.filter.pageCategory();
                                        var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));

                                        for (var i = 0; i < copyArr.length; i++) {
                                            if (copyArr[i].indexOf('size') != -1) {
                                                lg.filter.remove(copyArr[i], c);
                                            }
                                        }
                                        switch (sceenNum) {
                                            case 0:
                                                var _v1 = findOptionKey(screenOption, '32"');
                                                lg.filter.add(('sizeMin:' + _v1), c);
                                                lg.filter.add(('sizeMax:' + _v1), c);
                                                break;
                                            case 1:
                                                var _v1 = findOptionKey(screenOption, '32"');
                                                var _v2 = findOptionKey(screenOption, '55"');
                                                lg.filter.add(('sizeMin:' + _v1), c);
                                                lg.filter.add(('sizeMax:' + _v2), c);
                                                break;
                                            case 2:
                                                var _v1 = findOptionKey(screenOption, '55"');
                                                var _v2 = findOptionKey(screenOption, '65"');
                                                lg.filter.add(('sizeMin:' + _v1), c);
                                                lg.filter.add(('sizeMax:' + _v2), c);
                                                break;
                                            case 3:
                                                var _v1 = findOptionKey(screenOption, '65"');
                                                lg.filter.add(('sizeMin:' + _v1), c);
                                                lg.filter.add(('sizeMax:' + _v1), c);
                                                break;
                                            case 4:
                                                var _v1 = findOptionKey(screenOption, '65"');
                                                lg.filter.add(('sizeMin:' + _v1), c);
                                                break;
                                        }
                                    }
                                    formFilter.applyFilter(capacity);
                                }
                            });

                            $('<span class="bubble"><span></span></span>').appendTo(dragtarget.find('.ui-slider-handle'));
                            screenBubble = _this.find('.screen .bubble span');
                            if ($('html').hasClass('lt-ie9')) {
                                screenImg.prev().css('font-size', '700%');
                                if (dragbarVal.left) {
                                    screenTextL = dragbarVal.left[4];
                                }
                            } else {
                                screenImg.prev().css('font-size', '500%');
                                if (dragbarVal.left) {
                                    screenTextL = dragbarVal.left[4];
                                    screenImg.css('left', 10 + '%');
                                }
                            }

                        }

                        //init value
                        if (dragbarVal.distance) { //tvs
                            screenBubble.text(dragbarVal.distance[dragtarget.slider("value")])
                            screenTxt.text(dragbarVal.distance[dragtarget.slider("value")]);
                        } else if (dragbarVal.cuFt) {
                            screenBubble.text(dragbarVal.cuFt[dragtarget.slider("value")])
                            screenTxt.text(dragbarVal.cuFt[dragtarget.slider("value")]);
                        } else {
                            //screenBubble.text(dragbarVal.distance[dragtarget.slider( "value" )])
                            //screenTxt.text(dragbarVal['lbs'][dragtarget.slider( "value" )]);
                        }
                        var priceOption = dragbarVal.priceOption;

                        if (JSON.stringify(priceOption).length > 3) {
                            dagtarget2.slider({
                                range: true,
                                min: 0,
                                max: optionsLen(priceOption) - 1,
                                step: 1,
                                values: [0, optionsLen(priceOption) - 1],
                                start: function(event, ui) {
                                    if ($(ui.handle).index() == 3) {
                                        $(ui.handle).siblings('.first-unit').css('display', 'none');
                                    } else if ($(ui.handle).index() == 4) {
                                        $(ui.handle).siblings('.last-unit').css('display', 'none');
                                    }
                                },
                                slide: function(event, ui) {
                                    var sceenNum = ui.value;
                                    var _price = rtOptions(priceOption, sceenNum);
                                    if ($(ui.handle).index() == '3') {
                                        priceTxt.text(_price[0]);
                                        priceBubble.text(_price[0]);
                                    } else {
                                        priceTxt2.text(_price[0]);
                                        priceBubble2.text(_price[0]);
                                    }
                                },
                                stop: function(event, ui) {
                                    var sceenNum = checkSliderValue($(this), ui);
                                    if (ui.value != sceenNum) {
                                        ui.value = sceenNum;
                                    }
                                    var _price = rtOptions(priceOption, sceenNum);
                                    var c = lg.filter.pageCategory();
                                    var copyArr = JSON.parse(JSON.stringify(lg.filter.get(lg.compareCategory)));
                                    if (!lg.clearFilterCookie) {
                                        lg.clearFilterCookie = true;
                                        lg.filter._cDel(lg.filter.CARTS);
                                    }
                                    if ($(ui.handle).index() == '3') {
                                        for (var i = 0; i < copyArr.length; i++) {
                                            if (copyArr[i].indexOf('priceMin') != -1) {
                                                lg.filter.remove(copyArr[i], c);
                                            }
                                        }
                                        if (sceenNum != 0) {
                                            lg.filter.add(('priceMin:' + _price[1]), c);
                                        }
                                        priceTxt.text(_price[0]);
                                        priceBubble.text(_price[0]);
                                        inpPriceMin.val(_price[1]).addClass('changed');
                                    } else {
                                        for (var i = 0; i < copyArr.length; i++) {
                                            if (copyArr[i].indexOf('priceMax') != -1) {
                                                lg.filter.remove(copyArr[i], c);
                                            }
                                        }
                                        if (sceenNum != optionsLen(priceOption) - 1) {
                                            lg.filter.add(('priceMax:' + _price[1]), c);
                                        }
                                        priceTxt2.text(_price[0]);
                                        priceBubble2.text(_price[0]);
                                        inpPriceMax.val(_price[1]).addClass('changed');
                                    }
                                    formFilter.applyFilter();
                                    $(ui.handle).siblings('p').css('display', '');
                                }
                            });
                            //init

                            $('<span class="bubble"><span></span></span>').appendTo(dagtarget2.find('.ui-slider-handle'));
                            priceBubble = _this.find('.budget .bubble:eq(0) span');
                            priceBubble2 = _this.find('.budget .bubble:eq(1) span');

                            priceTxt.text(rtOptions(priceOption, 0)[0]);
                            priceBubble.text(rtOptions(priceOption, 0)[0])
                            priceTxt2.text(rtOptions(priceOption, optionsLen(priceOption) - 1)[0]);
                            priceBubble2.text(rtOptions(priceOption, optionsLen(priceOption) - 1)[0])
                        }
                    }
                    //2015-05-22
                    //formFilter.applyFilter();
                }

                $.fn.extend({
                    bwEventBind: function(opt) {
                        var _this = $(this);
                        var bwUIFn2 = {
                            bwVal: function() {
                                return $(window).width()
                            },
                            areaSta: opt.d ? opt.d : 1000,
                            areaEnd: opt.e ? opt.e : 1900
                        }
                        if (!opt.f) {
                            opt.f = function() {}
                        };
                        if (!opt.s) {
                            opt.s = function() {}
                        };
                        var csMet = function(tval) {
                            var ret, origName = jQuery.camelCase(opt.c),
                                hooks = jQuery.cssHooks[origName];
                            var _name = jQuery.cssProps[origName] || origName;
                            //animate: function( prop, speed, easing, callback ) {
                            var tmp = {};
                            tmp[_name] = tval;
                            _this.stop().animate(tmp, {
                                duration: 150,
                                step: opt.s,
                                complete: opt.f
                            })
                        }
                        var rtVal = GIOs(opt.a, opt.b, bwUIFn2.areaSta, bwUIFn2.areaEnd, bwUIFn2.bwVal() - bwUIFn2.areaSta);
                        if (bwUIFn2.bwVal() > bwUIFn2.areaSta && bwUIFn2.bwVal() < bwUIFn2.areaEnd) csMet(rtVal);
                        else if (bwUIFn2.bwVal() < bwUIFn2.areaSta) csMet(opt.a);
                        else if (bwUIFn2.bwVal() > bwUIFn2.areaEnd) csMet(opt.b);
                    }
                })
            })(jQuery);
        }

        // compare 
        if ($('.add-to-compare').is('div')) {
            if ($('body').hasClass('is-mobile')) {
                compareSlide();
                compareNextBtn();
                technicalExpand();
                specsModeChange();
                setTimeout(function() {
                    compareSticky(400);
                }, 100);
                //back btn 
                $('.add-to-compare .back-btn').click(function(e) {
                        e.preventDefault();
                        if (document.referrer == "" || document.referrer.indexOf("lg.com") == -1) {
                            window.location = decodeURIComponent(lg.compareCategory);
                        } else {
                            window.history.back();
                        }
                    })
                    // after page load, click selections link  - hsad / theJ
                setTimeout(function() {
                    $('.accordion-control .choice-control dd').eq(2).find('a').trigger('click');
                }, 300);
            } else {
                // after page load, click selections link  - hsad / theJ
                setTimeout(function() {
                    $('.accordion-control .choice-control dd').eq(1).find('a').trigger('click');
                }, 300);
                //drag bar
                refineDragbar();

                var formEl = $('form.filter');
                var url = formEl.attr('action');
                var formFn = formEl.productFilter();

                var e = lg.compare.pageCategory();
                var nowLen = lg.compare.count(e);
                var originLen = lg.compare.count(e);

                //add list show
                $('.compare-view-left .change-btn').click(function() {
                        //console.log(lg.compare.get(lg.compareCategory))
                        if (nowLen < 0) {
                            nowLen = lg.compare.count(e);
                        }
                        if (originLen != lg.compare.count(e)) {
                            nowLen = nowLen - (originLen - lg.compare.count(e));
                        }
                        if (lg.compare.count(e) > 10) {
                            /* 2015-06-02 */
                            $('.alert-popup').css({
                                'display': 'block',
                                'margin-top': $('.alert-popup').outerHeight() / -2 + 'px',
                                'margin-left': $('.alert-popup').outerWidth() / -2 + 'px'
                            });
                            $('.alert-popup .alert-text').text('Compare is only available up to 10');
                            $('.alert-popup .alert-close, .alert-popup .alert-btn').click(function() {
                                $(this).parents('.alert-popup').css('display', 'none');
                                return false;
                            });
                            return false;
                        }
                        /* //2015-06-02 */

                        formFn.applyFilter();

                        $(this).addClass('hide');
                        $('.refind-your-search').removeClass('hide');


                        $('.compare-view-item-holder, .accordion-control-holder').removeClass('on');
                        $('.compare-view-item, .accordion-control').removeClass('sticky');
                        $(window).scrollTop(0);
                        $($(".add-to-compare form.filter .column1").find("label input")[0]).focus();
                        return false;
                    })
                    //back btn 
                $('.add-to-compare .back-btn').click(function(e) {
                    e.preventDefault();
                    if (document.referrer == "" || document.referrer.indexOf("lg.com") == -1) {
                        window.location = decodeURIComponent(lg.compareCategory);
                    } else {
                        window.history.back();
                    }
                })

                //add list hide
                $('.add-to-compare .close-btn').click(function() {
                    $('.refind-your-search').addClass('hide');
                    $('.change-btn').removeClass('hide').focus();
                    return false;
                })
                var addCompareQuee = [];
                var removeCompareQuee = [];
                var _callback = function() {
                    $.each(addCompareQuee, function() {
                        var d = this;
                        $('.product-lists .cta-button a.add-btn[data-product-id=' + d + ']').hide();
                        $('.product-lists .cta-button a.remove-btn[data-product-id=' + d + ']').show();
                    })
                    $.each(removeCompareQuee, function() {
                        var d = this;
                        $('.product-lists .cta-button a.add-btn[data-product-id=' + d + ']').show();
                        $('.product-lists .cta-button a.remove-btn[data-product-id=' + d + ']').hide();
                    })
                }
                var checkCompItem = function() {
                        var e = lg.compare.pageCategory();
                        $('.product-lists .cta-button a.remove-btn:visible').each(function() {
                            var item = $(this);
                            var d = item.data('product-id')
                            if (lg.compare.isin((d), e)) {} else {
                                if ($.inArray((d), addCompareQuee) == -1) {
                                    addCompareQuee.push((d))
                                }
                            }
                        })
                        $('.product-lists .cta-button a.add-btn:visible').each(function() {
                            var item = $(this);
                            var d = item.data('product-id');
                            if (lg.compare.isin((d), e)) {
                                if ($.inArray((d), removeCompareQuee) == -1) {
                                    removeCompareQuee.push((d))
                                }
                            }
                        })
                    }
                    //prev btn
                $('.add-to-compare .btn-center a').eq(0).click(function() {
                        if ($(this).is('.disable')) {
                            return false;
                        };
                        var total = parseInt($('.product-list-wrap .pager .total').text());
                        var nowPage = parseInt($('.product-list-wrap .pager .pages .active').text());
                        checkCompItem();
                        nowPage--;
                        var url = $('.product-list-wrap .pager .pages a').eq(nowPage - 1).attr('data-uri');
                        formFn.reload(url, _callback);
                        return false;
                    })
                    //next btn
                $('.add-to-compare .btn-center a').eq(1).click(function() {
                        if ($(this).is('.disable')) {
                            return false;
                        };
                        var total = parseInt($('.product-list-wrap .pager .total').text());
                        var nowPage = parseInt($('.product-list-wrap .pager .pages .active').text());
                        checkCompItem();
                        nowPage++;
                        var url = $('.product-list-wrap .pager .pages a').eq(nowPage - 1).attr('data-uri');
                        formFn.reload(url, _callback);

                        return false;
                    })
                    //add btn
                $('.add-to-compare .btn-center a').eq(2).click(function(a) {
                        var e = lg.compare.pageCategory();
                        a.preventDefault();
                        checkCompItem();

                        $.each(addCompareQuee, function() {
                            var d = this;
                            lg.compare.add((d), e);
                        })
                        $.each(removeCompareQuee, function() {
                            var d = this;
                            lg.compare.remove((d), e);
                        })

                        addCompareQuee = [];
                        removeCompareQuee = [];
                        //refresh
                        location.reload();
                    })
                    //add to compare btn



                $('.add-to-compare').on('click', '.cta-button a', function() {
                    var checkMax = 10;
                    var isFull = (nowLen >= 10);

                    // var t = $('.compare-count span.check-singular').data("plural");
                    // if(nowLen <= 1) {
                    // 	t = $('.compare-count span.check-singular').data("singular");
                    // }

                    // if($('body').hasClass('is-mobile')) {
                    // 	$('.compare-count strong span.count').text(nowLen); // 2015-06-01 
                    // 	$('.compare-count span.check-singular').text(t);
                    // }else{
                    // 	$('.compare-count strong span.count').text(nowLen); // 2015-06-01 
                    // 	$('.compare-count span.check-singular').text(t);
                    // }
                    if ($(this).hasClass('add-btn')) {
                        var t = $(this);
                        if (nowLen >= checkMax) {
                            /* 2015-06-02 */
                            $('.alert-popup').css({
                                'display': 'block',
                                'margin-top': $('.alert-popup').outerHeight() / -2 + 'px',
                                'margin-left': $('.alert-popup').outerWidth() / -2 + 'px'
                            });
                            $('.alert-popup .alert-close, .alert-popup .alert-btn a').click(function() {
                                $(this).parents('.alert-popup').css('display', 'none');
                                t.focus();
                                return false;
                            });
                            $('.alert-popup .alert-btn a').focus();
                            /* //2015-06-02 */
                            return false;
                        } else {
                            $(this).css('display', 'none');
                            $(this).siblings('.btn').css('display', '').removeClass('checked').focus();
                            nowLen++;
                        }
                    } else { //remove
                        nowLen--;
                        $(this).css('display', 'none');
                        $(this).addClass('checked');
                        $(this).siblings('.btn').css('display', '').focus();
                    }
                    //console.log(nowLen +">="+ checkMax);
                    return false;
                })
                compareSlide();
                compareNextBtn();
                technicalExpand();
                specsModeChange();
                if ($('.product-lists li').length == 0) {

                    return false;
                } else {
                    setTimeout(function() {
                        compareSticky(259);
                    }, 100);
                }
            }
        }

        // compare lock
        $('.item-area .item-uitls li:first-child > a').click(function() {
            var _wrap = $('.compare-view-item .compare-item .item-view'),
                index = $('.item-area .item-uitls li:first-child > a').index(this);

            var e = lg.compare.pageCategory();
            var d = $(this).data("product-id");

            if ($(this).parents('.item').hasClass('item-lock')) {
                compareUnLock();
                lg.compareLOCK.remove((d), e);
            } else {
                compareLock(index);
                lg.compareLOCK.add((d), e, true);
            }
            return false;
        });
        // start my search 
        if ($('.findTheRightFilter').is('section')) {
            if ($('body').hasClass('is-mobile')) {
                $('.m-my-search-box').mySearchBox();
            } else {
                $('.my-search-box').mySearchBox();
            }
        }
        // filter 
        if ($('.filter').is('section') || $('.filter').is('div') || $('.filter').is('form')) {
            // load more
            if ($('body').hasClass('is-mobile')) {
                $(document).on('click', '.more-item', function(b) {

                    var page_limit = Math.ceil(parseInt($('.product-grid-header').find('.total span').text()) / 6);
                    b.preventDefault();
                    var formFilter = $('form.filter').productFilter();
                    var url = $(this).data('ajax-url');
                    lg.filter.page++;
                    if (!$('input[name=page]').length) {
                        $('<input type="hidden" name="page" value="' + lg.filter.page + '">').appendTo($('form.filter'));
                    } else {
                        $('input[name=page]').attr('value', lg.filter.page)
                    }
                    formFilter.applyFilterMore(url, lg.filter.page, page_limit);
                    return false;
                })
            }

            if ($('.filter').hasClass("discontinued")) return false; //theJ

            if ($('body').hasClass('is-mobile')) {
                refineDragbar();
                refineFixed();
                //  load more
            } else {
                //refineDragbar();
                (function($) {
                    function refindRWD() { //
                            if ($(".add-to-compare").length > 0) return false;
                            var targetA = $('.refind-your-search .column2');
                            var targetB = $('.refind-your-search .column2 .response ul.product-lists li');
                            var targetC = $('.refind-your-search .column1');

                            /* setOption */
                            var Aoptions = {
                                a: 458,
                                b: 880,
                                c: 'width',
                                d: 768,
                                e: 1200
                            }
                            var Boptions = {
                                a: 20,
                                b: 110,
                                c: 'margin-right',
                                d: 1024,
                                e: 1200
                            }
                            var Coptions = {
                                a: 40,
                                b: 70,
                                c: 'margin-right',
                                d: 768,
                                e: 1200
                            }
                            if ($(window).width() < 1004) {
                                Boptions.a = 45;
                                Boptions.d = 768;
                                Boptions.e = 1024;
                            } else {
                                Boptions.a = 20;
                                Boptions.d = 1024;
                                Boptions.e = 1200;
                            }
                            targetA.bwEventBind(Aoptions);
                            targetB.bwEventBind(Boptions);
                            targetC.bwEventBind(Coptions);
                        }
                        //refindRWD();
                    var timerId;
                    $(window).resize(function() {
                        //clearTimeout(timerId);
                        //timerId = setTimeout(function(){refindRWD()},150)
                    })
                    $(document).ready(function() {
                        //technicalExpand();
                        //refindRWD();
                    });

                })(jQuery);
            }
        }
        $('.choice-control dd a.icon').on('mouseenter focus', function() {
            $(this).next('.tooltop').css({
                'display': 'block',
                'left': $(this).position().left - 200
            });
        });
        $('.choice-control dd a.icon').on('mouseleave blur', function() {
            $(this).next('.tooltop').css('display', '');
        });
        /* //2015-06-10 */

        // 2015-06-19  //
        /*
		if ( !$('body').hasClass('is-mobile')) {
			var AppendHTML1 = '<i class="icon icon-triangle-down"></i>';
			$('.model-color a').hover(function(){
				var t = $(this).attr('data-disclaimer');
				var AppendHTML2 = '<span class="disclaimer-box">'+t+'</span>';
				$(this).append(AppendHTML1);
				$('.model-color').append(AppendHTML2);
				
			},function(){
				$('.model-color .disclaimer-box').remove();
				$('.model-color .icon-triangle-down').remove();
			});
		}
		*/

        function checkSliderValue(o, ui) {
            if (!o) return false;
            var v = o.slider("option", "values");
            var min = o.slider("option", "min");
            var max = o.slider("option", "max");
            var c = v[0] == v[1];
            var r;

            if (!c) r = ui.value;
            else if ($(ui.handle).index() == 4 && v[1] == min) { //min
                r = min + 1;
                ui.values[1] = r;
            } else if ($(ui.handle).index() == 3 && v[0] == max) { //max
                r = max - 1;
                ui.values[0] = r;
            } else {
                r = ui.value;
            }
            o.slider("option", "values", ui.values);
            return r;
        }

        // function objHasValue(a, b){
        // 	var c = false;
        // 	$.each(a, function(i,t){
        // 		if(b == t) c = true;
        // 	})
        // 	return c;
        // }

        function objHasValue(arraytosearch, valuetosearch) {
            var b = false;
            for (var i = 0; i < arraytosearch.length; i++) {
                $.each(arraytosearch[i], function(s, t) {
                    if (valuetosearch == t) {
                        b = true;
                    }
                });
            }
            return b;
        }

    })(jQuery);
});
