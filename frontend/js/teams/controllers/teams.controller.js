(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$state','$stateParams', 'Team', 'Profile'];

    function TeamController ($state, $stateParams, Team, Profile) {
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
        vm.teamUser = [];
//        vm.users = users;

        Profile.all(function(data) {
            vm.users = data.data;
//            window.console.log(vm.projects);
        });

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

        function getTeamMember(){
            var team_member = [];

            for(var i=0; i<vm.teamUser.length; i++){
                team_member.push({
                    user: vm.teamUser[i].user.id,
                    role: vm.teamUser[i].role
                });
            }

            return team_member;
        }

        function submit() {

              var team_member = getTeamMember();
              console.log(team_member);

            var qdata = {
                name: vm.team.name,
                description: vm.team.description,
                member: team_member
            }
           //console.log(vm.teamUser);
            Team.create(qdata);
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
                console.log(vm.team);
            });
        }

        function update() {
            var team_member = getTeamMember();
              console.log(team_member);

            var qdata = {
                name: vm.team.name,
                description: vm.team.description,
                member: team_member
            }
            Team.update(qdata, function() {
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