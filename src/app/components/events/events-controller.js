(function() {
    'use strict'
    angular.module('application').controller('EventsController', ['EventsService', 'TokenService', EventsController]);

    function EventsController(EventsService, TokenService) {
        var self = this;
        
        self.events = null;
        
        // Retrieve token
        TokenService.retrieve().then(function(token) {
            // Then retrieve events
            getEvents(token);
        });

        function getEvents(token) {
            EventsService.getEvents(token).then(function(events) {
                console.log(events)
                self.events = events;  
            });
        }
    }

})();