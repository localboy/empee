(function() {
    'use strict';

    angular
        .module('empee.model.controllers')
        .controller('ModelController', ModelController);

    ModelController.$inject = [];

    function ModelController() {
        var vm = this;

        vm.showModal = false;
        vm.toggleModal = function() {
           vm.showModal = !vm.showModal;
        };
    }
}) ();

/*
.controller('MainCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  });*/
