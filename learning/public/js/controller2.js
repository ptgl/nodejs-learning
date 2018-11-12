
myController2.$inject = ['$scope', '$routeParams'];
export function myController2($scope, $routeParams){
    $scope.myName = $routeParams.name;
}