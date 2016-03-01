(function() {
    'use strict';

    angular
        .module('empee.posts.services')
        .factory('Post', Post);

    Post.$inject = ['$http', 'empee.config'];

    function Post($http, config) {
        var API = config.baseUrl;

        var Post = {
            all: all,
            get: get,
            update: update
        };
        return Post;

        function all(callback) {
            $http.get(API + '/api/post/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }*/

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function get(id, callback) {
            $http.get(API + '/api/post/' + id + '/').then(callback, getErrorFn);

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function update(post) {
            return $http.put(API + '/api/post/' + post.id + '/', post);
        }
    }
})();
