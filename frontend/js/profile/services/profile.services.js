
(function() {
    'use strict';

    angular
        .module('empee.profile.services')
        .factory('Profile', Profile);

    Profile.$inject = ['$http', 'empee.config'];

    function Profile($http, config) {
        var API = config.baseUrl;
        var Profile = {
            all: all,
            get: get,
            update: update
        };

        return Profile;

        function all() {
            return $http.get(API + '/api/user');
        }

        function get(username) {
            return $http.get(API + '/api/user/' + username + '/');
        }

        function update(profile) {
            return $http.put(API + '/api/user/' + profile.username + '/'. profile);
        }
    }
})();