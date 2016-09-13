(function (angular) {
    'use strict';

    angular
        .module('app.benefitsPackage', [
            'ngRoute',
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/benefits-package', {
            templateUrl: 'src/features/benefits-package/benefits-package.html',
            controller: 'BenefitsPackageController',
            controllerAs: 'vm'
        });
    }
}(angular));