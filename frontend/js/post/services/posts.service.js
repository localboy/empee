(function() {
    'use strict';

    angular
        .module('empee.posts.services')
        .factory('Post', Post);

    Post.$inject = ['$http'];

    function Post($http) {
        var base_url = "http://127.0.0.1:8000";

        var Post = {
            all: all,
            get: get
        };
        return Post;

        function all(callback) {
            $http.get(base_url + '/api/post/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }*/

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function get(id, callback) {
            $http.get(base_url + '/api/post/' + id + '/').then(callback, getErrorFn);

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }
    }
})();
