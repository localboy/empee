(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('ProfileController', ProfileController)

//    ProfileController.$inject = ['$routeParams', 'Profile'];
    ProfileController.$inject = ['Profile', 'jwtHelper'];

    function ProfileController(Profile, jwtHelper) {
        var vm = this;
        vm.profile = undefined;

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
    }
})();