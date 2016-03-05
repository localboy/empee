(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$state','$stateParams', 'Team'];

    function TeamController ($state, $stateParams, Team) {
        var vm = this;
        vm.teams = 'Nothing';
        vm.submit = submit;
        vm.update = update;
        vm.addRow = addRow;
        vm.team = [];
        vm.id = $stateParams.teamID;



        function submit() {
            Team.create(vm.team, function() {
                $state.go('dashboard.teams');
            });
        }

        Team.all(function(data) {
            vm.teams = data.data;
//            console.log(data.data);
        });



        if(vm.id) {
            /*Team.get(vm.id, function(data) {
                vm.team = data.data;
//                console.log(data.data);
            });*/
            Team.get(vm.id).then(getSuccessFn, getErrorFn);

            function getSuccessFn(data, status, header, config, response) {
//                console.log(data.data);
                vm.team = data.data;
            }

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            };
        }

        function update() {
            Team.update(vm.team, function() {
                $state.go('dashboard.teams');
            });
        }

        function addRow () {
            vm.team.member.push(
                { user: 'row #',
                 role: 'this is new'
                 }
            );
//            alert('hello');
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