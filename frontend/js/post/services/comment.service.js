(function () {
    'user strict';

    angular
        .module('empee.posts.services')
        .factory('Comment', Comment);

    Comment.$inject = ['$http', 'empee.config'];

    function Comment($http, config) {
        var API = config.baseUrl;
        var Comment = {
            create: create,
            update: update
        }

        return Comment;

        function  create(content) {
            $http.post(API + '/api/comment/', content).then(createSuccessFn, createErrorFn);

                function createSuccessFn(data, header, status) {
                    console.log('success');
//                      location.reload();
                }

                function createErrorFn(data, header, status) {
                    console.log(data);
                }
        }

        function update() {

        }
    }
})();