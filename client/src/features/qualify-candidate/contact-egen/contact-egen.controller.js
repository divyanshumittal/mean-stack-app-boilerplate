(function (angular) {
    'use strict';

    angular
        .module('app.qualifyCandidate')
        .controller('ContactEgenController', ContactEgenController);

    // @ngInject
    function ContactEgenController($window) {
        var vm = this;
        var email = 'trevor.benson@egeni.com';
        vm.send = send;

        function send() {
            $window.location.href =
                'mailto:' + email +
                '?subject=' + vm.candidateName + ' - ' + vm.candidateEmail +
                '&body=' + vm.message;
        }
    }
}(angular));