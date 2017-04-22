(function() {
    angular.module('application').factory('EventsService', ['$rootScope', '$http', '$q', '$log', EventsService]);

    function EventsService($rootScope, $http, $q, $log) {
        
        var endpoint = 'https://codehackdays-helloworldweb.herokuapp.com/rotas/events';

        // var mockData = [
        //     {
        //         name: 'Event 1',
        //         description: 'Event 1 description',
        //         start: (new Date()).toString(),
        //         end: (new Date()).toString(),
        //     },
        //     {
        //         name: 'Event 2',
        //         description: 'Event 2 description',
        //         start: (new Date()).toString(),
        //         end: (new Date()).toString(),
        //     },
        //     {
        //         name: 'Event 3',
        //         description: 'Event 3 description',
        //         start: (new Date()).toString(),
        //         end: (new Date()).toString(),
        //     }
        // ];

        return {
            getEvents: getEvents,
            addEvent: addEvent
        };

        function addEvent(event) {

            var deferred = $q.defer();
            $http({
                method: "POST",
                url: endpoint,
                data: event
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

        function getEvents(token) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: endpoint,
                headers: { authorization: token.token_type + " " + token.access_token }
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