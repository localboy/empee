(function() {
    'use strict';

    angular
        .module('empee.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', '$state', 'Authentication'];

    function LoginController($scope, $location, $state, Authentication) {
        var vm = this;

        vm.login = login;

        active();

        function active() {
            if (Authentication.isAuthenticated()) {
                $state.go('dashboard');
            }
        }

        function login() {
            Authentication.login(vm.username, vm.password, function() {
                $state.go('dashboard');
            });
            /*if (Authentication.isAuthenticated()) {
                $state.go('dashboard');
            }*/
        }

    }
})();