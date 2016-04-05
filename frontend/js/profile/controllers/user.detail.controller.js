(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('UserDetailController', UserDetailController);

    UserDetailController.$inject = ['$stateParams', '$uibModal', 'Profile', 'jwtHelper', '$scope','$log'];

    function UserDetailController ($stateParams, $uibModal, Profile, jwtHelper, $scope, $log) {
        var vm = this;

        vm.profile = profile;

        function profile(id) {
            Profile.get(id).then(getSuccessFn, getErrorFn);

            function getSuccessFn (data, status, headers, config, response) {
                console.log('success', data);
            }
            function getErrorFn (data, status, headers, config, response) {
                console.log('Error', response);
            }
        }
    }
})();