(function() {
    'use strict';

    angular
        .module('empee.authentication.services',[])
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http'];

    function Authentication($http) {
        var Authentication = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout
        }

        return Authentication;

        function login (username, password, callback) {
            return $http.post('/api-token-auth/', {
//            return $http.post('/api/login/', {
                username: username, password: password
            }).then(loginSuccessFn(callback), loginErrorFn);

            function loginSuccessFn (callback) {


                // $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('empee.token');
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
            window.location = '/';
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
            return localStorage.getItem('empee.token')!=null
        }
    }
})();