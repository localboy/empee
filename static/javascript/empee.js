(function(){
    'user strict';

    angular
        .module('empee', [
            'empee.authentication',
            'empee.routes'
//            'empee.config'
        ]);


//    angular
//        .module('empee.routes', ['ui.router']);

    angular
        .module('empee.routes', ['ngRoute']);

    /*angular
        .module('empee.config', []);*/

    angular
        .module('empee')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    }
})();