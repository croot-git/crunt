/* global define */

/**
 * CAll To Action Carousel module.
 * @module call-to-action-carousel
 */
define(['jquery', 'slick-carousel'], function($, slick) {

    'use strict';

    var ctaCarousel = {};

    $('.call-to-action.with-carousel').on('init', function(event, slick) {
        slick.$slideTrack.find("a").attr("tabindex", -1);
        slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
    }).slick({
        //speed: 300,
        dots: true
    }).on('afterChange', function(event, slick, currentSlide) {
        slick.$slideTrack.find("a").attr("tabindex", -1);
        slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
    });

    $('.module.with-carousel').each(function(i) {
        var numberOfSlidesToShow;
        if (typeof $(this).attr('data-slides-to-show') !== "undefined") {
            numberOfSlidesToShow = Number($(this).attr('data-slides-to-show'));
        } else {
            numberOfSlidesToShow = 3;
        }
        $(this).addClass("i_" + i);
        $(this).find(".carousel").on('init', function(event, slick) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        }).slick({
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
        }).on('afterChange', function(event, slick, currentSlide) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        });
    })

    $('.product-lists .item-tech .with-carousel').each(function(i) {
        $(this).find(".carousel").on('init', function(event, slick) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        }).slick({
            dots: false
        }).on('afterChange', function(event, slick, currentSlide) {
            slick.$slideTrack.find("a").attr("tabindex", -1);
            slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
        });
    });
    //console.log('.call-to-action.with-carousel');

    return ctaCarousel;
});
