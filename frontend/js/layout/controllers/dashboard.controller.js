(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$state', '$stateParams', 'jwtHelper', 'Authentication', 'Post', 'Project'];

    function DashboardController($scope, $state, $stateParams, jwtHelper, Authentication, Post, Project) {
        var vm = this;
        vm.greeting = 'Hello Dear!';
        vm.logout = logout;
        vm.postId = $stateParams.postID;
        var token = localStorage.getItem('empee.token');
        vm.userid = jwtHelper.decodeToken(token).user_id;
        vm.username = jwtHelper.decodeToken(token).username;
        vm.postUpdate = postUpdate;
//        vm.posts = posts;

        function logout() {
            Authentication.logout();
            $state.go('login');
        }

         Project.all(function(data) {
            vm.projects = data.data;
//            window.console.log(vm.projects);
        });

        Post.all(function(data) {
            vm.posts = data.data;
        });
        if(vm.postId){
            Post.get(vm.postId, function(data) {
                vm.post = data.data;
            });
        }

        function postUpdate() {
            Post.update(vm.post).then(updateSuccessFn, updateErrorFn);
            console.log(vm.post);
            function updateSuccessFn(data, status, header, config, response) {
                console.log(data);
            }

            function updateErrorFn(data, status, header, config, response) {
                console.log('Error');
            }
        }
    }
})();