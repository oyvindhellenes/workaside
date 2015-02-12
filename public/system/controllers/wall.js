'use strict';

angular.module('mean.system').controller('WallController', ['$scope', 'Global','$resource','$stateParams', function ($scope, Global, $resource, $stateParams) {
    
	var User = $resource('/api/user');
    var Wall = $resource('/api/wall/' + $stateParams.id);


    $scope.show = false;

	Wall.query(function (results) {

        $scope.wallElements = {
            name: results[results.length-1].name,
            what: results[results.length-1].what,
            why: results[results.length-1].why,
            whom: results[results.length-1].whom,
            links: [
                {
                    name: "",
                    url: ""
                },
                {
                    name: "",
                    url: ""
                },
                {
                    name: "",
                    url: ""
                },
            ],
            ioth: [
                {
                    name: " ",
                    imageUrl: "",
                    qoute: ""
                }

            ],
            gotw: [
                {
                    task: ""
                },
                {
                    task: ""
                },
                {
                    task: ""
                }
            ]
        };

        // Check if results.gotw is empty
        for (var i in results[results.length-1].gotw) {
            if (results[results.length-1].gotw[i].task != undefined) {
                $scope.wallElements.gotw[i].task = results[results.length-1].gotw[i].task;
            };
        }

        for (var i in results[results.length-1].links) {
            if (results[results.length-1].links[i].url != undefined) {
                $scope.wallElements.links[i].url = results[results.length-1].links[i].url;
            };
        }

        if (results[results.length-1].ioth[0]) {

            if (typeof results[results.length-1].ioth[0].name != undefined) {
                $scope.wallElements.ioth[0].name = results[results.length-1].ioth[0].name
            }        
            if (typeof results[results.length-1].ioth[0].imageUrl != undefined) {
                $scope.wallElements.ioth[0].imageUrl = results[results.length-1].ioth[0].imageUrl
            }        
            if (typeof results[results.length-1].ioth[0].qoute != undefined) {
                $scope.wallElements.ioth[0].qoute = results[results.length-1].ioth[0].qoute
            }
            if (!results[results.length-1].name){
                $scope.wallElements.name = "Project Name";
            }
        };


	});

    $scope.global = Global;

    $scope.updateWall = function(){
    	var wall = new Wall();
        wall.name = $scope.wallElements.name;
        wall.what = $scope.wallElements.what;
        wall.why = $scope.wallElements.why;
        wall.whom = $scope.wallElements.whom;
        wall.links = $scope.wallElements.links;
        wall.ioth = $scope.wallElements.ioth;
    	wall.gotw = $scope.wallElements.gotw;
    	
        wall.$save(function (req, res){
            console.log('req' + angular.toJson(req));
            console.log('res' + angular.toJson(res));
        });

        $scope.show = false;
    }


}]);