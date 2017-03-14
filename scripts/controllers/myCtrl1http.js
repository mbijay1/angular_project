angular.module("app").controller("myCtrl1http",["$scope","$http",function($scope,$http){
    var onUserComplete=function(response){
        $scope.user=response.data;
    };
    
    var onError=function(reason){
        $scope.err="Couldnt load the user";
    };
    
    $http.get("https://api.github.com/users/robconery")
        .then(onUserComplete, onError);
}]);