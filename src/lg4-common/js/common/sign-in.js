define(['jquery', 'ic/ic', 'ic/ui/module'], function($, ic, Module) {
    'use strict';


    var signIn,
        events = ic.events;

    var setSignIn = function(el, options) {
        var self = this;
        // Call the parent constructor
        setSignIn.superclass.constructor.call(self, el, options);
        self._init();
    };
    ic.util.inherits(setSignIn, Module);
    signIn = setSignIn.prototype;
    signIn._defaults = {
        //active class
        ac: 'active'
    };
    signIn._init = function() {
        var self = this,
            eventHandler = $.proxy(self._handleEvent, self),
            d = {}
            /*
		function setCookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; domain=.test.lg.com;" + expires;
		}
		setCookie ("LG4_LOGIN", "N", 22222)
		*/

        //d = self._callAjax();
        var ck = self._getCookie("LG4_LOGIN");
        if (ck == "" || ck == "Y") {
            var url = self.options.uri;
            $.ajax({
                url: url,
                type: "post",
                dataType: "json",
                success: function(d) {
                    if (d.loginFlag == "N") {
                        self.$el.find(".flag-true").remove();
                        if ($("body.is-mobile")[0]) {
                            //$("#mobileFlyoutNav a.sign-anchor").attr("href", $("#mobileFlyoutNav a.sign-anchor").data("signin"));
                            $("#mobileFlyoutNav .mobile-login-form").remove();
                        }
                    } else if (d.loginFlag == "Y") {
                        self.$el.find(".flag-false").remove();
                        self.$el.find("span.first-name").text(d.firstName);
                        self.$el.find("span.last-name").text(d.lastName);
                    };
                },
                error: $.proxy(function(ddd, b, c) {
                    // console.log(d.status, c);
                    return false;
                }),
            });
        } else if (ck == "N") {
            d.loginFlag = "N";
            self.$el.find(".flag-true").remove();
            if ($("body.is-mobile")[0]) {
                //$("#mobileFlyoutNav a.sign-anchor").attr("href", $("#mobileFlyoutNav a.sign-anchor").data("signin"));
                $("#mobileFlyoutNav .mobile-login-form").remove();
            }
        }
        self.$el.addClass("active");
        // attatch event
        //self.$major.on('eventName', $.proxy(self._functionName, self));
    }

    signIn._getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";

    }

    ic.jquery.plugin('setSignIn', setSignIn, '.mylg-status');

    return setSignIn;
});
