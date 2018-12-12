import { func } from "prop-types";
import { DAO } from "./DAO"

mainService.$inject = ['$state'];
export function mainService($state){
    
    var storage;
    (function init(){
        console.log('init')
        var dao = new DAO();
        storage = dao.dbFactory('local');
    })()
    
    this.gotoState = function(name,param){
        $state.go(name, param);
      }  

    this.saveDB = function(key, value){
        storage.saveDB(key, value);     
    }

    this.getDB = function(key){
        return storage.getDB(key);
    }
}