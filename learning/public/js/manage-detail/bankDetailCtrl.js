import {DROPDOWN} from "../const"

bankDetailCtrl.$inject = ['$scope', '$stateParams'];
export function bankDetailCtrl($scope, $stateParams){
    $scope.DROPDOWN = DROPDOWN;
    $scope.id = $stateParams.id;
    $scope.account = $stateParams.account;

    $scope.save = () =>{
        console.log($scope.account)
        console.log(JSON.stringify($scope.account))
    }
}