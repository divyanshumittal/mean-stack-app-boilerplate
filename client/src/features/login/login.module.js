(function (angular) {
    'use strict';

    angular
        .module('app.login', [

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
        $routeProvider.when('/login', {
            templateUrl: 'src/features/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        });
    }
}(angular));