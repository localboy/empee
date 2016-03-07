(function(){
    'use strict';

    angular
        .module('empee.config')
        .value('empee.config', {
            baseUrl: 'http://127.0.0.1:8000'
        });
        //.config(config);

    //config.$inject = ['$rootScope'];

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