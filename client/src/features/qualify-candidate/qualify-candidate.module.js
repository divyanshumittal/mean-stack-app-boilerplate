(function (angular) {
    'use strict';

    angular
        .module('app.qualifyCandidate', [
            'ngRoute',
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/qualify-candidate', {
            templateUrl: 'src/features/qualify-candidate/qualify-candidate.html',
            controller: 'QualifyCandidateController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/qualify-candidate/contact-egen', {
            templateUrl: 'src/features/qualify-candidate/contact-egen/contact-egen.html',
            controller: 'ContactEgenController',
            controllerAs: 'vm'
        });
    }
}(angular));