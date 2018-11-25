import {DATAMOCK} from "../const";

bankCtrl.$inject = ['$scope'];
export function bankCtrl($scope){
    $scope.bankList = DATAMOCK.bankList;
}