app.factory('Post', ["$resource", "api", function($resource, api) {	
    var service = $resource(api.baseUrl+'/posts/:id');
    return service;
}]);