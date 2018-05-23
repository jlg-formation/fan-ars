(function() {
    'use strict';

    var app = angular.module('layout', []);

    app.component('arsHeader', {
        templateUrl: 'layout/tmpl/ars-header.html',
    });

    app.component('arsBody', {
        templateUrl: 'layout/tmpl/ars-body.html',
    });

    app.component('arsFooter', {
        templateUrl: 'layout/tmpl/ars-footer.html',
    });

})();
