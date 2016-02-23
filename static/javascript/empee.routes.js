(function(){
    'use strict';

    angular
        .module('empee.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){

        //For any unmatched url
        $urlRouterProvider.otherwise('login');

        //For state url
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/static/templates/login.html',
                controllerAs: 'vm',
                controller: 'LoginController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/static/templates/dashboard.html',
                controllerAs: 'vm',
                controller: 'DashboardController'

            })
            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: '/static/templates/profile.html'
            })
            .state('dashboard.project', {
                url: '/projects',
                templateUrl: '/static/templates/projects.html',
                controllerAs: 'vm',
                controller: 'ProjectController'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'test.html'
            });
    }
})();