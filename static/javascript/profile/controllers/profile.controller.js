(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('ProfileController', ProfileController)

//    ProfileController.$inject = ['$routeParams', 'Profile'];
    ProfileController.$inject = ['Profile'];

    function ProfileController(Profile) {
        var vm = this;
        vm.profile = undefined;

        active();

        function active() {
//            var username = $routeParams.username;
//            console.log(username);
        }
    }
})();