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
            create: create,
            deleteMember: deleteMember,
            deleteTeam: deleteTeam,
            get: get,
            update: update
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

        function deleteMember(id) {
            $http.delete(API + '/api/teammember/' + id + '/').then(deleteSuccessFn, deleteErrorFn);

            function deleteSuccessFn (data, status, header, config, response) {
                console.log('Success');
            }

            function deleteErrorFn (data, status, header, config, response) {
                console.log(data);
            }
        }

        function deleteTeam(id) {
            $http.delete(API + '/api/team/' + id +'/').then(deleteSuccessFn, deleteErrorFn);

            function deleteSuccessFn (data, status, header, config, response) {
                console.log(data.data);
            }

            function deleteErrorFn (data, status, header, config, response) {
                console.log(data);
            }
        }

        function get(id, callback) {
//            lolfunc();
            return $http.get(API + '/api/team/' + id + '/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, header, config, response) {
                console.log(data.data);
                return data.data;
            }*/

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function update(team, callback) {
            $http.put(API + '/api/team/' + team.id + '/', team).then(callback, updateErrorFn);

            /*function updateSuccessFn(data, status, header, config, response) {
                console.log('success');
            }*/

            function updateErrorFn(data, status, header, config, response) {
                console.log('error');
            }
        }

        function create (content) {
//            window.console.log(typeof content);
            $http.post(API + '/api/team/', content).then(createSuccessFn, createErrorFn);

            function createSuccessFn(data, status, header, config) {
                console.log('Success');

            }

            function createErrorFn(data, status, header,config) {
                console.log('Error');
//                console.log(data);
            }
        }
    }
})();