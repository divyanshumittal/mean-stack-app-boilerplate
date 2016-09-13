(function (angular) {
    'use strict';

    angular
        .module('app.userDashboard', [

            // Core 3rd party modules:
            'ngRoute',

            // local modules
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/user-dashboard', {
            templateUrl: 'src/features/user-dashboard/user-dashboard.html',
            controller: 'UserDashboardController',
            controllerAs: 'vm'
        });
    }
}(angular));