angular.module("app").controller("myCtrl1",["$scope",function($scope){
    var person={
        firstName:"Richard",
        lastName:"Powel",
        img:"http://cdn.quotationof.com/images/dick-powell-3.jpg"
    };
    $scope.person=person;    
}]);
