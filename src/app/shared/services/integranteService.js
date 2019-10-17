app.factory('Integrante', ["$resource", "api", function($resource, api) {	
    var service = $resource(api.baseUrl+'/integrantes/:id');
    return service;
}]);