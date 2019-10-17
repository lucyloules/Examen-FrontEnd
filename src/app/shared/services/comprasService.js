app.factory("Compra",["$resource","api", function($resource,api){
     var service = $resource(api.baseUrl+'/compras/:id');
     return service;
}])