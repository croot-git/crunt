var setBVRatings = function(e) {
    if (!window.$BV) return false;
    if ($BV) {
        var idx = parseInt($('body').eq(0).attr("data-bv")) + 1;
        $('body').eq(0).attr("data-bv", idx);
        var sctxt = '';
        $(this).find('.slide, li, .recommand-product-info').each(function() {
            var obj = $(this).find('.rating, .product-rating, .recommand-product-info');
            var url = obj.find('a').eq(0).attr('href');
            var pid = obj.data('modelid');
            if (!pid) return;
            obj.removeAttr('itemprop').removeAttr('itemscope').removeAttr('itemtype').attr('id', 'productlist' + idx + '-' + pid).empty();
            if (sctxt == "") sctxt = sctxt + "'" + pid + "':{url:'" + url + "'}";
            else sctxt = sctxt + "," + "'" + pid + "':{url:'" + url + "'}";
        });
        // console.log(idx +"///"+sctxt);
        if (sctxt != "") {
            sctxt = "$BV.ui( 'rr', 'inline_ratings', {productIds : {" + sctxt + "},containerPrefix:'productlist" + idx + "'});";
            new Function(sctxt)();
        }
    }
};
define(['jquery'], function($) {
    'use strict';
    // Sticky Nav
    $('body').eq(0).attr("data-bv", 0);
    if ($('.product').is('div') && ($('#BVRRContainer').is('div') || $('#BVQAContainer').is('div'))) {
        var pid = $('html').data('product-id');
        if (!window.$BV) return false;
        if ($BV) {
            var jsHTML = '<script type="text/javascript">$BV.configure(\'global\', { productId : \'' + pid + '\' });</script>';
            $("body").eq(0).append(jsHTML);
            if (pid) {
                $('.stickynav .review_points, .stickynav-m .review_points').removeAttr('itemprop').removeAttr('itemscope').removeAttr('itemtype').attr('id', 'BVRRSummaryContainer').empty();;
                if ($('#BVRRContainer').is('div')) {
                    $BV.ui('rr', 'show_reviews', {
                        doShowContent: function() {
                            // If the container is hidden (such as behind a tab), put code here to make it visible 
                            //(open the tab).
                            if ($('body').hasClass('is-mobile')) {
                                // mobile
                                /*
							$('#BVRRSummaryContainer *').unbind();
							$('#BVRRSummaryContainer a.bv-rating-stars-container').unbind().bind('click', function() {
								sendEvent('review'); // DTM
								$('.tabs-panels .tabs-panel').removeClass('active');
								$('#ratings-reviews').addClass('active');
								$('.accordion-content').hide();
								$('#ratings-reviews .accordion-content').show();
								$('html, body').scrollTop($('#ratings-reviews').offset().top);
								return false;
							});
							*/
                                $('.tabs-panels .tabs-panel').removeClass('active');
                                $('#ratings-reviews').addClass('active');
                                $('.accordion-content').hide();
                                $('#ratings-reviews .accordion-content').show();
                                $('html, body').scrollTop($('#ratings-reviews').offset().top);
                                //$('#BVRRSummaryContainer a.bv-rating-stars-container').trigger('click');
                            } else {
                                // desktop
                                /*
							$('#BVRRSummaryContainer *').unbind();
							$('#BVRRSummaryContainer a.bv-rating-stars-container').unbind().bind('click', function() {
								sendEvent('review'); // DTM
								$('.product .tabs ul.tabs-nav li').each(function() {
									if($(this).find('a').attr('href') == "#ratings-reviews") {
										$(this).find('a').trigger("click");
										return false;
									}
								});
								return false;
							});
							*/
                                //$('#BVRRSummaryContainer a.bv-rating-stars-container').trigger('click');
                            }
                        }
                    });
                }
                if ($('#BVQAContainer').is('div')) {
                    $BV.ui('qa', 'show_questions', {
                        doShowContent: function() {
                            // If the container is hidden (such as behind a tab), put code here to make it visible
                            //(open the tab).
                        }
                    });
                }
            }
        }
    }
    // product list
    $('.product-lists').each(setBVRatings);
    // wtb 
    if ($('.where-to-buy').is('section')) {
        if (!window.$BV) return false;
        if ($BV) {
            var obj = $('.where-to-buy .product-area .details .rating');
            var pid = obj.data('modelid');
            var url = obj.find('a').eq(0).attr('href');
            if (!pid) return;
            obj.removeAttr('itemprop').removeAttr('itemscope').removeAttr('itemtype').attr('id', 'productlist-' + pid).empty();
            var sctxt = "$BV.ui( 'rr', 'inline_ratings', {productIds : {'" + pid + "':{url:'" + url + "'}},containerPrefix:'productlist'});";
            new Function(sctxt)();
        }
    }
});
