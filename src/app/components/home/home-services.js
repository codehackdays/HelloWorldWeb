(function() {
    angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

    function HomeServices($rootScope, $http, $q, $log) {

        var tokenEndpoint = 'https://codehackdays.eu.auth0.com/oauth/token';
        var sayHelloEndpoint = $rootScope.WebAPI + 'sayhello';
        var keysEndpoint = $rootScope.WebAPI + 'keys';

        return {
            askToken: askToken,
            getAllInfo: getAllInfo,
            sayHello: sayHello,
            getValues: getValues,
            setValues: setValues
        };

        function askToken(id, secret) {

            var deferred = $q.defer();
            $http({
                    method: "POST",
                    url: tokenEndpoint,
                    headers: { 'content-type':'application/json' }
                })
                .then(function(response) {
                    deferred.resolve({
                      "client_id":id,
                      "client_secret":secret,
                      "audience":$rootScope.WebAPI,
                      "grant_type":"client_credentials"
                    });
                })
                .catch(function(response) {
                    $log.error('Error retrieving token: ' + status);
                    return $q.reject('Error retrieving token');
                });
            return deferred.promise;
        }

        function getAllInfo(token) {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: pictureEndpoint,
                    headers: { authorization: "'" + token.token_type + " " + token.access_token + "'" }
                })
                .then(function(response) {
                    deferred.resolve(response.data);
                })
                .catch(function(response) {
                    $log.error('Error retrieving current user data: ' + status);
                    return $q.reject('Error retrieving current user data');
                });
            return deferred.promise;
        }

        function sayHello(token, input) {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: sayHelloEndpoint + '?name=' + input,
                    headers: { authorization: "'" + token.token_type + " " + token.access_token + "'" }
                })
                .then(function(response) {
                    deferred.resolve(response.data.message);
                })
                .catch(function(response) {
                    $log.error('Error retrieving current user data: ' + status);
                    return $q.reject('Error retrieving current user data');
                });
            return deferred.promise;
        }

        function setValues(token, key, value) {

            var deferred = $q.defer();
            $http({
                    method: "POST",
                    url: keysEndpoint,
                    headers: { authorization: "'" + token.token_type + " " + token.access_token + "'" }
                })
                .then(function(response) {
                    deferred.resolve(response.data.message);
                })
                .catch(function(response) {
                    $log.error('Error retrieving current user data: ' + status);
                    return $q.reject('Error retrieving current user data');
                });
            return deferred.promise;
        }

        function getValues(token) {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: keysEndpoint,
                    headers: { authorization: "'" + token.token_type + " " + token.access_token + "'" }
                })
                .then(function(response) {
                    deferred.resolve(response.data.message);
                })
                .catch(function(response) {
                    $log.error('Error retrieving current user data: ' + status);
                    return $q.reject('Error retrieving current user data');
                });
            return deferred.promise;
        }

    }

})();
