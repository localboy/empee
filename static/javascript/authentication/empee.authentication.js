(function(){
    'use strict';

    angular
        .module('empee.authentication', [
            'empee.routes',
            'empee.authentication.controllers',
            'empee.authentication.services'
        ]);

    angular
        .module('empee.authentication.controllers', []);
})();