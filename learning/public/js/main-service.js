import { func } from "prop-types";
import { DAO } from "./DAO";
import { CONST} from "./const"

mainService.$inject = ['$state', '$q', '$http'];
export function mainService($state, $q, $http){

    
        console.log('init')
        var dao = new DAO($q, $http);
        //this.mode = CONST.DB_MODE.LOCALSTORAGE;
        this.mode = CONST.DB_MODE.ES;
        this.storage = dao.dbFactory(this.mode);
       
    this.initDB = ()=>{
        var deferred = $q.defer();
        if(this.mode == CONST.DB_MODE.ES){
            this.storage.getAllDB('demo').then(result=>{
                deferred.resolve(result);
            })
            
        }else{
            if(this.getDB('bankList') == null){
                this.saveDB('bankList', JSON.stringify(DATAMOCK.bankList));
            }
            deferred.resolve( JSON.parse(this.getDB('bankList')));
        }
        return  deferred.promise;
    }
        
    this.gotoState = function(name,param){
        
        $state.go(name, param);
      }  

    this.saveDB = function(key, value){
        if(this.mode != CONST.DB_MODE.ES)
            this.storage.saveDB(key, value);  
        else{
            var deferred = $q.defer();
            this.storage.saveDB(key, value).then((result)=>{
            deferred.resolve(result);
        })
        return  deferred.promise;
        }   
    }

    this.getDB = function(key){
        if(this.mode != CONST.DB_MODE.ES)
            return this.storage.getDB(key);
        else{
            var deferred = $q.defer();
            this.storage.getDB(key).then((result)=>{
            deferred.resolve(result);
        })
        return  deferred.promise;
        }
    }

    this.executeRequest = function(method, url, data, params){
        
		var deferred = $q.defer();
        var req = {
            'method': method,
            'url': url,
            'data': data,
            'params': params
        }
          $http(req).then(function(result){
            
            console.log(data);
            deferred.resolve(data);
          })
          return  deferred.promise;
    }

    this.getES = function(url){

		var deferred = $q.defer();
        
        this.storage.getDB(url).then((result)=>{
            deferred.resolve(result);
        })
        return  deferred.promise;
    }

    


}