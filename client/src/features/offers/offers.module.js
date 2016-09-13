(function (angular) {
    'use strict';

    angular
        .module('app.offers', [

            // Core 3rd party modules:
            'ngRoute',
            'ui.bootstrap'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/admin/offers', {
            templateUrl: 'src/features/offers/offers.html',
            controller: 'OffersController',
            controllerAs: 'vm'
        });
    }
}(angular));