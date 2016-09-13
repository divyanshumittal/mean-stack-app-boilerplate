(function (angular) {
    'use strict';

    angular
        .module('app.utility', [])
        .service('utilityService', utilityService);

    function utilityService() {
        var vm = this;
        vm.emailValidator = emailValidator;

        function emailValidator(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        vm.states = [
            'Phoenix',
            'Silicon Valley',
            'San Diego',
            'Orange County',
            'Los Angeles',
            'San Francisco',
            'Denver',
            'Stamford',
            'Washington D.C.',
            'Orlando',
            'Jacksonville',
            'Ft. Lauderdale',
            'Miami',
            'Tampa',
            'Atlanta, Corporate',
            'Atlanta',
            'Chicago Downtown',
            'Chicago',
            'Indianapolis',
            'Baltimore',
            'Boston',
            'Detroit',
            'Grand Rapids',
            'Minneapolis',
            'St. Louis',
            'Kansas City',
            'New Jersey',
            'New York City',
            'Charlotte',
            'Raleigh',
            'Columbus',
            'Cincinnati',
            'Toronto',
            'Portland',
            'Pittsburgh',
            'Philadelphia',
            'Nashville',
            'Dallas',
            'Houston',
            'Austin',
            'San Antonio',
            'Richmond',
            'Seattle'];
    }
}(angular));