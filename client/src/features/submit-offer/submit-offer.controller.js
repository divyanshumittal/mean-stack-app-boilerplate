(function (angular, moment) {
    'use strict';

    angular
        .module('app.submitOffer')
        .controller('SubmitOfferController', SubmitOfferController);

    // @ngInject
    function SubmitOfferController($http, $window) {
        var vm = this;
        vm.update = update;
        vm.getAllCandidates = getAllCandidates;

        vm.getAllCandidates();

        function update(user) {
            user.location = $window.localStorage.getItem('location');
            user.recruiterEmail = $window.localStorage.getItem('emailAddress');
            user.sixMonthDate = moment(user.startDate).utc().add(6, 'months').format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';

            $http.post('/candidate',
                user
            ).then(function (res) {
                })
        }

        function getAllCandidates() {
            $http.get('/candidate/all').then(function (res) {
                vm.candidates = res.data;
            });
        }
    }
}(angular, moment));