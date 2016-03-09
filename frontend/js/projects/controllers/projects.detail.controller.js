(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectDetailController', ProjectDetailController)

    ProjectDetailController.$inject = ['$http', '$stateParams', 'Project', 'Team'];

    function ProjectDetailController($http, $stateParams, Project, Team) {
        var vm = this;
//        vm.projects = "No";
        vm.id = $stateParams.projectID;
        vm.update = update;

        function update() {
            var qdata = {
                id: vm.projects.id,
                title: vm.projects.title,
                description: vm.projects.description,
                start_date: vm.projects.start_date,
                end_date: vm.projects.end_date,
                team: vm.projects.selectedTeam.id
            }
            Project.update(qdata);
        }

        Team.all(function(data) {
                vm.teams = data.data;
            });
//        console.log(vm.id);
        Project.get(vm.id, function(data) {
            vm.projects = data.data;
           vm.projects.selectedTeam = {id: vm.projects.team};
            console.log(vm.projects.team);
            vm.projects.start_date = new Date(vm.projects.start_date);
            vm.projects.end_date = new Date(vm.projects.end_date);
//            console.log(vm.projects);
        });
    }
})();