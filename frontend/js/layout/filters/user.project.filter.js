(function() {
    'use strict';

    angular
        .module('empee.project.filter')
        .filter('userProject', userProject);

    userProject.$inject = [];

    function userProject() {

        return function(input, uid) {
            var out = [];
            angular.forEach(input, function(project) {
                angular.forEach(project.member, function(data, index) {
                    if (data.user == uid) {
                        out.push(project);
                    }
                });
            })

            return out;
        }
    }

})();