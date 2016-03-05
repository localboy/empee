(function() {
    'use strict';

    angular
        .module('empee.projects.services')
        .factory('Project', Project);

    Project.$inject = ['$http', 'empee.config']

    function Project($http, config) {
        var API = config.baseUrl;
        var Project = {
            get: get,
            all: all
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

        function get(id, callback) {
            return $http.get(API + '/api/project/' + id + '/').then(callback, getErrorFn);

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }
    }
})();