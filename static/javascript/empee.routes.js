(function(){
    'use strict';

    angular
        .module('empee.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider
        /*.when('/', {
            templateUrl: '/static/templates/login.html'
        })*/
        .when('/test', {
            templateUrl: '/static/templates/test.html'
        })
        .when('/profile', {
            templateUrl: '/static/templates/profile.html'
        })
        .when('/dashboard', {
            templateUrl: '/static/templates/dashboard.html'
        })
        .when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/login.html'
        }).when('/project', {
            controller: 'ProjectController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/projects.html'
        }).otherwise('/login');
    }

    /*config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){

        //For any unmatched url
        $urlRouterProvider.otherwise('/');

        //For state url
        $stateProvider
            .state('/', {
                url: '/index',
                templateUrl: 'index.html'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'test.html'
            });
    }*/
})();