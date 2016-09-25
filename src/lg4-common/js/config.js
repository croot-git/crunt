var require = {
    'baseUrl': '/lg4-common/js',
    'paths': {
        'common': 'common',
        'jquery': '../bower_components/jquery/jquery.min',
        //'jquery': '../bower_components/jquery-legacy/jquery',
        //'jqueryui': '../bower_components/jqueryui/ui/minified/jquery-ui.min',
        'jqueryui': '../bower_components/jqueryui/ui/minified/jquery-ui.min',
        // 'modernizr': '../bower_components/modernizr/modernizr',
        'text': '../bower_components/requirejs-text/text',
        'ic': '../bower_components/ic/lib',
        'fastclick': '../bower_components/fastclick/lib/fastclick',
        'swipe': '../bower_components/swipe/swipe',
        'slick-carousel': '../bower_components/slick-carousel_new/slick/slick',
        'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
        'lodash': '../bower_components/lodash/dist/lodash',
        'gremlins': '../bower_components/gremlins.js/gremlins.min',
        'chosen': '../bower_components/bower-chosen-master/chosen.jquery',
        'touchswipe': '../bower_components/jquery.touchSwipe/jquery.touchSwipe'
    },
    'shim': {
        'swipe': {
            'exports': 'Swipe'
        },
        "jqueryui": ['jquery'],
        "chosen": ['jquery']
    },
    'packages': ['global', 'products']
};
