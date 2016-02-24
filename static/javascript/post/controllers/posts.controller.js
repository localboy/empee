(function() {
    'use strict';

    angular
        .module('empee.posts.controllers')
        .controller('PostController', PostController);

    PostController.$inject = ['$stateParams', 'Post'];

    function PostController($stateParams, Post) {
        var vm = this;
        vm.postId = $stateParams.postID;

        Post.get(vm.postId, function(data) {
            vm.post = data.data;
        });
    }
})();