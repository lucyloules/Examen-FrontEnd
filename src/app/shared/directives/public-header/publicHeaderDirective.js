app.directive('publicHeader', [function() {
    return { 
        restrict : "E", 
        templateUrl : "./app/shared/directives/public-header/publicHeaderView.html",
        replace: true
    }
}]);