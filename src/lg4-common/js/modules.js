var require = {
    'modules': [{
        'name': 'global/global.main',
        'override': {
            'wrap': {
                'startFile': 'ui/lg4-common/bower_components/almond/almond.js'
            }
        }
    }, {
        'name': 'products/products.main',
        'exclude': ['global', 'jquery', 'lodash']
    }, {
        'name': 'support/support.main',
        'exclude': ['global', 'products', 'jquery', 'lodash']
    }]
};
