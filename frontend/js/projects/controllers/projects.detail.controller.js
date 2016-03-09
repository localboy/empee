(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectDetailController', ProjectDetailController)

    ProjectDetailController.$inject = ['$http', '$stateParams', 'Project'];

    function ProjectDetailController($http, $stateParams, Project) {
        var vm = this;
        vm.projects = "No";
        vm.id = $stateParams.projectID;
//        console.log(vm.id);
        Project.get(vm.id, function(data) {
            vm.projects = data.data;
            vm.projects.start_date = new Date(vm.projects.start_date);
            vm.projects.end_date = new Date(vm.projects.end_date);
//            console.log(vm.projects);
        });
    }
})();