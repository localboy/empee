(function() {
    'use strict';

    angular
        .module('empee.layout', [
            'empee.layout.controllers',
            'empee.project.filter',
            'empee.team.filter'
        ]);

    angular
        .module('empee.layout.controllers', ['angular-jwt']);

    angular
        .module('empee.project.filter', []);

    angular
        .module('empee.team.filter', []);
})();