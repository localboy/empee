(function() {
    'use strict';

    angular
        .module('empee.projects.services')
        .factory('Project', Project);

    Project.$inject = ['$http', 'empee.config']

    function Project($http, config) {
        var API = config.baseUrl;
        var Project = {
            all: all,
            create: create,
            get: get,
            update: update
        };

        return Project;

        function all(callback) {
            $http.get(API + '/api/project/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, headers, config, response) {
                return data;
                //console.log(data);
            }*/

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }

        function create(project) {
            return $http.post(API + '/api/project/', project);
        }

        function get(id, callback) {
            return $http.get(API + '/api/project/' + id + '/').then(callback, getErrorFn);

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }

        function update() {

        }
    }
})();