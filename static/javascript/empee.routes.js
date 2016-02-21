(function(){
    'use strict';

    angular
        .module('empee.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/static/templates/home.html'
        })
        .when('/test', {
            templateUrl: '/static/templates/test.html'
        })
        .when('/dashboard', {
            templateUrl: '/static/templates/dashboard.html'
        })
        .when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/login.html'
        }).otherwise('/');
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