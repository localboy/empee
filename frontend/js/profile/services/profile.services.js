
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
            create: create,
            deleteUser: deleteUser,
            get: get,
            getAccount: getAccount,
            getUser: getUser,
            updateAccount: updateAccount,
            updateUser: updateUser
        };

        return Profile;

        function all(callback) {
            $http.get(API + '/api/userprofile/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, headers, config, response) {
                return data;
                //console.log(data);
            }*/

            function getErrorFn (data, status, headers, config, response) {
                console.log('Error');
            }
        }

        function create(user) {
            return $http.post(API + '/api/user/', user);
        }

        function deleteUser(id) {
            $http.delete(API + '/api/userprofile/' + id + '/').then(deleteSuccessFn, deleteErrorFn);

            function deleteSuccessFn(data, status, config, headers){
                console.log('Success');
            }

            function deleteErrorFn(data, status, config, headers) {
                console.log(data);
            }
        }

       /* function all() {
            return $http.get(API + '/api/user');
        }*/

        function get(id) {
            return $http.get(API + '/api/userprofile/' + id + '/');
        }

        function getAccount(id) {
            return $http.get(API + '/api/account/' + id + '/');
        }
        function getUser(id) {
            return $http.get(API + '/api/account/' + id + '/');
        }

        /*function update(profile) {
            return $http.put(API + '/api/userprofile/' + profile.id + '/', profile).then(putSuccessFn, putErrorFn);

            function putSuccessFn(data, status, config, headers, response) {
                console.log('success');
            }

            function putErrorFn(data, status, config, headers, response) {
                console.log(data.data);
            }
        }*/

        function updateAccount(account) {
            return $http.put(API + '/api/account/' + account.id + '/', account).then(putSuccessFn, putErrorFn);

            function putSuccessFn(data, status, config, headers, response) {
                console.log('success');
                 $('#myModal').modal('toggle');
            }

            function putErrorFn(data, status, config, headers, response) {
                console.log(data.data);
            }
        }

        function updateUser(user) {
            return $http.put(API + '/api/user/' + user.id + '/', user);
        }
    }
})();