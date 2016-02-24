(function() {
    'use strict';

    angular
        .module('empee.projects.services')
        .factory('Project', Project);

    Project.$inject = ['$http']

    function Project($http) {
        var Project = {
            get: get,
            all: all
        };

        return Project;

        function all(callback) {
            $http.get('/api/project/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, headers, config, response) {
                return data;
                //console.log(data);
            }*/

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }

        function get(id, callback) {
            return $http.get('/api/project/' + id + '/').then(callback, getErrorFn);

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }
    }
})();