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
            return $http.post('/api-token-auth/', {
                username: username, password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn (data, status, headers, config, response) {
                window.location = '#/test';
                localStorage.setItem('empee.token',response.token);
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.token
                console.log('success');
            }

            function loginErrorFn (data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

        /*function login (username, password) {
            $http
              .post('/api-token-auth/', {username: username, password: password})
              .then(function(response) {
                // assumes if ok, response is an object with some data, if not, a string with error
                // customize according to your api
                if ( !response.account ) {
                  authMsg = 'Incorrect credentials.';
                }else{
                    localStorage.setItem('empee.token',response.token);
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token
                    $state.go('dashboard');
                }
              }, function(x) {
                authMsg = 'Server Request Error';
              });
        }*/

        function isAuthenticated() {

        }
    }
})();