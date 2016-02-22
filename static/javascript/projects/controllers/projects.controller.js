(function() {
    'use strict';

    angular
        .module('empee.projects.controllers')
        .controller('ProjectController', ProjectController)

    ProjectController.$inject = ['$http'];

    function ProjectController($http) {
        var vm = this;
        vm.projects = projects;
//           alert(projects);
        function projects() {
            return $http.get('/api/project/')
            .success(function(data) {
//                projects = data;
//                console.log(data.data);
//                alert(data);
                   alert('success');
            })
            .error(function() {
                alert('error');
            });
        }
    }
})();