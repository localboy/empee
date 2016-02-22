(function() {
    'use strict';

    angular
        .module('empee.projects.services')
        .factory('Project', Project);

    Project.$inject = ['$http']

    function Project($http) {
        var Projects = {
            get: get,
            all: all
        };

        return Project;

        function all() {
            return $http.get('/api/projects/').then(getSuccessFn, getErrorFn);

            function getSuccessFn(data) {
                return projects = data;
                console.log(data);
                alert(data);
            }

            function getErrorFn (response) {
                console.log('Error');
            }
        }

        function get() {

        }
    }
})();