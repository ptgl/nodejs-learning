import { func } from "prop-types";

mainService.$inject = ['$state'];
export function mainService($state){
    

    this.gotoState = function(name,param){
        $state.go(name, param);
      }  

    this.saveDB = function(key, value){
        sessionStorage.setItem(key, value);
    }

    this.getDB = function(key){
        return sessionStorage.getItem(key);
    }
}