(function() {
    'use strict';

    angular
        .module('empee.posts.controllers')
        .controller('PostController', PostController);

    PostController.$inject = ['$stateParams', 'Post'];

    function PostController($stateParams, Post) {
        var vm = this;
        vm.postId = $stateParams.postID;
        vm.update = update;

        Post.get(vm.postId, function(data) {
            vm.post = data.data;
        });

        function update() {
            Post.update(vm.post).then(updateSuccessFn, updateErrorFn);
            console.log(vm.post);
            function updateSuccessFn(data, status, header, config, response) {
                console.log(data);
            }

            function updateErrorFn(data, status, header, config, response) {
                console.log('Error' + data.data);
            }
        }
    }
})();