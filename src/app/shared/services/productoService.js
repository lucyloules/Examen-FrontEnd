app.factory('Producto', ["$resource", "api", function($resource, api) {	
      var service = $resource(api.baseUrl+'/productos/:id');
      return service;
  }]);