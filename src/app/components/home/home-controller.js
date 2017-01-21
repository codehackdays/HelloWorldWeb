(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['$scope', 'HomeServices', HomeController]);

    function HomeController($scope, HomeServices) {
        self = this;
        self.message = '';
        self.messageInput = '';

        self.updateMessage = function() {

          HomeServices.sayHello(self.messageInput).then(
          function(result) {
              self.message = result;
          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });
        }

        HomeServices.sayHello().then(
        function(result) {
            self.message = result;
        },
        function(err) {
            console.log('Error retrieving from endpoint: ', err);
        });

    };


})();
