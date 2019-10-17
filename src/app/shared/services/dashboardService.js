app.factory('Dashboard', ["$resource", "api", function($resource, api) {	
    var service = $resource(api.baseUrl+'/dashboards/:id');
    return service;
}]);