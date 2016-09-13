(function (angular) {
    'use strict';

    angular
        .module('app.activityInsights', [
            'ngRoute'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/admin/activity/insights', {
            templateUrl: 'src/features/activity-insights/activity-insights.html',
            controller: 'ActivityInsightsController',
            controllerAs: 'vm'
        });
    }
}(angular));