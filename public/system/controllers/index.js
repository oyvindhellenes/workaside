'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource','jsonService', function ($scope, Global, $resource, jsonService) {
    
	var User = $resource('/api/user');
    var Wall = $resource('/api/wall');

    $scope.wall = {
        value: ""
    }

	Wall.query(function (results) {
		$scope.wall.value = results;
        console.log('test' + angular.toJson($scope.wall.value));
        console.log('test' + angular.toJson($scope.wall.value.name));
	});

    $scope.global = Global;

    console.log('global: ' + angular.toJson($scope.global));

    $scope.wallElements = {
        name: "",
        what: "",
        why: "",
        whom: "",
        links: [
            {
                name: "",
                url: ""
            }
        ],
        ioth: [
            {
                name: "",
                imageUrl: "",
                qoute: ""
            }

        ],
        gotw: [
            {
                task: ""
            }
        ]
    };

    $scope.addWall = function(){
    	var wall = new Wall();
        wall.name = $scope.wallElements.name;
        wall.what = $scope.wallElements.what;
        wall.why = $scope.wallElements.why;
        //wall.whom = $scope.wallElements.whom;
        wall.links = $scope.wallElements.links;
        wall.ioth = $scope.wallElements.ioth;
    	wall.gotw = $scope.wallElements.gotw;
        //problem.userid = $scope.global.user._id;
    	wall.$save(function (req, res){
            $scope.wall.value = res;
        });

        console.log('test' + angular.toJson($scope.wallElements));
    }

    $scope.removeProblem = function(prob){
        var problem = new Wall();
        problem.$delete(prob);
    }
}]);