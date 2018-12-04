import {DROPDOWN, DATAMOCK} from "../const"

bankDetailCtrl.$inject = ['$scope', '$stateParams', '$state'];
export function bankDetailCtrl($scope, $stateParams, $state){
    $scope.DROPDOWN = DROPDOWN;
    $scope.BANKLIST = DATAMOCK.bankList;
    $scope.id = $stateParams.id;
    $scope.account = $stateParams.account;

    $scope.save = () =>{
        console.log($scope.account)
        console.log(JSON.stringify($scope.account));

        var idx = $scope.BANKLIST.findIndex(b => {return b.accountNo == $scope.account.accountNo})
        if(idx != -1 ){
            $scope.BANKLIST[idx] = $scope.account;
            $state.go('manage.detail',{link:'bank',account: $scope.BANKLIST[idx]})
        }

    }
}