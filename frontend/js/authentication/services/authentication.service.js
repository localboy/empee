(function() {
    'use strict';

    angular
        .module('empee.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http', 'empee.config'];

    function Authentication($http, config) {
        var API = config.baseUrl;
        var Authentication = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            forgetPass: forgetPass,
            resetPass: resetPass
        }
        return Authentication;

        function login (username, password, callback) {
            return $http.post(API + '/api-token-auth/', {
//            return $http.post('/api/login/', {
                username: username, password: password
            }).then(loginSuccessFn(callback), loginErrorFn);

            function loginSuccessFn (callback) {

                return function (data, status, headers, config, response, $state) {
                    localStorage.setItem('empee.token',data.data.token);
                    $http.defaults.headers.common.Authorization = 'JWT ' + data.data.token;

//                    console.log($http.defaults.headers.common.Authorization);
                    if (typeof callback !== 'undefined') {
                        callback();
                    }
                }

            }

            function loginErrorFn (data, status, headers, config) {
                console.error('Epic failure!');
                return 'Invalid username or password';
            }
        }

        function logout() {
            localStorage.removeItem('empee.token');
        }

        function isAuthenticated() {
            return localStorage.getItem('empee.token')!=null
        }

        function forgetPass(email) {
            console.log(email);
            $http.defaults.headers.common.Authorization = '';
            return $http.post(API + '/api/forget-password/', {email:email});
        }

        function resetPass(reset) {
            $http.defaults.headers.common.Authorization = '';
            return $http.post(API + '/api/reset-password/', reset);
        }
    }
})();
