import 'angular-route';

const app = angular.module('route', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'route/tmpl/home.html'
        })
        .when('/products', {
            templateUrl: 'route/tmpl/products.html'
        })
        .when('/contact', {
            templateUrl: 'route/tmpl/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
