(function() {
    angular.module('application').factory('PeopleService', ['$rootScope', '$http', '$q', '$log', PeopleService]);

    function PeopleService($rootScope, $http, $q, $log) {

        var endpoint = 'https://codehackdays-helloworldweb.herokuapp.com/rotas/people';

        return {
            getPeople: getPeople,
            addPerson: addPerson
        };

        function addPerson(person) {

            var deferred = $q.defer();
            $http({
                method: "POST",
                url: endpoint,
                data: person
            })
            .then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function (response) {
                $log.error('Error adding Partner data: ' + response);
                return $q.reject('Error adding Partner data.');
            });

            return deferred.promise;
        }

        function getPeople(name) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: endpoint,
            })
            .then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function (response) {
                $log.error('Error adding Partner data: ' + response);
                return $q.reject('Error adding Partner data.');
            });
            return deferred.promise;
        }
    }

})();
