(function (angular) {
    'use strict';

    angular
        .module('app.submitOffer', [
            'ngRoute',
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/submit-offer', {
            templateUrl: 'src/features/submit-offer/submit-offer.html',
            controller: 'SubmitOfferController',
            controllerAs: 'vm'
        });
    }
}(angular));