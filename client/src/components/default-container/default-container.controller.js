(function (angular) {
    'use strict';

    angular
        .module('app.defaultContainer')
        .controller('DefaultContainerController', DefaultContainerController);

    function DefaultContainerController() {
        var vm = this;

        vm.email = 'trevor.benson@egeni.com';
        vm.phone = '630-870-1935';
    }

}(angular));