define(['global-config', 'jquery', 'common/lazyload'], function(globalConfig, $, lazyload) {

    'use strict';

    $('img.lazy').lazyload({
        // skip_invisible : false,
        appear: function(e) {
            var w = $(this).parent().width();
            var h = w * 2 / 3;
            $(this).css('width', w).css('height', h).next('.wrap_loading').remove();
            var loadCode = '<div class="wrap_loading"><div class="loading"></div></div>';
            $(this).attr('style', '').removeClass('lazy');
            $(this).after(loadCode);
            if ($('html').hasClass('lt-ie9')) {
                setTimeout(function() {
                    $('body').find('.vertical-align-wrap').css('display', 'block').css('display', 'table');
                }, 50)
            }
        },
        load: function(e) {

            $(this).removeClass('preload').next('.wrap_loading').remove();
            // video
            if (!$('html').hasClass('no-video')) {
                var chkVOD = $(this).parents('.module').hasClass('background-animation'),
                    chkYoutube = $(this).parents('.module').hasClass('column-video'),
                    isMobile = $('body').hasClass('is-mobile');
                if (chkVOD == true && !isMobile) {
                    $(this).parents('.module').addClass('offset');
                    $(window).scroll(function() {
                        $('.module.offset').each(function() {
                            if ($(this).find('.video-asset').attr('data-play') != '1') {
                                var ot = parseInt($(this).offset().top);
                                var ott = $(window).scrollTop();
                                ot = ot - 300;
                                if (ott >= ot) {
                                    var k = $(this).find('.video-asset').attr('data-video-id')
                                    var x = document.getElementById(k);
                                    $(this).find('.video-asset').attr('data-play', '1');
                                    if (!$(this).find('video').attr('loop')) {
                                        $(this).find('.video-asset').css({
                                            zIndex: 6
                                        });
                                    }
                                    x.play();
                                    $(this).find('a.play').css('visibility', 'hidden');
                                    $(this).find('a.stop').css('visibility', 'visible');
                                    x.onended = function() {
                                        $("html").stop().animate({
                                            "null": 1
                                        }, 500).promise().done(function() {
                                            x.pause();
                                            x.currentTime = 0;
                                            $(x).parents(".module").find('a.play').css('visibility', 'visible');
                                            $(x).parents(".module").find('a.stop').css('visibility', 'hidden');
                                            $(x).parents(".module").find('.video-asset').css({
                                                zIndex: "-1"
                                            });
                                            //console.log($(x).parents(".module"));
                                        });
                                    };

                                }
                            } else {
                                return;
                            }
                        })
                    });
                }
            }
            // - video
            // step chart 
            if ($('body').hasClass('is-mobile')) {
                var _stepChartM = $('.step-up-chart-m');
                var _chkW = $('.chart-section').outerWidth();
                var _chkWW = $('.step-up-chart-m').width();
                var _stepFlagM = false;
                var asd;
                var ace = new Array();

                _stepChartM.find('.hidden-chart-table').css('left', (_chkWW * 0.8) + 'px').css('max-width', _chkW + 1);
                _stepChartM.find('.item-list tr').each(function(e) {
                    asd = $(this).height();
                    $('.chart-section tbody tr').eq(e).height(asd);
                });
                _chkWW = $('.step-up-chart-m').width();
                _stepChartM.find('.hidden-chart-table').css('left', (_chkWW * 0.80) + 'px');
                _stepChartM.find('.item-list tbody tr, .product-spec-list tr').removeAttr('style');
                ace = [];

                _stepChartM.find('td').each(function(e) {
                    var x = $(this).outerHeight(true);
                    ace.push(x);
                    ace.sort(compNumberReverse);

                    function compNumberReverse(a, b) {
                        return b - a;
                    }

                });

                _stepChartM.find('.product-spec-list tr, .item-list tbody tr').height(ace[0]);
                setTimeout(function() {
                    var _chkMHeight = _stepChartM.find('.item-list tr').height();
                    var _fixTop = 14;
                    var _fixHeight = _chkMHeight + _fixTop;
                    _stepChartM.find('.chart-toggle').css('margin-top', (_fixHeight));
                }, 200)
                if ($(window).width() > 462) {
                    setTimeout(function() {
                        var _chkMHeight = _stepChartM.find('.item-list tr').height();
                        var _fixTop = 34;
                        var _fixHeight = _chkMHeight + _fixTop;
                        _stepChartM.find('.chart-toggle').css('margin-top', (_fixHeight));
                    }, 200)
                }
                setTimeout(function() {
                    if (_stepFlagM == true) {
                        var a = $('.step-up-chart-m').width();
                        var b = Math.floor(a * 0.55);
                        _stepChartM.find('.chart-scroll-box').width(b);
                        $('.hidden-chart-table').css('left', (_chkWW * 0.45) + 'px');
                    }
                }, 200);
            }

        }
    });
});
