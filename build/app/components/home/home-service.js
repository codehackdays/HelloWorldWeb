angular.module('application').factory('HomeServices', function($http, $log, $q, $rootScope) {

    var factory = {};

    var recipesEndpoint = $rootScope.WebAPI + '/recipes';
    var recipeEndpoint = $rootScope.WebAPI + '/recipe/';

    return {
        getAllRecipes: getAllRecipes,
        getRecipeById: getRecipeById
    };


    function getAllRecipes() {

        var deferred = $q.defer();
        $http({
                method: "GET",
                url: recipesEndpoint,
            })
            .then(function(response) {
                deferred.resolve(response.data);
            })
            .catch(function(response) {
                $log.error('Error retrieving current user data: ' + status);
                return $q.reject('Error retrieving current user data');
            });
        return deferred.promise;
    };

    function getRecipeById(recipeId) {

        var deferred = $q.defer();
        $http({
                method: "GET",
                url: recipeEndpoint + recipeId,
            })
            .then(function(response) {
                deferred.resolve(response.data);
            })
            .catch(function(response) {
                $log.error('Error retrieving current user data: ' + status);
                return $q.reject('Error retrieving current user data');
            });
        return deferred.promise;
    };

});