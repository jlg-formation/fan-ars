import '@uirouter/angularjs';

import ProductCtrl from './ProductCtrl.controller';

const app = angular.module('route', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    const homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'route/tmpl/home.html'
    };

    const productState = {
        name: 'products',
        url: '/products',
        templateUrl: 'route/tmpl/products.html',
        controller: ProductCtrl,
        controllerAs: '$ctrl',
    };

    const contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'route/tmpl/contact.html'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(productState);
    $stateProvider.state(contactState);

    $urlRouterProvider.otherwise('/');
});
