(function (angular) {
    'use strict';

    angular
        .module('app', [

            // Core 3rd party modules:
            'ngRoute',
            'ui.grid',
            'ui.grid.pagination',

            // local modules
            'app.login',
            'app.register',
            'app.userDashboard',
            'app.qualifyCandidate',
            'app.rateCalculator',
            'app.submitOffer',
            'app.benefitsPackage',
            'app.offers',
            'app.activityLogs',
            'app.activityInsights',
            
            // component module
            'app.timeoutWatcher'
        ])
        .config(config);

    // @ngInject
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('app');

        $routeProvider.otherwise({ redirectTo: '/login' });
    }
}(angular));