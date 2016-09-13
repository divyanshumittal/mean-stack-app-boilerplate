(function (angular) {
    'use strict';

    angular
        .module('app.activityLogs')
        .controller('ActivityLogsController', ActivityLogsController);

    // @ngInject
    function ActivityLogsController($location, $http) {
        var vm = this;
        vm.search;
        vm.loginData;
        vm.filteredLoginData = [];
        vm.filterLoginData = filterLoginData;

        vm.loginData = [];

        vm.gridOptions = {
            rowHeight: 35,
            enableSorting: true,
            enableColumnMenus: false,
            columnDefs: [
                {
                    displayName: 'Recruiter Name',
                    field: 'username',
                    cellTemplate: 'src/cell-templates/insights-name.html',
                    width: '40%'
                },
                {
                    displayName: 'Office',
                    field: 'location',
                    width: '25%'
                },
                {
                    displayName: 'Date',
                    field: 'date',
                    width: '25%'
                },
                {
                    displayName: 'Time',
                    field: 'time',
                    width: '15%'
                }
            ],
            paginationPageSizes: [25, 50, 100],
            paginationPageSize: 25,
            data: vm.filteredLoginData
        };
        vm.getAllLoginLogs = getAllLoginLogs;
        vm.getAllLoginLogs();

        function filterLoginData() {
            vm.filteredLoginData.splice(0,vm.filteredLoginData.length);

            if (vm.search === undefined) {
                _.forEach(vm.loginData, function(loginInfo) {
                    vm.filteredLoginData.push(loginInfo);
                });
                return;
            }

            vm.loginData.forEach(function(loginInfo) {
                if (loginInfo.name.toLowerCase().indexOf(vm.search.toLowerCase()) > -1
                    || loginInfo.location.toLowerCase().indexOf(vm.search.toLowerCase()) > -1) {
                    vm.filteredLoginData.push(loginInfo);
                }
            });
        }

        function getAllLoginLogs () {
            $http.get('/logs/all').then(function (response) {
                vm.loginData = response.data.data;
                filterLoginData();
            });
        }
    }
}(angular));