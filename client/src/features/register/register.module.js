(function (angular) {
    'use strict';

    angular
        .module('app.register', [

            // Core 3rd party modules:
            'ngRoute',
            'ui.bootstrap',

            // local modules
            'app.defaultContainer',
            'app.utility'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'src/features/register/register.html',
            controller: 'registerController',
            controllerAs: 'vm'
        });
    }
}(angular));