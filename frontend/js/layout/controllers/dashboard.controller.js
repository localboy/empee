(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$state', '$stateParams', 'jwtHelper', 'Authentication', 'Post', 'Project', 'Team'];

    function DashboardController($scope, $state, $stateParams, jwtHelper, Authentication, Post, Project, Team) {
        var vm = this;
        vm.greeting = 'Hello Dear!';
        vm.logout = logout;
        vm.postId = $stateParams.postID;
        var token = localStorage.getItem('empee.token');
        vm.userid = jwtHelper.decodeToken(token).user_id;
        vm.username = jwtHelper.decodeToken(token).username;
        vm.postUpdate = postUpdate;
//        vm.comment = 'test';
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

            /*$scope.addRow = function(){
                $scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
                $scope.name='';
                $scope.employees='';
                $scope.headoffice='';
            };*/
            vm.addComment = function() {
                /*var comment = {
                    comment = $scope.comment,
                    user = $scope.user
                }*/
                vm.post.comment.push({
                    'comment': $scope.comment
                });
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
                console.log(vm.post);
                function updateSuccessFn(data, status, header, config, response) {
                    console.log(data);
                }

                function updateErrorFn(data, status, header, config, response) {
                    console.log('Error');
                }
            }
//        }
    }
})();