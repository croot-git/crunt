<!-- <script type="text/javascript" src="/us/foresee/foresee-trigger.js"></script> -->

<script type="text/javascript">
    // Instructions: please embed this snippet directly into every page in your website template.
    // For optimal performance, this must be embedded directly into the template, not referenced
    // as an external file.

    // Answers Cloud Services Embed Script v1.02
    // DO NOT MODIFY BELOW THIS LINE *****************************************
    ;(function (g) {
        var d = document, i, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0],
                aex = {
					// 라이브시 다음 경로로 변경 해 주세요 - //gateway.answerscloud.com/lge-com/production/gateway.min.js
                    "src": "//gateway.answerscloud.com/lge-com/staging/gateway.min.js", 
                    "type": "text/javascript",
                    "async": "true",
                    "data-vendor": "acs",
                    "data-role": "gateway"
                };
        for (var attr in aex) { am.setAttribute(attr,aex[attr]); }
        h.appendChild(am);
        g['acsReady'] = function () {var aT = '__acsReady__', args = Array.prototype.slice.call(arguments, 0),k = setInterval(function () {if (typeof g[aT] === 'function') {clearInterval(k);for (i = 0; i < args.length; i++) {g[aT].call(g, function(fn) { return function() { setTimeout(fn, 1) };}(args[i]));}}}, 50);};
    })(window);
    // DO NOT MODIFY ABOVE THIS LINE *****************************************
</script>