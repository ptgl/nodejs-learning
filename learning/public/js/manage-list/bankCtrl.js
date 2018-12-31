import { CONST} from "../const";

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
        
        if(myService.mode == CONST.DB_MODE.ES){
            var url = CONST.URL.TYPE_ES.BANK + '/' + $scope.bankList[index].accountNo;
            myService.deleteById(url).then(res=>{
                if(res){
                   
                }
            },err=>{
                console.log(err);
            })
        }else{
            
            myService.saveDB('bankList', JSON.stringify($scope.bankList))
        }
    }
    
}