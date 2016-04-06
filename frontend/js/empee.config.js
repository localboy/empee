(function(){
    'use strict';

    angular
        .module('empee.config')
        .value('empee.config', {
            baseUrl: 'http://127.0.0.1:8000'
        });


    /*angular
        .module('empee.config')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider){
        var token = localStorage.getItem('empee.token');
        console.log(token);
        if (token) {
            $httpProvider.defaults.headers.common.Authorization = 'Bearer ' + token;
        }
    }*/

    /*function config($rootScope) {
        $rootScope.$on('$viewContentLoading', function(event, viewConfig) {
            console.log(event);
            console.log(viewConfig);
        });
    }*/

     /*   .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }*/

    /*config.$inject = ['$locationProvider'];

    *//*
    * Eanabling HTML5 routing
    *//*

    function config($locationProvider){
        $locationProvider.html5Mode({
        enabled: true,
        requireBase:false
        });
        }
        $locationProvider.hashPrefix('!');
    }*/
})();