(function(){
    'use strict';

    angular
        .module('empee.routes')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){

        //For any unmatched URL
        $urlRouterProvider.otherwise('login');

        //For state URL
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controllerAs: 'vm',
                controller: 'LoginController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controllerAs: 'vm',
                controller: 'DashboardController'

            })

            //State URL for Post
            .state('dashboard.post', {
                url: '/posts',
                templateUrl: 'templates/posts/posts.html'
                /*controllerAs: 'vm',
                controller: 'PostController'*/
            })
            .state('dashboard.post.createPost', {
                url: '/post-create/',
                templateUrl: 'templates/posts/post.create.html',
                controllerAs: 'vm',
                controller: 'PostController'
            })
            .state('dashboard.postDetail', {
                url: '/post/:postID',
                templateUrl: 'templates/posts/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.postEdit', {
                url: '/post-edit/:postID',
                templateUrl: 'templates/posts/post.edit.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.post.postEdit', {
                url: '/post-edit/:postID',
                templateUrl: 'templates/posts/post.edit.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.post.postDetail', {
                url: '/post/:postID',
                templateUrl: 'templates/posts/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.post.postDetail.postDetail', {
                url: '/post/:postID',
                templateUrl: 'templates/posts/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })
            .state('dashboard.postDetail.postDetail', {
                url: '',
                templateUrl: 'templates/posts/post.detail.html',
                controllerAs: 'vm',
                controller: 'DashboardController'
            })

            //State URL for Profile
            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html'
            })


            //State URL for Project
            .state('dashboard.project', {
                url: '/projects',
                templateUrl: 'templates/projects/projects.html',
                controllerAs: 'vm',
                controller: 'ProjectController'
            })
            .state('dashboard.project.projectDetail', {
                url: '/:projectID',
                templateUrl: 'templates/projects/project.detail.html',
                controllerAs: 'vm',
                controller: 'ProjectDetailController'
            })
            .state('dashboard.project.projectCreate', {
                url: '',
                templateUrl: 'templates/projects/project.create.html',
                controllerAs: 'vm',
                controller: 'ProjectController'
            })
            .state('dashboard.project.projectEdit', {
                url: '/edit:projectID',
                templateUrl: 'templates/projects/project.edit.html',
                controllerAs: 'vm',
                controller: 'ProjectDetailController'
            })

            //State URL for Users
            .state('dashboard.users', {
                url: '/users',
                templateUrl: 'templates/users.html',
                controllerAs: 'vm',
                controller: 'ProfileController'
            })

            //State URL for Teams
            .state('dashboard.teams', {
                url: '/teams',
                templateUrl: 'templates/teams/teams.html',
                controllerAs: 'vm',
                controller: 'TeamController'
            })
            .state('dashboard.teams.newTeam', {
                url: '/teams',
                templateUrl: 'templates/teams/team.create.html',
                controllerAs: 'vm',
                controller: 'TeamController'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'test.html'
            });
    }
})();
