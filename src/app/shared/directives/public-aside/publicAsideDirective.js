app.directive('publicAside', [function() {
    return { 
        restrict : "E", 
        templateUrl : "./app/shared/directives/public-aside/publicAsideView.html",
        replace: true,
        scope : {
            title : "@",
            links : "="
        }
    }
}]);