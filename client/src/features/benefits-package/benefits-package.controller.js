(function (angular) {
    'use strict';

    angular
        .module('app.benefitsPackage')
        .controller('BenefitsPackageController', BenefitsPackageController);

    // @ngInject
    function BenefitsPackageController($window) {
        var vm = this;
        var subject = 'Egen Solutions/Insight Global benefits';

        vm.candidateEmail = '';
        vm.body = 'Thank you for taking the time to speak  with us. Please find General information about Egen Solutions ' +
            'and their H1 transfer process, along with Healthcare Benefits. \n' +
            ' If you have any questions regarding this, please contact Trevor, who’s information can be found below. \n\n' +
            'Trevor Benson- Sales/Partnerships \n' +
            'trevor.benson@egeni.com' + '\n' +
            '(630) 870-1935' + '\n \n' +
            'https://s3.amazonaws.com/insight-egen/Egen-IG-Candidate.pdf' +'\n' +
            'https://s3.amazonaws.com/insight-egen/2016+Egen+Benefit+Summary+-+External+2500+Global+Transfer.pdf';
        vm.send = send;

        function send() {
            $window.location.href =
                'mailto:' + vm.candidateEmail +
                '?subject=' + subject +
                '&body=' + encodeURIComponent(vm.body);
        }
    }
}(angular));