(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$stateParams', 'Profile', 'jwtHelper'];

    function ProfileController($stateParams, Profile, jwtHelper) {
        var vm = this;
        vm.profile = undefined;
        vm.id = $stateParams.userID;
//        vm.users = users;

        active();

        function active() {
            var token = localStorage.getItem('empee.token');
            var username = jwtHelper.decodeToken(token).user_id;
//            console.log(username);
            Profile.get(username).then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }

        }

        if(vm.id) {
            Profile.get(vm.id).then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }
        }

        Profile.all().then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.users = data.data;
//                console.log(vm.users);
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }

        /*function users() {
            return Profile.all().then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                console.log(data.data);
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }
        }*/
    }
})();