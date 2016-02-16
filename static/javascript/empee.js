(function(){
    'user strict';

    angular
        .module('empee', [
            'empee.routes'
//            'empee.config'
        ]);


//    angular
//        .module('empee.routes', ['ui.router']);

    angular
        .module('empee.routes', ['ngRoute']);

    /*angular
        .module('empee.config', []);*/
})();