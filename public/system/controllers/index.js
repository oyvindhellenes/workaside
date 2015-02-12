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
            
        wall.$save(function (req, res){
            // Do something
        });
    }

    $scope.remove = function(w){
        console.log('id' + w._id);
        console.log('length2' + $scope.walls.value.length);
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