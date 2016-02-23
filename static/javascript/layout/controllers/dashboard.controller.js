(function() {
    'use strict';

    angular
        .module('empee.layout.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'Authentication'];

    function DashboardController($scope, Authentication) {
        var vm = this;
        vm.greeting = 'Hello Dear!';
    }
})();