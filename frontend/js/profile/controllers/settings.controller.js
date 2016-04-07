(function() {
    'use restrict';

    angular
        .module('empee.profile.controllers')
        .controller('SettingController', SettingController);

    SettingController.$inject = ['Profile', '$timeout', '$state', 'Authentication'];

    function SettingController(Profile, $timeout, $state, Authentication) {
        var vm = this;
        vm.message = {}
        vm.changPassword = changPassword;

        function changPassword(){
            Profile.changePass(vm.user).then(successFn, errorFn);

            function successFn(data, status, header, response){
                vm.message.success = 'Password change successful';
                vm.user = {};
                $timeout(function(){
                Authentication.logout();
                    $state.go('login');
                    console.log($state);
                }, 2000);
            }

            function errorFn(error, status, header, response){
                vm.message.danger = error.data;
                vm.user = {};
            }
        }
    }
})();