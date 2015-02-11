'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource', function ($scope, Global, $resource) {
    
    $scope.wall = {
        name: ""
    }
    var User = $resource('/api/user');
    var Wall = $resource('/api/wall');

    $scope.walls = {};

    Wall.query(function(results){

        for (var i in results){
            $scope.walls[i] = results[i];
        }
    })

    $scope.addWall = function(){
        var wall = new Wall();
        wall.name = $scope.wall.name;
        
        wall.$save(function (req, res){
            // Do something
        });

        console.log('test' + angular.toJson($scope.wallElements));
    }

}]);