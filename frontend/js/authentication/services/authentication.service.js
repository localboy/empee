(function() {
    'use strict';

    angular
        .module('empee.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http'];

    function Authentication($http) {
        var base_url = "http://127.0.0.1:8000";

        var Authentication = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout
        }
        return Authentication;

        function login (username, password, callback) {
            return $http.post(base_url + '/api-token-auth/', {
//            return $http.post('/api/login/', {
                username: username, password: password
            }).then(loginSuccessFn(callback), loginErrorFn);

            function loginSuccessFn (callback) {

                return function (data, status, headers, config, response, $state) {
                    localStorage.setItem('empee.token',data.data.token);
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
                    if (typeof callback !== 'undefined') {
                        callback();
                    }
                }

            }

            function loginErrorFn (data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

        function logout() {
            localStorage.removeItem('empee.token');
        }

        function isAuthenticated() {
            return localStorage.getItem('empee.token')!=null
        }
    }
})();
