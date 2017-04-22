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
                $log.error('Error adding person: ' + response);
                return $q.reject('Error adding person.');
            });

            return deferred.promise;
        }

        function getPeople(token) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: endpoint,
                headers: { Authorization: token.token_type + " " + token.access_token }
            })
            .then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function (response) {
                $log.error('Error getting people: ' + response);
                return $q.reject('Error getting people.');
            });
            return deferred.promise;
        }
    }

})();
