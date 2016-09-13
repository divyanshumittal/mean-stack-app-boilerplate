(function (angular) {
    'use strict';

    angular
        .module('app.userDashboard')
        .controller('UserDashboardController', UserDashboardController);

    // @ngInject
    function UserDashboardController($location) {
        var vm = this;

        vm.tiles = [
            {
                tileName: 'QUALIFY H1-B CANDIDATE',
                view: 'qualify-candidate'
            },
            {
                tileName: 'HOURLY RATE CALCULATOR',
                view: 'rate-calculator'
            },
            {
                tileName: 'SEND BENEFITS PACKAGE',
                view: 'benefits-package'
            },
            {
                tileName: 'SUBMIT OFFER NOTIFICATION',
                view: 'submit-offer'
            }
        ];
        vm.hoverInTile = hoverInTile;
        vm.hoverOutTile = hoverOutTile;
        vm.go = go;

        function hoverInTile(data) {
            data.hover = true;
        }

        function hoverOutTile(data) {
            data.hover = false;
        }

        function go(data) {
            $location.path('/' + data.view);
        }
    }
}(angular));