(function (angular, _) {
    'use strict';

    angular
        .module('app.login')
        .controller('loginController', loginController);

    // @ngInject
    function loginController($location, utilityService, $http, $window) {
        var vm = this;

        vm.utilityService = utilityService;
        vm.userMessageDisplay = false;
        vm.userMessage = '';
        vm.loginUser = loginUser;
        vm.userEmail = 'trevor.benson@egeni.io';

        vm.validateUser = validateUser;
        vm.hideUserMessage = hideUserMessage;
        vm.init = init;

        init();

        function init() {
            $window.localStorage.removeItem('emailAddress');
            $window.localStorage.removeItem('timeStamp');
        }

        function loginUser() {
            if (vm.utilityService.emailValidator(vm.emailAdd)) {
                if (vm.password && vm.password.length > 6) {
                    loginApi({
                        username: vm.emailAdd,
                        password: vm.password
                    });
                } else {
                    vm.userMessage = 'Password should be greater than 6 characters';
                    vm.userMessageDisplay = true;
                }
            } else {
                vm.userMessage = 'Bad Email Address';
                vm.userMessageDisplay = true;
            }
        }

        function hideUserMessage() {
            vm.userMessageDisplay = false;
        }

        function loginApi(user) {
            $http.post('/login', user).then(function (res) {
                $window.localStorage.setItem('emailAddress', vm.emailAdd);
                $window.localStorage.setItem('location', res.data.user.location);
                $window.localStorage.setItem('timeStamp', Date.now());
                $location.path('/user-dashboard');
            }, function (res) {
                vm.userMessage = 'Email Address and Password Do not Match';
                vm.userMessageDisplay = true;
            })
        }

        function validateUser() {
            $location.path('/admin/offers');
        }
    }
}(angular, _));