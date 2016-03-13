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
            create: create,
            get: get,
            update: update
        };
        return Post;

        function all(callback) {
            $http.get(API + '/api/posts/').then(callback, getErrorFn);

            /*function getSuccessFn(data, status, header, config, response) {
                return data.data;
                console.log(data.data);
            }*/

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function create(post) {
            return $http.post(API + '/api/post/', post);
        }

        function get(id, callback) {
            $http.get(API + '/api/posts/' + id + '/').then(callback, getErrorFn);

            function getErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }

        function update(post) {
            return $http.put(API + '/api/post/' + post.id + '/', post);
        }
    }
})();
