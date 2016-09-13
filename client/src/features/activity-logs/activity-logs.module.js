(function (angular) {
    'use strict';

    angular
        .module('app.activityLogs', [
            'ngRoute'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/admin/activity/logs', {
            templateUrl: 'src/features/activity-logs/activity-logs.html',
            controller: 'ActivityLogsController',
            controllerAs: 'vm'
        });
    }
}(angular));