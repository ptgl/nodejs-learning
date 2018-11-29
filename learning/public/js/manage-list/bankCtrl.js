import {DATAMOCK} from "../const";

bankCtrl.$inject = ['$scope', 'myService'];
export function bankCtrl($scope, myService){
    $scope.bankList = DATAMOCK.bankList;
    $scope.myService = myService;
    
}