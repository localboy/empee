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
        vm.team = {};
        vm.id = $stateParams.teamID;



        function submit() {
            window.console.log(vm.team);
            Team.create(vm.team);
        }

        Team.all(function(data) {
            vm.teams = data.data;
//            console.log(data.data);
        });


        if(vm.id) {
            console.log("Hello world");
            /*Team.get(vm.id, function(data) {
                vm.team = data.data;
//                console.log(data.data);
            });*/

            var sayHello = function() {
                console.log("Hello World")
            }
            vm.team = Team.get(vm.id, sayHello);




        }

        function update() {
            Team.update(vm.team, function() {
//                $state.go('dashboard.teams');
                location.reload();
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