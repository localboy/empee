(function(){
    'use strict';

    angular
        .module('empee.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'index.html'
        })
        .when('/test', {
            templateUrl: '/static/templates/test.html'
        })
        .otherwise('/');
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