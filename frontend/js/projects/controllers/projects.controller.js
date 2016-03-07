(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectController', ProjectController)

    ProjectController.$inject = ['Project'];

    function ProjectController(Project) {
        var vm = this;
        vm.projects = "Bla";
        vm.create = create;
        vm.showModal = false;
        vm.toggleModal = function() {
           vm.showModal = !vm.showModal;
        };

        function create() {
            Project.create(vm.project).then(createSuccessFn, createErrorFn);

            function createSuccessFn(data, status, header, config) {
                console.log('Success');
            }

            function createErrorFn(data, status, header, config) {
                console.log('Error');
                console.log(data);
            }
        }

        Project.all(function(data) {
            vm.projects = data.data;
//            window.console.log(vm.projects);
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