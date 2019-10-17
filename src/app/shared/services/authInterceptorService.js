app.factory("AuthInterceptor", ["Auth", "api", "rutas", "$location", function(Auth, api, rutas, $location) {	
	var service = {};
	
	service.request = function(config) {
		var token = Auth.getToken();
		if(config.url.indexOf(api.baseUrl) === 0 && token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	};

	/*service.response = function(res) {
		if(res.config.url.indexOf(api.baseUrl) === 0 
				&& res.data && res.data.success && res.data.success.access_token) { 
			AuthJwt.saveToken(res.data.success.token);
			//$log.info("El token de acceso se guardo en sessionStorage exitosamente.");
		}
		return res;
	};*/
	
	service.responseError = function(rejection) {
		if(rejection.status == 401){
            $location.path(rutas.logout);
		}
	};
	
    return service;
    
}]);