(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$state', 'Team'];

    function TeamController ($state, Team) {
        var vm = this;
        vm.teams = 'Nothing';
        vm.submit = submit;

        function submit() {
            Team.create(vm.team, function() {
                $state.go('dashboard.teams');
            });
        }

        Team.all(function(data) {
            vm.teams = data.data;
//            console.log(data.data);
        });

        /*function teams () {
            Teams.all().then(allSuccessFn, allErrorFn);

            function allSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }

            function allErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }*/
    }
})();