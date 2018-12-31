import {DROPDOWN, DATAMOCK} from "../const"
import {CONST } from "../const"
bankDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'myService'];
export function bankDetailCtrl($scope, $stateParams, $state, myService){
    

    this.$onInit = () => {
        
        myService.initDB().then(list =>{
            $scope.BANKLIST = list;
        });
        
        $scope.DROPDOWN = DROPDOWN;
        $scope.params = $stateParams ;
        
        $scope.account = $stateParams.account;

    }

    $scope.save = () =>{
        console.log($scope.account)
        console.log(JSON.stringify($scope.account));

        var idx = $scope.BANKLIST.findIndex(b => {return b.accountNo == $scope.account.accountNo})
        if(idx != -1 ){
            $scope.BANKLIST[idx] = $scope.account;
            myService.saveDB('bankList', JSON.stringify($scope.BANKLIST))
            $state.go('manage.detail',{link:'bank',account: $scope.BANKLIST[idx]})
        }else{
            alert('Account doesn\'t exist!!!')
        }
    }

    $scope.create = () =>{
      if(myService.mode == CONST.DB_MODE.ES){
        var url = CONST.URL.TYPE_ES.BANK + '/'+$scope.account.accountNo;
        myService.getDB(url).then(result=> {
            alert('Account existed!!!');
        },(err)=>{
            console.log(err);
            if(err.status == 404){
                myService.saveDB(url, $scope.account).then(res=>{
                    if(res){
                        alert('Account created successfully!')
                        $scope.account = {};
                    }
                })
            }
        })
      }else{
          var idx = $scope.BANKLIST.findIndex(b => {return b.accountNo == $scope.account.accountNo})
          if(idx == -1 ){
              $scope.BANKLIST.push($scope.account);
              myService.saveDB('bankList', JSON.stringify($scope.BANKLIST))
              $state.go('manage.listView',{link:'bank'})
          }else{
              alert('Account existed!!!')
          }

      }

    }
}