/**
 * The global main module.
 * @module global/global
 */
var lg = {},
    XSSfilter;
// page load
if (document.getElementById("page-dimmed")) {
    document.getElementById("page-dimmed").removeAttribute('class');
}

define(['jquery', 'jquery.cookie', 'common/dtm', 'common/app-header', 'common/app-header-mobile', 'common/app-header-search', 'common/app-footer', 'common/app-footer-nav', 'common/read-more' /* footer - seo text area */
        // ,'common/form-element' /* footer - cookie */
        , 'common/social-likes' /* share js */ , 'common/social-likes-share', 'common/popup', 'common/ecommerce' // mini cart
        , 'common/skip-to-content', 'common/beforeprint', 'common/search-result', 'common/sign-in', 'common/cart-link', 'common/browser-alert'
    ],
    function() {
        'use strict';

        $('.page-dimmed, #page-dimmed').remove();

        lg = {
            locale: "/" + $("html").data("countrycode"),
            productId: $("html").data("product-id")
        }
        if (navigator.userAgent.indexOf('Mac') != -1) {
            $("html").addClass("mac");
        } else {
            $("html").addClass("pc");
        }
        if (navigator.userAgent.match(/Trident\/7\./)) {
            $('html').addClass('ie11');
        }
        XSSfilter = function(content) {
            return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        $(document).on("click", ".sign-out", signOut);

        $(".move-top a").on({
            click: function(e) {
                e.preventDefault();
                //$(e.currentTarget).blur();
                $("html, body").animate({
                    scrollTop: 0
                }, 400)
            }
        })

    }, signOut = function(e) {
        var $elm = $(e.target)
        $.ajax({
            url: $elm.data('url'),
            type: 'post',
            cache: false,
            success: function(rtn) {
                if (rtn.result) {
                    location.href = $elm.data('return')
                } else {
                    alert(rtn.error)
                }
            },
            error: function(request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
            }
        })
    });
