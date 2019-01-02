import {CONST} from './const'


export class DAO{
    constructor($q, $http){
        this.$q = $q;
        this.$http = $http;
    }

    
    dbFactory(mode){
        switch (mode){
            case CONST.DB_MODE.SESSIONSTORAGE:
                return new SessionStorage();
            case CONST.DB_MODE.LOCALSTORAGE:
                return new LocalStorage();
            default:
                return new ESStorage(this.$q, this.$http)
            
        }
            
        
    }
}

class SessionStorage{
    saveDB(key, value){
        sessionStorage.setItem(key, value);
    }

    getDB(key){
        return sessionStorage.getItem(key);
    }
}

class LocalStorage{

    saveDB(key, value){
            localStorage.setItem(key, value);
    }

    getDB(key){
        return localStorage.getItem(key);
    }
}

//ESStorage.$inject = ['$q', '$http']
class ESStorage{
    constructor($q, $http){
        this.$q = $q;
        this.$http = $http;
    }

    executeRequest(method, url, data, params){
        
		var deferred = this.$q.defer();
        var req = {
            'method': method,
            'url': url,
            'data': data,
            'params': params
        }
          this.$http(req).then(function(result){
            
            console.log(result);
            deferred.resolve(result);
          }, error =>{
            deferred.reject(error);
          })
          return  deferred.promise;
    }

    getDB(url){ //url = 'bank/001'
        var deferred = this.$q.defer();

        this.executeRequest('GET', CONST.API.GET_ES + url).then((result)=>{
            deferred.resolve(result);
        },(err)=>{
            deferred.reject(err);
        })
        return  deferred.promise;
    }

    getAllDB(url){ //url = 'bank'
        var deferred = this.$q.defer();

        this.executeRequest('GET', CONST.API.GET_ALL_ES + url).then((result)=>{
            deferred.resolve(result.data);
        }, (err)=>{
            deferred.reject(err);
        })
        return  deferred.promise;
    }

    saveDB(url, data){
        var deferred = this.$q.defer();
        this.executeRequest('POST', CONST.API.SAVE_ES + url, data).then((result)=>{
            deferred.resolve(result.data);
        }, (err)=>{
            deferred.reject(err);
        })
        return  deferred.promise;
    }

    create(url, data){
        var deferred = this.$q.defer();
        this.executeRequest('POST', CONST.API.CREATE_NEW + url, data).then((result)=>{
            deferred.resolve(result.data);
        }, (err)=>{
            deferred.reject(err);
        })
        return  deferred.promise;
    }

    deleteById(url, data){
        var deferred = this.$q.defer();
        this.executeRequest('DELETE', CONST.API.DELETE_ES + url, data).then((result)=>{
            deferred.resolve(result);
        }, (err)=>{
            deferred.reject(err);
        })
        return  deferred.promise;
    }

}
