
detailCtrl.$inject = ['$scope', '$stateParams'];
export function detailCtrl($scope, $stateParams){
    $scope.heroName = $stateParams.name;
    $scope.id = $stateParams.id;

}