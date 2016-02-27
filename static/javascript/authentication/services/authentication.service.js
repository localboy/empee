(function() {
    'use strict';

    angular
        .module('empee.authentication.services',['angular-jwt'])
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http', 'jwtHelper'];

    function Authentication($http, jwtHelper) {
        var Authentication = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            authenticatedAccount: authenticatedAccount
        }

        return Authentication;

        function login (username, password, callback) {
            return $http.post('/api-token-auth/', {
                username: username, password: password
            }).then(loginSuccessFn(callback), loginErrorFn);

            function loginSuccessFn (callback) {
                return function (data, status, headers, config, response) {
                    var userid = jwtHelper.decodeToken(data.data.token);
                    localStorage.setItem('empee.token',data.data.token);
//                    console.log(userid);
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

        function authenticatedAccount() {
            var token = localStorage.getItem('empee.token');
            var userid = jwtHelper.decodeToken(token).user_id;

            $http.get('/api/user/'+userid).then(function(response){
                if(response.status === 200){
                    user_obj = response.data;
                }
            });
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