(function() {
    'use strict'
    angular.module('application').controller('PeopleController', ['PeopleService', PeopleController]);

    function PeopleController(PeopleService) {
        var self = this;

        self.people = null;

        PeopleService.getPeople().then(function(people) {
            console.log(people)
            self.people = people;
        });
    }

})();
