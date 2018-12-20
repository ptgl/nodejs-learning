import {DATAMOCK} from "../const";

bankCtrl.$inject = ['$scope', 'myService'];
export function bankCtrl($scope, myService){
    this.$onInit = () =>{
        $scope.myService = myService;
        $scope.mode = "Guest Mode"

        if(myService.getDB('bankList') == null){
            myService.saveDB('bankList', JSON.stringify(DATAMOCK.bankList));
        }
       
        $scope.bankList = JSON.parse(myService.getDB('bankList'));
        $scope.link = 'bank';
    };

    $scope.remove = (index) => {
        $scope.bankList.splice(index,1);

        myService.saveDB('bankList', JSON.stringify($scope.bankList))
    }
    
}