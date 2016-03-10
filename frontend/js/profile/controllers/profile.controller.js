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

        //Pagination
        vm.itemsPerPage=3;
        vm.currentPage = 1;

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
            var user = {
                id: vm.profile.id,
                first_name: vm.profile.first_name,
                last_name: vm.profile.last_name,
                username: vm.profile.username,
                email: vm.profile.email,
                password: vm.profile.password

            }

            var account = {
                id: vm.profile.account.id,
                user: vm.profile.account.user,
                phone: vm.profile.account.phone,
                marital_status: vm.profile.account.marital_status,
                gender: vm.profile.account.gender,
                date_of_birth: vm.profile.account.date_of_birth,
                hobby: vm.profile.account.hobby,
                address: vm.profile.account.address,
                bio: vm.profile.account.bio
            }
            console.log(user);
            Profile.updateUser(user);
            Profile.updateAccount(account);
            $('#myModal').modal('toggle');
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