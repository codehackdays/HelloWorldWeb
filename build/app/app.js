(function() {
   'use strict';
    angular.module('application', ['ui.router'])

    .run(['$rootScope', '$state', function($rootScope, $state) {
        // this is available from all across the app
        $rootScope.appName = 'HelloWorld';
        $rootScope.WebToken = 'https://codehackdays-tokenworld.herokuapp.com/';
        $rootScope.WebAPI = 'https://codehackdays-helloworld.herokuapp.com/';
    }])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();