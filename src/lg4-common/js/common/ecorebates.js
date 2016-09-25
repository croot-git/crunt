define(['global-config', 'jquery'], function(globalConfig, $) {
    'use strict';
    (function($) {
        $.fn.runEcorebates = function(f) {
            var j = {
                    reInit: null
                },
                v = $.extend(j, f),
                $o = $(this);
            return this.each(function() {
                if ($o.data("active") !== true) {
                    var _id = "eco",
                        _model = $o.attr("data-modelId"),
                        h = '<div id="' + _id + eco_i + '" class="product_rebate"></div>',
                        j = '<script type="text/javascript">var _ecr = _ecr || {}; _ecr["' + _id + eco_i + '"] = "' + _model + '";</script>';
                    $o.append(h).append(j).data("active", true);
                };
                eco_i++;
                $("body").attr("data-ecorebates", eco_i);
            });
        }
    })(jQuery);


    /*
    $(".ecorebates-div[data-id='ecorebates-5']").runEcorebates();
    // RUN Ecorebates
    */
});
