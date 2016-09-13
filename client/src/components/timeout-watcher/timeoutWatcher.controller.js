(function (angular) {
    'use strict';

    angular
        .module('app.timeoutWatcher')
        .controller('timeoutWatcherController', timeoutWatcherController);

    function timeoutWatcherController($window, $location) {
        var vm = this;

        vm.init = init;

        init();

        function init() {
            var timeStamp = $window.localStorage.getItem('timeStamp');
            if (!timeStamp || Date.now() - timeStamp > 1000 * 60 * 60) {
                $window.localStorage.removeItem('timeStamp');
                $window.localStorage.removeItem('emailAddress');
                $location.path('/login');
            }
        }
    }

}(angular));