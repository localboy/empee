(function(){
    'user strict';

    angular
        .module('empee', [
            'empee.routes',
            'empee.authentication',
            'empee.config',
            'empee.filter',
            'empee.layout',
            'empee.posts',
            'empee.profile',
            'empee.projects',
            'empee.teams'

        ]);

    angular
        .module('empee.routes', ['ui.router']);

    angular
        .module('empee.config', []);

    angular
        .module('empee.filter', []);

    angular
        .module('empee')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

})();
