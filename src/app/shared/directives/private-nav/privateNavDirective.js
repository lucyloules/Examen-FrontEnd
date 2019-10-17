app.directive("privateNav",["$location","rutas","Auth",function($location,rutas, Auth) {
    return{
        restrict: "E",
        replace:true,
        templateUrl: "./app/shared/directives/private-nav/privateNavView.html",
        scope: {},
        link: function(scope,element,attr) {
            scope.currentLocation = $location.path();
            scope.rutas = rutas;
            scope.usuario = Auth.parseToken(Auth.getToken()).email; // agrega el usuario de a vista privada
        }
    }
}])