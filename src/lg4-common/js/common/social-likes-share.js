define(['jquery', 'common/social-likes'], function($, socialLikes) {
    'use strict';

    // test
    //var a = $('.column-1 .share_box').html();
    //$('.open-template').append('<div class="share_box">' + a + '</div>');
    $(document).on('click', '.share_box > a, .share_box > button', function() {
        if (!$(this).parents('.share_box').find('.product_share').is('div')) {
            if ($.type(XSSfilter) != "function") {
                var XSSfilter = function(content) {
                    return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                };
            }
            if ($.type($(this).data('url')) == 'string') {
                $.ajax({
                    type: "GET",
                    timeout: 50000,
                    url: XSSfilter($(this).data('url')),
                    success: $.proxy(function(c) {
                        $(this).parents('.share_box').find('.product_share').remove();
                        $(this).parents('.share_box').append(c);
                        $('.social-likes').socialLikes();
                        $(this).parents('.share_box').find('.product_share').show();
                    }, this)
                });
            }
        } else {
            if ($(this).parents('.share_box').find('.product_share').css('display') != 'block') $(this).parents('.share_box').find('.product_share').show();
            else $(this).parents('.share_box').find('.product_share').hide();
        }
        return false;
    });
    $(document).on('click', '.share_box .product_share .close a', function() {
        $(this).parents('.share_box').find('.product_share').hide();
        $(this).parents('.share_box').find('> a').focus();
        return false;
    });
    $(document).on('click', '.share_box .share-close', function() {
        $(this).parents('.share_box').find('.product-sns-share').hide();
        $(this).parents('.share_box').find('> a').focus();
        return false;
    });

    // email shaare
    /*
	var emailShare = $('.app-tabs .purchase_options .product_share');
	var emailShareUrl = emailShare.find('ul.share_list').attr('data-url');
	var emailShareTitle = emailShare.find('ul.share_list li.email').attr('data-email-title');
	emailShare.find('li.email a').attr('href', 'mailto:?subject='+emailShareTitle+'&body='+emailShareUrl);
	*/

});
