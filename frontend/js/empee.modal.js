(function() {
    'use strict';

    angular
    .module('empee.modal')
    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
//        var vm = this;
        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();