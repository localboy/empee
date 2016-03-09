(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$state','$stateParams', 'Team'];

    function TeamController ($state, $stateParams, Team) {
        var vm = this;
        vm.addRow = addRow;
        vm.deleteMember = deleteMember;
        vm.deleteTeam = deleteTeam;
        vm.id = $stateParams.teamID;
        vm.inputs = [];
        vm.submit = submit;
        vm.team = {};
        vm.team.member = [];
        vm.update = update;

        function deleteMember(memId, item) {
            if(memId){
                Team.deleteMember(memId);
            }

            var index = vm.team.member.indexOf(item);
            vm.team.member.splice(index,1);
        }

        function deleteTeam(teamId, team) {
            Team.deleteTeam(teamId);

            var index = vm.teams.indexOf(team);
            vm.teams.splice(index, 1);
        }

        function submit() {
            window.console.log(vm.team);
            Team.create(vm.team);
        }



        var getData = function(){
            Team.all(function(data) {
                vm.teams = data.data;
            });
        }

        getData();

        if(vm.id) {
            Team.get(vm.id, function(data) {
                vm.team = data.data;
            });
        }

        function update() {
            Team.update(vm.team, function() {
                getData();
                $state.go('dashboard.teams');
                //location.reload();
            });
        }

        function addRow () {
            vm.team.member.push({});
        }
    }
})();