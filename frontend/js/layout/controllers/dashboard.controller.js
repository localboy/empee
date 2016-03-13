(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$state', '$stateParams', 'jwtHelper', 'Authentication', 'Post', 'Project', 'Team', 'Comment'];

    function DashboardController($scope, $state, $stateParams, jwtHelper, Authentication, Post, Project, Team, Comment) {
        var vm = this;
        vm.greeting = 'Hello Dear!';
        vm.logout = logout;
        vm.postId = $stateParams.postID;
        var token = localStorage.getItem('empee.token');
        vm.userid = jwtHelper.decodeToken(token).user_id;
        vm.username = jwtHelper.decodeToken(token).username;
        vm.postUpdate = postUpdate;
        vm.postCreate = postCreate;
        vm.show = true;
//        vm.comment = 'test';
//        vm.posts = posts;

        //Pagination
        vm.itemsPerPage=3;
        vm.currentPage = 1;

        vm.closeAlert = function(index) {
            vm.show = false;
        };

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
//                console.log(vm.post);
            });

            vm.addComment = function() {
                vm.post.comment.push({
                    'comment': $scope.comment,
                    'post': vm.post.id,
                    'username': vm.username
                });
                console.log(vm.post.comment);
                Comment.create({
                    'comment': $scope.comment,
                    'post': vm.post.id,
                    'user': vm.userid});
//                vm.post.comment.push(comment);
//                comment = '';
                $scope.comment = '';
//                alert($scope.comment);
            }

        }

        Team.all(function (data) {
            vm.teams = data.data;
        });

//        if(vm.post) {
            function postUpdate() {
                Post.update(vm.post).then(updateSuccessFn, updateErrorFn);
//                console.log(vm.post);
                function updateSuccessFn(data, status, header, config, response) {
                        vm.alerts =
                        { type: 'success', msg: 'Update Successful.' };
                       $('#myModal').modal('toggle');
                }

                function updateErrorFn(data, status, header, config, response) {
                    console.log(data);
                    vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
                }
            }
//        }

        function postCreate() {
            vm.post.user = vm.userid;
            Post.create(vm.post).then(createSuccessFn, createErrorFn);
            function createSuccessFn(data, status, header, config, response) {
                 $('#myModal').modal('toggle');
                 vm.posts.push(vm.post);
            }

            function createErrorFn(data, status, header, config, response) {
                console.log(data);
                 vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
            }
        }
    }
})();