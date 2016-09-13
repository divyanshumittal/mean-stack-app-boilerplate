(function (angular, _) {
    'use strict';

    angular
        .module('app.activityInsights')
        .controller('ActivityInsightsController', ActivityInsightsController);

    // @ngInject
    function ActivityInsightsController($location, $http) {
        var vm = this;
        vm.search;
        vm.totalLogins = 0;
        vm.locationsData = [];
        vm.usersData = [];
        vm.getLocationsData = getLocationsData;
        vm.getUsersData = getUsersData;

        vm.getLocationsData();
        vm.getUsersData();

        vm.topOfficesGridOptions = {
            rowHeight: 35,
            enableSorting: true,
            enableColumnMenus: false,
            columnDefs: [
                {
                    displayName: 'Office',
                    field: 'location',
                    width: '50%'
                },
                {
                    displayName: 'Rank',
                    field: 'rank',
                    width: '25%'
                },
                {
                    displayName: 'Total Logins',
                    field: 'count',
                    width: '25%'
                }
            ],
            paginationPageSizes: [25, 50, 100],
            paginationPageSize: 25,
            data: vm.usersData
        };

        vm.topRecruitersGridOptions = {
            rowHeight: 35,
            enableSorting: true,
            enableColumnMenus: false,
            columnDefs: [
                {
                    displayName: 'Name',
                    field: 'username',
                    cellTemplate: 'src/cell-templates/insights-name.html',
                    width: '50%'
                },
                {
                    displayName: 'Rank',
                    field: 'rank',
                    width: '25%'
                },
                {
                    displayName: 'Total Logins',
                    field: 'count',
                    width: '25%'
                }
            ],
            paginationPageSizes: [25, 50, 100],
            paginationPageSize: 25,
            data: vm.usersData
        };

        function getLocationsData() {
            $http.get('/locations/all/sorted/count').then(function (response) {
                vm.locationsData.splice(0, vm.locationsData.length);
                _.forEach(response.data.data, function(user) {
                    vm.locationsData.push(user);
                });
            });
        }

        function getUsersData() {
            $http.get('/users/all/sorted/count').then(function (response) {
                vm.usersData.splice(0, vm.usersData.length);
                _.forEach(response.data.data, function(user) {
                    vm.totalLogins += user.count;
                    vm.usersData.push(user);
                });
            });
        }
    }
}(angular, _));