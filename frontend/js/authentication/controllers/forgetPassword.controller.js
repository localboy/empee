(function() {
    'use strict';

    angular
        .module('empee.authentication.controllers')
        .controller('ForgetPasswordController', ForgetPasswordController)

    ForgetPasswordController.$inject = ['Authentication'];

    function ForgetPasswordController(Authentication) {
        var vm = this;
        vm.forgetPass = forgetPass;
        vm.message = {};

        function forgetPass() {
            /*var data = {
                email: vm.email
            };*/
            Authentication.forgetPass(vm.email).then(successFn, errorFn);

            function successFn(data, status, config, header, response) {
                vm.message.success = 'A password reset link sent to your mail';
                vm.email = '';
            }

            function errorFn(error, status, config, header, response) {
//                console.log(error.data);
                vm.message.danger = error.data;
            }
        }
    }
})();