(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectController', ProjectController)

    ProjectController.$inject = ['$http', 'Project'];

    function ProjectController($http, Project) {
        var vm = this;
        vm.projects = "Bla";

        Project.all(function(data) {
            vm.projects = data.data;
            window.console.log(vm.projects);
        });
        /*function projects() {
            return Project.all();
        }*/

//           alert(projects);
        /*function projects() {
            return $http.get('/api/project/')
            .success(function(data) {
                projects = data;
            })
            .error(function() {
                alert('error');
            });
        }*/
    }
})();