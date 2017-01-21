(function() {
    angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

    function HomeServices($rootScope, $http, $q, $log) {

        var sayHelloEndpoint = $rootScope.WebAPI + 'sayhello?name=Luke';

        return {
            getAllInfo: getAllInfo,
            sayHello: sayHello
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

        function sayHello() {

            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: sayHelloEndpoint,
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
