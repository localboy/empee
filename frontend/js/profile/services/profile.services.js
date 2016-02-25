(function() {
    'use strict';

    angular
        .module('empee.profile.services')
        .factory('Profile', Profile);

    Profile.$inject = ['$http'];

    function Profile($http) {
        var Profile = {
            get: get,
            update: update
        };

        return Profile;

        function get(username) {
            return $http.get('api/user/' + username + '/');
        }

        function update() {

        }
    }
})();