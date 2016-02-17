(function() {
    'use strict';

    angular
        .module('empee.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    function LoginController($scope, $location, Authentication) {
        var vm = this;

        vm.login = login;

        active();

        function active() {
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        function login() {
            Authentication.login(vm.username, vm.password);
        }
    }
})();