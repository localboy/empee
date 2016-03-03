(function () {
    'use strict';

    angular
        .module('empee.team.filter')
        .filter('userTeam', userTeam);

    userTeam.$inject = [];

    function userTeam() {

        return function(input, uid) {
            var out = [];
            angular.forEach(input, function(team) {
                angular.forEach(team.member, function(data, index) {
                    if (data.user == uid) {
                        out.push(team);
                    }
                });
            })

            return out;
        }

    }

})();