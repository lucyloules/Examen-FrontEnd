app.directive('publicNav', ["$location", "rutas", function($location, rutas) {
    return { 
        restrict : "E", 
        templateUrl : "./app/shared/directives/public-nav/publicNavView.html",
        replace: true,
        scope : {},
        link: function (scope, element, attrs) {
            scope.currentLocation = $location.path();
            scope.rutas = rutas;
        }
    }
}]);