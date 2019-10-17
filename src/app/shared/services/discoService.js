app.factory('Disco', ['$resource', 'api', function($resource, api) {	
    var service = $resource(api.baseUrl+'/discos/:id');
    return service;
}]);