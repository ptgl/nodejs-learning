import {DATAMOCK} from "../const";

bankCtrl.$inject = ['$scope', 'myService'];
export function bankCtrl($scope, myService){
    this.$onInit = () =>{
        $scope.myService = myService;
        $scope.mode = "Guest Mode";
    
        myService.initDB().then(list =>{
            $scope.bankList = list;
        });
         
        $scope.link = 'bank';
    };

    $scope.remove = (index) => {
        $scope.bankList.splice(index,1);

        myService.saveDB('bankList', JSON.stringify($scope.bankList))
    }
    
}