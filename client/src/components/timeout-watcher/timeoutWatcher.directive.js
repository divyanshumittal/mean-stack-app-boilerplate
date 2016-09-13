(function (angular) {
    'use strict';

    angular
        .module('app.timeoutWatcher')
        .directive('timeoutWatcher', timeoutWatcher);

    function timeoutWatcher() {
        return {
            restrict: 'A',
            scope: {},
            template: '',
            controller: 'timeoutWatcherController',
            controllerAs: 'vm'
        }
    }

}(angular));