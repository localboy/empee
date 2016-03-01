(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state', 'jwtHelper', 'Authentication']

    function NavbarController($scope, $state, jwtHelper, Authentication) {
        var vm = this;
        vm.logout = logout;
        var token = localStorage.getItem('empee.token');
        vm.userid = jwtHelper.decodeToken(token).user_id;
        vm.username = jwtHelper.decodeToken(token).username;
//        console.log(vm.userid);

        function logout() {
            Authentication.logout();
            $state.go('login');
        }
    }
})();