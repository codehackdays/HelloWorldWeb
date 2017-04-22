(function() {
   'use strict';
    angular.module('application', ['ui.router'])

    .factory('TokenService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {
        //
        var TOKEN = null;
        var tokenEndpoint = $rootScope.WebToken + 'helloworld';

        return {
            retrieve: askToken,
            get: function() {
                return TOKEN;
            }
        }

        function askToken() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: tokenEndpoint,
                headers: { 'content-type':'application/json' }
            })
            .then(function(response) {
                TOKEN = response.data;
                console.log(response.data)
                deferred.resolve(response.data);
            })
            .catch(function(response) {
                $log.error('Error retrieving token: ' + response);
                return $q.reject('Error retrieving token');
            });
            return deferred.promise;
        }
    }])

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
