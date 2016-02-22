(function(){
    'user strict';

    angular
        .module('empee', [
            'empee.authentication',
            'empee.routes',
            'empee.layout',
            'empee.profile',
            'empee.projects'
//            'empee.dashboard'
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

    /*angular
        .module('empee')
        .run(function($http) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('empee.token');
    });*/
})();