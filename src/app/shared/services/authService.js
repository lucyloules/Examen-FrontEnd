app.factory('Auth', ["api", "LocalStorage", "$window", function(api, LocalStorage, $window) {

    var service = {};
    
    service.login = function(email, password){

          return fetch(api.baseUrl+'/auth/login', {
            method: "POST", 
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers:{
                'Content-Type': 'application/json'
            }
          });
    };

    service.saveToken = function(token){
        LocalStorage.set("jwtToken", token);
    };

    service.getToken = function(){
        return LocalStorage.get("jwtToken");
    };

    service.parseToken = function(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse($window.atob(base64));        
    };

    service.isAuthed = function() {
        var token = service.getToken();
        if(token) {
            var params = service.parseToken(token);
            return Math.round(new Date().getTime() / 1000) <= params.exp;
        } else {
            return false;
        }
    }

    service.logout = function(){
        LocalStorage.remove("jwtToken");
    }

    return service;
}]);