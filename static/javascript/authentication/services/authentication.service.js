(function() {
    'use strict';

    angular
        .module('empee.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];

    function Authentication($cookies, $http) {
        var Authentication = {
            isAuthenticated: isAuthenticated,
            login: login
        }

        return Authentication;

        function login (username, password) {
            return $http.post('/api/login/', {
                username: username, password: password
            })/*.then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn (data, status, headers, config) {
                window.location = '/';
                console.log('success');
            }

            function loginErrorFn (data, status, headers, config) {
                console.error('Epic failure!');
            }*/
        }

        function isAuthenticated() {

        }
    }
})();