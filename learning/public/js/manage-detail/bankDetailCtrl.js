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

        if(myService.mode == CONST.DB_MODE.ES){
            var url = CONST.URL.TYPE_ES.BANK + '/'+ $scope.account.accountNo;
            myService.saveDB(url, $scope.account).then(res=>{
                if(res.hasOwnProperty('message')){
                    alert(res.message);
                }else{
                    $state.go('manage.detail',{link:'bank',account: res})
                }
            })

        }else{
            var idx = $scope.BANKLIST.findIndex(b => {return b.accountNo == $scope.account.accountNo})
            if(idx != -1 ){
                $scope.BANKLIST[idx] = $scope.account;
                myService.saveDB('bankList', JSON.stringify($scope.BANKLIST))
                $state.go('manage.detail',{link:'bank',account: $scope.BANKLIST[idx]})
            }else{
                alert('Account doesn\'t exist!!!')
            }

        }

    }

    $scope.create = () =>{
      if(myService.mode == CONST.DB_MODE.ES){
        var url = CONST.URL.TYPE_ES.BANK + '/'+ $scope.account.accountNo;
        myService.createES(url, $scope.account).then(res => {
            if(res.hasOwnProperty('message')){
                alert(res.message);
            }else{
                alert('Account created successfully!');
                $state.go('manage.listView',{link:'bank'})
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