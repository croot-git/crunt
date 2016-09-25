/**
 * The products main module.
 * @module products/products
 */
var lg = {},
    XSSfilter,
    runEcorebates,
    eco_i = 0;

runEcorebates = function() {
    if (!$('html').hasClass('lt-ie9')) {
        if ($(".ecorebates-div").length > 0) {
            $(".ecorebates-div").each(function() {
                $(this).runEcorebates();
            });
            if ($("#ecorebates-js").length <= 0) {
                // var a = '<script type="text/javascript" id="ecorebates-js">(function(){ var ecr = document.createElement("script"); ecr.type = "text/javascript"; ecr.async = true; ecr.src = "http://static.ecorebates.com/content/scripts/sites/lg/product.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ecr, s); })(); </script>'
                var a = '<script type="text/javascript" id="ecorebates-js">(function(){ var ecr = document.createElement("script"); ecr.type = "text/javascript"; ecr.async = true; ecr.src = "http://static.ecorebates.com/ui/widgets/lg/product_plp.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ecr, s); })(); </script>'
                $("body").eq(0).append(a);
            }
        };
    }
};

define(['jqueryui', 'common/lazyload', 'common/touch-punch', 'common/e-smart-zoom-jquery', 'hero/hero-carousel', 'call-to-action/call-to-action-carousel', 'products/text-more', 'products/product-cookie', 'products/product-lists-carousel', 'products/product-lists-view-more', 'products/products.ask', 'products/product-hero', 'products/product.stickynav', 'products/product-video', 'products/app-tabs'
    //,'products/product.opinion'
    , 'products/product.stepchart', 'products/product-lazy', 'products/filter', 'products/group-slick', 'products/find-a-store', 'common/ecorebates', 'products/products.compare', 'products/find-the-right', 'products/find-the-right-filter', 'products/where-to-buy', 'products/products-zoom', 'common/bestbuy', 'products/site-map', 'products/legal', 'products/three-static-tile', 'products/notice-board'
], function() {

    'use strict';

    lg = {
        locale: "/" + $("html").data("countrycode"),
        productId: $("html").data("product-id")
    }
    XSSfilter = function(content) {
        return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };

    if ($(".ui-slider").length > 0) {
        $(".ui-slider").each(function(i) {
            if ('ontouchend' in document) {
                if ($._data(this, "events") && $._data(this, "events").touchend === undefined) {
                    //if(touchend && !$._data(this,"events").touchend && !$._data(this, "events" ).touchstart && !$._data(this, "events" ).touchmove){
                    $(this).bind({
                        touchstart: $.proxy($.ui.mouse.prototype, '_touchStart'),
                        touchmove: $.proxy($.ui.mouse.prototype, '_touchMove'),
                        touchend: $.proxy($.ui.mouse.prototype, '_touchEnd')
                    });
                };
            };
        });
    }

    $(document).ajaxStart(function() {
        // show loader on start
        $("html").append('<div class="page-dimmed"><span>&nbsp;</span></div>');
    }).ajaxSuccess(function() {
        // hide loader on success
        $("html > div.page-dimmed").remove();

    });

    runEcorebates();
    // what I'm returning here is "global" when you require this module
    return {};
});
