(function(){
    'use strict';

    angular
        .module('empee.routes')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){

        //For any unmatched url
        $urlRouterProvider.otherwise('login');

        //For state url
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controllerAs: 'vm',
                controller: 'LoginController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                controllerAs: 'vm',
                controller: 'DashboardController'

            })
            .state('dashboard.post', {
                url: '/posts',
                templateUrl: 'templates/posts.html'
                /*controllerAs: 'vm',
                controller: 'PostController'*/
            })
            .state('dashboard.createPost', {
                url: '/post-create/',
                templateUrl: 'templates/post.create.html',
                controllerAs: 'vm',
                controller: 'PostController'
            })
            .state('dashboard.postDetail', {
                url: '/post/:postID',
                templateUrl: 'templates/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.postEdit', {
                url: '/post-edit/:postID',
                templateUrl: 'templates/post.edit.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.postDetail.postDetail', {
                url: '',
                templateUrl: 'templates/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html'
            })
            .state('dashboard.project', {
                url: '/projects',
                templateUrl: 'templates/projects.html',
                controllerAs: 'vm',
                controller: 'ProjectController'
            })
            .state('dashboard.users', {
                url: '/users',
                templateUrl: 'templates/users.html',
                controllerAs: 'vm',
                controller: 'ProfileController'
            })
            .state('dashboard.projectDetail', {
                url: '/project/:projectID',
                templateUrl: 'templates/project_detail.html',
                controllerAs: 'vm',
                controller: 'ProjectDetailController'
            })
            .state('dashboard.project.projectDetail', {
                url: '/project/:projectID',
                templateUrl: 'templates/project_detail.html',
                controllerAs: 'vm',
                controller: 'ProjectDetailController'
            })
            .state('dashboard.teams', {
                url: '/teams',
                templateUrl: 'templates/teams.html',
                controllerAs: 'vm',
                controller: 'TeamController'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'test.html'
            });
    }
})();
