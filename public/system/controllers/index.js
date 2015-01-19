'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource', function ($scope, Global, $resource) {
    
	var Problem = $resource('/api/problems');
    $scope.problems = {
        value: ""
    }

	Problem.query(function (results) {
		$scope.problems.value = results;
        console.log('test' + angular.toJson($scope.problems.value));
	});

    $scope.global = Global;

    console.log('global: ' + angular.toJson($scope.global));

    $scope.problemName = "";

    $scope.addProblem = function(){
    	var problem = new Problem();
    	problem.name = $scope.problemName;
    	problem.$save(function (req, res){
            $scope.problems.value.push(res);
        });
    	$scope.problemName = "";

        console.log('test' + angular.toJson($scope.problemName));
    }

    $scope.removeProblem = function(prob){
        var problem = new Problem();
        problem.$delete(prob);
    }
}]);