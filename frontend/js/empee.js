(function(){
    'user strict';

    angular
        .module('empee', [
            'empee.routes',
            'empee.authentication',
            'empee.config',
//            'empee.datepicker',
            'empee.filter',
            'empee.layout',
            'empee.model',
            'empee.posts',
            'empee.profile',
            'empee.projects',
            'empee.teams',
            'ui.bootstrap',
//            'ng-bootstrap-datepicker',
             'ui.bootstrap.datetimepicker',
            'ngAnimate',
            'empee.modal'

        ]);

    /*angular
        .module('empee.datepicker', ['ng-bootstrap-datepicker']);*/

    angular
        .module('empee.model', ['ui.bootstrap']);

    angular
        .module('empee.routes', ['ui.router']);

    angular
        .module('empee.config', []);

    angular
        .module('empee.filter', []);

    angular
        .module('empee.modal', []);

    angular
        .module('empee')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $http.defaults.headers.common.Authorization = 'JWT ' + localStorage.getItem('empee.token');

    }

})();
