(function() {
    'use strict'
    angular.module('application').controller('PeopleController', ['PeopleService', 'TokenService', PeopleController]);

    function PeopleController(PeopleService, TokenService) {
        var self = this;

        self.people = null;

        TokenService.retrieve().then(function(token) {
            getPeople(token);
        });

        function getPeople(token) {
            PeopleService.getPeople(token).then(function(people) {
                console.log(people)
                self.people = people;
            });
        }
    }

})();
