(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$state','$stateParams', 'Team'];

    function TeamController ($state, $stateParams, Team) {
        var vm = this;
        vm.submit = submit;
        vm.update = update;
        vm.addRow = addRow;
        vm.inputs = [];
        vm.team = {};
        vm.team.member = [];
        vm.id = $stateParams.teamID;



        function submit() {
            window.console.log(vm.team);
            Team.create(vm.team);
        }

        Team.all(function(data) {
            vm.teams = data.data;
        });


        if(vm.id) {
            Team.get(vm.id, function(data) {
                vm.team = data.data;
            });
        }

        function update() {
            Team.update(vm.team, function() {
//                $state.go('dashboard.teams');
                //location.reload();
            });
        }

        function addRow () {
            /*vm.team.member.push(
                {
                    user: 'row #',
                    role: 'this is new'
                }
            );*/
            vm.team.member.push({});
        }
        /*function teams () {
            Teams.all().then(getSuccessFn, getErrorFn);

            function getSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }*/
    }
})();