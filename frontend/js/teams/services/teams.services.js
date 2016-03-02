(function () {
    'use strict';

    angular
        .module('empee.teams.services')
        .factory('Team', Team);

    Team.$inject = ['$http', 'empee.config'];

    function Team($http, config) {
        var API = config.baseUrl;
        var Team = {
            all: all,
            get: get,
            update: update,
            create: create
        };

        return Team;

        function all(callback) {
            $http.get(API + '/api/team/').then(callback, allErrorFn);

            /*function allSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }*/

            function allErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function get() {

        }

        function update() {

        }

        function create (content) {
            $http.post(API + '/api/team/', content).then(createSuccessFn, createErrorFn);

            function createSuccessFn(data, status, header, config) {
                console.log('Success');
            }

            function createErrorFn(data, status, header,config) {
                console.log('Error');
            }
        }
    }
})();