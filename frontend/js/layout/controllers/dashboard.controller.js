(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$stateParams', 'Authentication', 'Post'];

    function DashboardController($scope, $stateParams, Authentication, Post) {
        var vm = this;
        vm.greeting = 'Hello Dear!';
        vm.postId = $stateParams.postID;
//        vm.posts = posts;

        Post.all(function(data) {
            vm.posts = data.data;
            vm.totalPost = data.data.length;
            console.log(vm.totalPost);
        });
        if(vm.postId){
            Post.get(vm.postId, function(data) {
                vm.post = data.data;
            });
        }
    }
})();