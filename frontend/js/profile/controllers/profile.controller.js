(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$stateParams', 'Profile', 'jwtHelper'];

    function ProfileController($stateParams, Profile, jwtHelper) {
        var vm = this;
//        vm.profile = undefined;
        vm.create = create;
        vm.update = update;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.id = $stateParams.userID;
//        vm.users = users;

        active();

        function active() {
            var token = localStorage.getItem('empee.token');
            var userid = jwtHelper.decodeToken(token).user_id;
//            console.log(username);
            Profile.get(userid).then(profileSuccessFn, profileErrorFn);

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

        function create() {
            Profile.create(vm.user);
            vm.users.push({
                    'username': vm.user.username,
                    'email': vm.user.email
                });
        }

        function deleteUser(id, user) {
            Profile.deleteUser(id);

            var index = vm.users.indexOf(user);
            vm.users.splice(index, 1);
        }

        function update() {
            console.log(vm.profile);
            Profile.update(vm.profile);
        }

        function updateUser() {
            console.log(vm.profile);
            Profile.updateUser(vm.profile);
        }

        Profile.all(function(data) {
            vm.users = data.data;
//            window.console.log(vm.projects);
        });
    }
})();