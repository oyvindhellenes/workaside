'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource', function ($scope, Global, $resource) {
    
	var Movie = $resource('/api/movies');
    $scope.movies = {
        value: ""
    }

	Movie.query(function (results) {
		$scope.movies.value = results;
	});

    $scope.global = Global;

    $scope.movieName = "";

    $scope.addMovie = function(){
    	var movie = new Movie();
    	movie.name = $scope.movieName;
    	movie.$save(function (req, res){
            $scope.movies.value.push(res);
        });
    	$scope.movieName = "";
    }

    $scope.remove = function(mov){
        var movie = new Movie();
        movie.$delete(mov);
    }
}]);