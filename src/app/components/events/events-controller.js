(function() {
    'use strict'
    angular.module('application').controller('EventsController', ['EventsService', EventsController]);

    function EventsController(EventsService) {
        var self = this;
        
        self.events = null;
        
        EventsService.getEvents().then(function(events) {
            console.log(events)
            self.events = events;  
        });
    }

})();