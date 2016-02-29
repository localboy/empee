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
            .state('dashboard.postDetail', {
                url: '/post/:postID',
                templateUrl: 'templates/post.detail.html',
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
            .state('dashboard.project.projectDetail', {
                url: '/project/:projectID',
                templateUrl: 'templates/project_detail.html',
                controllerAs: 'vm',
                controller: 'ProjectDetailController'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'test.html'
            });
    }
})();
