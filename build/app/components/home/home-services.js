(function() {
    angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

    function HomeServices($rootScope, $http, $q, $log) {

        var sayHelloEndpoint = $rootScope.WebAPI + 'sayhello';
        var keysEndpoint = $rootScope.WebAPI + 'keys';

        return {
            getAllInfo: getAllInfo,
            sayHello: sayHello,
            getValues: getValues,
            setValues: setValues
        };

        function getAllInfo() {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: pictureEndpoint,
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

        function sayHello(input) {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: sayHelloEndpoint + '?name=' + input,
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

        function setValues(key, value) {

            var deferred = $q.defer();
            $http({
                    method: "POST",
                    url: keysEndpoint
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

        function getValues() {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: keysEndpoint
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