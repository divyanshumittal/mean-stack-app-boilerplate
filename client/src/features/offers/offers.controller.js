(function (angular, _) {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    // @ngInject
    function OffersController($http) {
        var vm = this;
        vm.search;
        vm.offersData;
        vm.filteredOffersData = [];
        vm.filterOffersData = filterOffersData;

        vm.gridOptions = {
            rowHeight: 35,
            enableSorting: true,
            enableColumnMenus: false,
            columnDefs: [
                {
                    displayName: 'Candidate Name',
                    field: 'name',
                    width: '15%'
                },
                {
                    displayName: 'Client',
                    field: 'clientName',
                    width: '15%'
                },
                {
                    displayName: 'Rate',
                    field: 'payRate',
                    cellFilter: 'currency',
                    width: '5%'
                },
                {
                    displayName: 'Bill Rate',
                    field: 'billRate',
                    cellFilter: 'currency',
                    width: '5%'
                },
                {
                    displayName: 'Start Date',
                    field: 'startDate',
                    cellFilter: 'date:"MM/dd/yyyy"',
                    width: '10%'
                },
                {
                    displayName: '6 Month Date',
                    field: 'sixMonthDate',
                    cellFilter: 'date:"MM/dd/yyyy"',
                    width: '10%'
                },
                {
                    displayName: 'Min 6-Month',
                    field: 'isSixMonthsOrMore',
                    cellTemplate: 'src/cell-templates/offers-min-6-months.html',
                    width: '10%'
                },
                {
                    displayName: 'Recruiter',
                    field: 'recruiterEmail',
                    cellTemplate: 'src/cell-templates/offers-recruiter.html',
                    width: '15%'
                },
                {
                    displayName: 'Office',
                    field: 'location',
                    width: '15%'
                }
            ],
            paginationPageSizes: [25, 50, 100],
            paginationPageSize: 25,
            data: vm.filteredOffersData
        };
        vm.getAllCandidates = getAllCandidates;
        vm.getAllCandidates();

        function filterOffersData() {
            vm.filteredOffersData.splice(0,vm.filteredOffersData.length);

            if (vm.search === undefined) {
                _.forEach(vm.offersData, function(offer) {
                    vm.filteredOffersData.push(offer);
                });
                return;
            }

            vm.offersData.forEach(function(offer) {
                if (offer.name.toLowerCase().indexOf(vm.search.toLowerCase()) > -1
                    || offer.clientName.toLowerCase().indexOf(vm.search.toLowerCase()) > -1
                    || offer.recruiterEmail.toLowerCase().indexOf(vm.search.toLowerCase()) > -1
                    || offer.location.toLowerCase().indexOf(vm.search.toLowerCase()) > -1) {
                    vm.filteredOffersData.push(offer);
                }
            });
        }


        function getAllCandidates () {
            $http.get('/candidate/all').then(function (response) {
                vm.offersData = response.data.data;
                filterOffersData();
            });
        }
    }
}(angular, _));