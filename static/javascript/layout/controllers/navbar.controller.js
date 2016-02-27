(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication', 'jwtHelper']

    function NavbarController($scope, Authentication, jwtHelper) {
        var vm = this;
        vm.logout = logout;
        vm.token = localStorage.getItem('empee.token');
        vm.username = jwtHelper.decodeToken(vm.token).username;
        console.log(vm.username);
        function logout() {
            Authentication.logout();
        }
    }
})();