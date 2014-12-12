'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource', function ($scope, Global, $resource) {
    
	var Movie = $resource('/api/movies');

	Movie.query(function (results) {
		$scope.movies = results;
	});

    $scope.global = Global;

    $scope.movieName = "";

    $scope.addMovie = function(){
    	var movie = new Movie();
    	movie.name = $scope.movieName;
    	movie.$save();
    	$scope.movieName = "";
    }
}]);