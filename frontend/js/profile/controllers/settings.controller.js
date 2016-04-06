(function() {
    'use restrict';

    angular
        .module('empee.profile.controllers')
        .controller('SettingController', SettingController);

    SettingController.$inject = ['Profile', '$timeout', '$state'];

    function SettingController(Profile, $timeout, $state) {
        var vm = this;
        vm.message = {}
        vm.changPassword = changPassword;

        function changPassword(){
            Profile.changePass(vm.user).then(successFn, errorFn);

            function successFn(data, status, header, response){
                vm.message.success = 'Password change successful';
                vm.user = {};
                $timeout(function(){
                    $state.go('login');
                }, 2000);
            }

            function errorFn(error, status, header, response){
                vm.message.danger = error.data;
                vm.user = {};
            }
        }
    }
})();