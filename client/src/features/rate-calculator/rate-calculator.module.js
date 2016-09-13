(function (angular) {
    'use strict';

    angular
        .module('app.rateCalculator', [
            'ngRoute',
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/rate-calculator', {
            templateUrl: 'src/features/rate-calculator/rate-calculator.html',
            controller: 'RateCalculatorController',
            controllerAs: 'vm'
        });
    }
}(angular));