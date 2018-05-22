(function() {
    'use strict';

    var app = angular.module('main', []);

    app.component('asrHello', {
        template: 'Hello {{$ctrl.name}}',
        bindings: {
            name: '@',
        },
    });
})();
