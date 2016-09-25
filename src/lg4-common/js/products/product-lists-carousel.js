/* global define */

/**
 * Product List Carousel module.
 * @module products/prodcuts-lists-carousel
 * @requires ic/ic
 * @requires ic/ui/module
 */


define(['global-config', 'jquery', 'slick-carousel', 'common/dtm', 'products/products.ask'], function(globalConfig, $, slick, dtm, ask) {

    'use strict';

    var productCarousel = {};

    /*
    $('.product-lists.with-carousel').each(function(idx, item) {
        var carouselLocation;
        var carouselId = "product-list-carousel" + idx;
        this.id = carouselId;

        carouselLocation = "#" + carouselId + ' .carousel';
        var numberOfSlidesToShow = 3;

        if (typeof $(this).attr('data-slides-to-show') !== "undefined") {
            numberOfSlidesToShow = $(this).attr('data-slides-to-show');
        }

        // if (globalConfig.isMobile === true) {
        $(carouselLocation).slick({
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

        // } else {
        //     $(carouselLocation).slick({
        //         slidesToShow: numberOfSlidesToShow,
        //         slidesToScroll: 1,
        //         dots: false,
        //         arrows: true
        //     });
        // }
    });
    */
    $('.product-lists.with-carousel').each(function(i) {
        var self = this;
        if ($(this).is(".with-ajax")) {
            $.ajax({
                type: "GET",
                timeout: 50000,
                url: $(this).data('url'),
                success: $.proxy(function(c) {
                    $(this).find(".container").append(c);
                    runCarousel($(this), i);
                    //bindDTM(); // DTM
                    $('.product-lists.recently-view').each(setBVRatings);
                    setTimeout(function() {
                        $('.product-lists.recently-view').find(".bv-rating-stars-container").each(function(i) {
                            if ($(this).parents("*[aria-hidden='true']")[0]) {
                                $(this).attr("tabindex", -1);
                            } else {
                                $(this).removeAttr("tabindex");
                            }
                        })
                        $('.product-lists.recently-view').find(".bv-rating-stars-container").on({
                            click: function(e) {
                                if ($(e.currentTarget).parents("div.rating").data("modelid") == $("html").data("product-id")) {
                                    e.preventDefault();
                                    //$("a[href=#ratings-reviews]").click();
                                    if (!$("body").is(".is-mobile")) {
                                        $(".tabs-nav-wrapper .tabs-nav").find("a").each(function(i) {
                                            if (this.href.indexOf("#ratings-reviews") > 0) {
                                                $(this).click();
                                            }
                                        })
                                    } else {
                                        $("#ratings-reviews .accordion-tab").find("a").click();
                                        $("html, body").animate({
                                            scrollTop: $("#ratings-reviews .accordion-tab").offset().top
                                        }, 300);
                                    }
                                } else {
                                    //window.location = e.currentTarget.href;
                                }
                            }
                        })
                    }, 3000);
                }, this)
            });
        } else {
            runCarousel($(this), i);
        }
    });

    function runCarousel(t, i) {
        var numberOfSlidesToShow,
            mDots = true,
            mArrows = false;
        if (typeof t.attr('data-slides-to-show') !== "undefined") {
            numberOfSlidesToShow = Number(t.attr('data-slides-to-show'));
        } else {
            numberOfSlidesToShow = 3;
        }
        t.addClass("i_" + i);
        if (t.parent().is(".most-popular")) {
            mDots = false;
            mArrows = true;
        };
        t.find(".carousel").on('init', function(event, slick) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        }).slick({
            lazyLoad: 'ondemand',
            infinite: false,
            slidesToShow: numberOfSlidesToShow,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: mDots,
                    arrows: mArrows,
                }
            }]
        }).on('afterChange', function(event, slick, currentSlide) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        });
    };

    $('.fe-carousel').each(function(i) {
        var numberOfSlidesToShow;
        if (typeof $(this).attr('data-slides-to-show') !== "undefined") {
            numberOfSlidesToShow = Number($(this).attr('data-slides-to-show'));
        } else {
            numberOfSlidesToShow = 3;
        }
        $(this).addClass("i_" + i);
        $(this).find(".ex-carousel").on('init', function(event, slick) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        }).slick({
            lazyLoad: 'ondemand',
            infinite: false,
            slidesToShow: numberOfSlidesToShow,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }]
        }).on('afterChange', function(event, slick, currentSlide) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        });
    });
    /*
	$(document).on('click', 'section.product-lists .rating a', function() { // remove .recently-view
		if($('.product').is('div')) {
			var _itemID = $('html').attr('data-product-id');
			var _thisHref = $(this).attr('data-product-id');
			if (!_itemID) {
				return;
			} else if ( _itemID == _thisHref) {
				$('.product .review_points > a').trigger('click');
				return false;
			} else {
				return true;
			}
		} else {
			return;
		}
	});
	*/

    return productCarousel;
});
