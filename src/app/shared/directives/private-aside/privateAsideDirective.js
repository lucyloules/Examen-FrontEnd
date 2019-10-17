app.directive("privateAside",["$location","rutas",function($location,rutas) {
    return{
        restrict: "E",
        replace:true,
        templateUrl: "./app/shared/directives/private-aside/privateAsideView.html",
        scope: {},
        link: function(scope,element,attr) {
            scope.currentLocation = $location.path();
            scope.rutas = rutas;
        }
    }
}])