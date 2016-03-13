(function () {
    'use strict';

    angular
        .module('empee.teams.controllers')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope','$state','$stateParams', 'Team', 'Profile', '$log'];

    function TeamController ($scope, $state, $stateParams, Team, Profile, $log) {
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

        //Pagination
        vm.itemsPerPage=3;
        vm.currentPage = 4;

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
            Team.create(qdata).then(createSuccessFn, createErrorFn);

            function createSuccessFn(data, status, header, config) {
                $('#myModal').modal('toggle');

            }

            function createErrorFn(data, status, header,config) {
            vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
                console.log(data);
            }
            //vm.modalInstance.close();
//            $('#myModal').modal('toggle');
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
//                console.log(vm.team);
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
            /*Team.update(qdata, function() {
                getData();
                $state.go('dashboard.teams');
                //location.reload();
                console.log(data);
            });*/

            Team.update(qdata).then(updateSuccessFn, updateErrorFn);

            function updateSuccessFn(data, status, header, config, response) {
                $('#myModal').modal('toggle');
            }

            function updateErrorFn(data, status, header, config, response) {
                vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
                console.log(data);
            }
        }

        function addRow () {
            vm.team.member.push({});
        }
    }
})();