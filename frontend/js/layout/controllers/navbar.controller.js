(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state', 'Authentication']

    function NavbarController($scope, $state, Authentication) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            Authentication.logout();
            $state.go('login');
        }
    }
})();