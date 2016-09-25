define(['jquery'], function($) {
    'use strict';
    bindDTM();
});

/*
function sendEvent(linkname,triggerName) {
	if(digitalData) {
		digitalData.eventData={
		  linkName: linkname, //link name is the name of the link being clicked the by the visitor
		  eventAction: triggerName //this will be the event triggered - link click
		}
		_satellite.track('sendEvent');
	}
}
*/
function sendEvent(e, t) {
    if (e == "super-category-link" || e == "category-mega-link" || e == "sub-category-link" || e == "nav") {
        digitalData && (digitalData.eventData = {
            linkName: e,
            eventAction: t
        }, _satellite.track("sendGnbEvent"))
    } else {
        digitalData && (digitalData.eventData = {
            linkName: e,
            eventAction: t
        }, _satellite.track("sendEvent"))
    }
}

/*
function bindDTM() {
	$('a, button').each(function(i) {
		if($(this).data('sc-item') && $(this).data('sc-item')!="undefined" && (!$(this).data('has-sc') || $(this).data('has-sc') != 1)) {
			var n = $(this).data('sc-item');
			var v = "";
			if($(this).data('sc-value') && $(this).data('sc-value')!="undefined") v=$(this).data('sc-value');
			$(this).unbind('click').bind('click', function() {
				$(this).data('has-sc', 1);
				console.log(n+'/'+v);
				//sendEvent(n,v);
			});
		}
	});
}
*/
function bindDTM() {
    $(document).on('click', 'a, button', function() {
        if ($(this).data('sc-item') && $(this).data('sc-item') != "undefined") {
            var n = $(this).data('sc-item');
            var v = "";
            if ($(this).data('sc-value') && $(this).data('sc-value') != "undefined") v = $(this).data('sc-value');
            // console.log(n+'/'+v);
            sendEvent(n, v);
        }
    });
}
