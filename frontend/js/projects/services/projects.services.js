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
            deleteProject: deleteProject,
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

        function deleteProject(id)  {
            $http.delete(API + '/api/project/' + id + '/').then(deleteSuccessFn, deleteErrorFn);

            function deleteSuccessFn(data, status, headers, config, response) {
                console.log('Success');
            }

            function deleteErrorFn(data, status, headers, config, response) {
                console.log(data);
            }
        }

        function get(id, callback) {
            return $http.get(API + '/api/project/' + id + '/').then(callback, getErrorFn);

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }

        function update(project) {
            return $http.put(API + '/api/project/' + project.id + '/', project);/*.then(updateSuccessFn, updateErrorFn);

            function updateSuccessFn(data, status, headers, config, response) {
               $('#editModal').modal('toggle');
            }

            function updateErrorFn(data, status, headers, config, response) {
                console.log(data);
            }*/
        }
    }
})();