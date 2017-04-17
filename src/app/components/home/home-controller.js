(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['$scope', 'HomeServices', HomeController]);

    function HomeController($scope, HomeServices) {
        self = this;
        self.message = '';
        self.messageInput = '';

        // Values
        self.token = {};
        self.values = {};

        self.askToken = function() {
            HomeServices.askToken().then(
            function(result) {
                self.token = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });
        }

        self.getValues = function() {
          HomeServices.getValues(self.token).then(
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

            HomeServices.setValues(self.token,key,value).then(
            function(result) {
                self.message = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });
        }

        self.updateMessage = function() {

          HomeServices.sayHello(self.token,self.messageInput).then(
          function(result) {
              self.message = result;
          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });
        }

        HomeServices.sayHello(self.token).then(
        function(result) {
            self.message = result;
        },
        function(err) {
            console.log('Error retrieving from endpoint: ', err);
        });

    };


})();
