import {DATAMOCK} from "../const";

bankCtrl.$inject = ['$scope', 'myService'];
export function bankCtrl($scope, myService){
    this.$onInit = () =>{
        if(sessionStorage.getItem('bankList') == null){
            sessionStorage.setItem('bankList', JSON.stringify(DATAMOCK.bankList)) ;
        }
        $scope.bankList = JSON.parse(sessionStorage.getItem('bankList'));
        $scope.myService = myService;
        $scope.link = 'bank';
    };

    $scope.remove = (index) => {
        $scope.bankList.splice(index,1);
        myService.saveDB('bankList', JSON.stringify($scope.bankList))
    }
    
}