(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['$scope', 'HomeServices', HomeController]);

    function HomeController($scope, HomeServices) {
        self = this;
        self.message = '';
        self.messageInput = '';

        // Values
        self.values = {};

        self.getValues = function() {
          HomeServices.getValues().then(
          function(result) {
              self.values = result;
          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });
        }

        self.clickSetPair = function(key, value) {
            console.log(key);
            console.log(value);

            HomeServices.setValues(key,value).then(
            function(result) {
                self.message = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });
        }

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