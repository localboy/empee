(function() {
    'use strict';

    angular
        .module('empee.filter')
        .filter('ellipsis', ellipsis);

    ellipsis.$inject = [];

    function ellipsis() {
        return function(text, length) {
            if(text.length > length) {
                return text.substr(0, length) + '...';
            }
            return text;
        }
    }
})();