'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$resource', function ($scope, Global, $resource) {
    
    $scope.wall = {
        name: ""
    }
    var User = $resource('/api/user');
    var Wall = $resource('/api/wall');

    $scope.walls = {
        value: []
    };

    Wall.query(function(results){
        console.log('length' + results.length);

        for (var i in results){
            $scope.walls.value[i] = results[i];
        }
    })

    $scope.addWall = function(){
        var wall = new Wall();
        wall.name = $scope.wall.name;
            
        wall.$save().then(function(res){
            $scope.walls.value.push(res);
        });
    }

    $scope.remove = function(w){

        var wall = new Wall();
        wall.$delete(w).then(function(results){
            for (var i in $scope.walls.value) {

                if ($scope.walls.value[i]._id == w._id) {
                    $scope.walls.value.splice(i, 1);
                };
            }          

        }); 
    }

}]);