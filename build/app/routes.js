(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('homepage', {
            url: '/',
            templateUrl: './app/components/home/home-view.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })

        .state('events', {
            url: '/events',
            templateUrl: './app/components/events/events-view.html',
            controller: 'EventsController',
            controllerAs: 'eventsCtrl'
        })

        .state('people', {
            url: '/people',
            templateUrl: './app/components/people/people-view.html',
            controller: 'PeopleController',
            controllerAs: 'peopleCtrl'
        })

        $urlRouterProvider.otherwise('/');
    }]);

})();