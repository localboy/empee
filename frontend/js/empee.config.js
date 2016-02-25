(function(){
    'use strict';

    angular
        .module('empee.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

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