bankDetailCtrl.$inject = ['$scope', '$stateParams'];
export function bankDetailCtrl($scope, $stateParams){
    $scope.id = $stateParams.id;
    $scope.account = $stateParams.account;
}