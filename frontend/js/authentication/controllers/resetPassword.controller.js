(function() {
    'use strict';

    angular
        .module('empee.authentication.controllers')
        .controller('ResetPasswordController', ResetPasswordController);

    ResetPasswordController.$inject = ['Authentication', '$stateParams'];

    function ResetPasswordController(Authentication, $stateParams) {
        var vm = this;
        vm.resetPass = resetPass;
        vm.token = $stateParams.token;
        vm.message = {};
        console.log(vm.token);
        function resetPass() {

            var data = {
                new_password: vm.new_password,
                confirm_password: vm.confirm_password,
                token: vm.token
            }

            Authentication.resetPass(data).then(successFn, errorFn);

            function successFn(data, status, config, header, response) {
                vm.message.success = 'Password successfully changed';
            }

            function errorFn(error, status, config, header, response) {
//                console.log(error.data);
                vm.message.danger = error.data;
            }
        }
    }
})();