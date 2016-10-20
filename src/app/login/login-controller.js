(function() {
    'use strict';
    angular.module('ngjs').controller('LoginController', LoginController);

    function LoginController(adalAuthenticationService, $log) {
        var vm = this;
        vm.label = "Login Page";
        vm.login = function() {
             $log.log('test');   
            adalAuthenticationService.login();
        };
    }
})();
