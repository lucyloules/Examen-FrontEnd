app.controller("homeController", ["$location", function($location){
    var ctrl = this;
    ctrl.greeting = 'Hola! Estas siendo controlado por el homeController. ';
    ctrl.currentLocation = $location.path();
}])