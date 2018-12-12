export class DAO{
    //constructor(){}
    dbFactory(mode){
        switch (mode){
            case 'session':
                return new SessionStorage();
            case 'local':
                return new LocalStorage();
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