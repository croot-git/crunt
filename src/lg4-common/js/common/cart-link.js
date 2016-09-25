define(['jquery'], function($) {
    'use strict';
    deleteLoginCookie();
});

function deleteLoginCookie() {
    $("a").bind({
        click: function(e) {
            if (typeof storeUrl != 'undefined' && e.currentTarget.href.indexOf(storeUrl) > -1) {
                //e.preventDefault()
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() - 1);
                document.cookie = "LG4_LOGIN" + "= " + "; expires=" + expireDate.toGMTString() + "; path=/; domain=." + document.domain + ";";
            }
        }
    })
}
