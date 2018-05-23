import 'angular';
import './layout/layout.module';
import './route/route.module';

const app = angular.module('main', ['layout', 'route']);

app.component('asrHello', {
    template: 'Hello {{$ctrl.name}} <button ng-click="$ctrl.sayHello()">Click me!</button>',
    bindings: {
        name: '@',
    },
    controller: function ASRHelloCtrl(helloService) {
        this.sayHello = helloService.sayHello
    }
});

app.service('helloService', function HelloService($window) {
    this.sayHello = function () {
        console.log('Hello hello...');
        $window.alert('Hello hello...');
    }
});
