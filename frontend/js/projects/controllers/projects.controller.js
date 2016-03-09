(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectController', ProjectController)

    ProjectController.$inject = ['Project', 'Team'];

    function ProjectController(Project, Team) {
        var vm = this;
        vm.projects = "Bla";
//        vm.teams = teams
        vm.create = create;
        vm.deleteProject = deleteProject;

        /*vm.showModal = false;
        vm.toggleModal = function() {
           vm.showModal = !vm.showModal;
        };


            vm.datepickerOptions = {
                format: 'yyyy-mm-dd',
                language: 'fr',
                startDate: "2012-10-01",
                endDate: "2012-10-31",
                autoclose: true,
                weekStart: 0
            }*/

        Team.all(function(data) {
                vm.teams = data.data;
            });

        function create() {
            /*console.log()
            vm.projects.start_date = new Date(vm.projects.start_date);
            vm.projects.end_date = new Date(vm.projects.end_date);*/

            var qdata = {
                title: vm.project.title,
                description: vm.project.description,
                start_date: vm.project.start_date,
                end_date: vm.project.end_date,
                team: vm.project.team.id
            }
            console.log(qdata);

            Project.create(qdata).then(createSuccessFn, createErrorFn);

            function createSuccessFn(data, status, header, config) {
                console.log('Success');
            }

            function createErrorFn(data, status, header, config) {
                console.log('Error');
                console.log(data);
            }
        }

        function deleteProject(id, project) {
            Project.deleteProject(id);

            var index = vm.projects.indexOf(project);
            vm.projects.splice(index, 1);
        }

        Project.all(function(data) {
            vm.projects = data.data;
//            window.console.log(vm.projects);
        });

    }

})();