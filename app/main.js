(function() {
    'use strict';

    var app = angular.module('main', ['layout']);

    app.component('asrHello', {
        template: 'Hello {{$ctrl.name}}',
        bindings: {
            name: '@',
        },
    });
})();
