'use strict';

angular.module('mean.system').factory('jsonService', ['$resource', function($resource) {
    return $resource('/public/system/json/wall.json');
}]);