mainService.$inject = ['$state'];
export function mainService($state){
    

    this.gotoState = function(name,param){
        $state.go(name, param);
      }  
}