/* global define */

/**
 * CAll To Action Carousel module.
 * @module call-to-action-carousel
 */
define(['jquery', 'slick-carousel'], function($, slick) {

    'use strict';

    //console.log('active')

    $(".group-carousel").on('init', function(event, slick) {
        slick.$slideTrack.find("a").attr("tabindex", -1);
        slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
    }).slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    }).on('afterChange', function(event, slick, currentSlide) {
        slick.$slideTrack.find("a").attr("tabindex", -1);
        slick.$slideTrack.find("*[aria-hidden='false']").find("a").removeAttr("tabindex");
    });

    /* 2015-06-18 */
    if ($('body').find('.module-group').hasClass('group-carousel')) {
        $('.module-group').find('.see-video').click(function() {
            $(this).parents('.module-group').find('.slick-prev').css('display', 'none');
            $(this).parents('.module-group').find('.slick-next').css('display', 'none');
            $(this).parents('.module-group').find('.slick-dots').css('display', 'none');
            return false;
        });
        $(document).on('click', '.close', function() {
            //console.log('click')
            $('.module-group').find('.slick-prev').css('display', 'block');
            $('.module-group').find('.slick-next').css('display', 'block');
            $('.module-group').find('.slick-dots').css('display', 'block');
            return false;
        });
    }

});
