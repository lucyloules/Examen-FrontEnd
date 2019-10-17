app.controller("dashboardController", ["rutas", "Auth", "Dashboard", function(rutas, Auth, Dashboard){
    var ctrl = this;
    ctrl.rutas = rutas;
    ctrl.usuario = Auth.parseToken(Auth.getToken()).email;
    ctrl.songs = [];
    ctrl.dashboard = Dashboard.get({ id : 1 }, function(value){
        ctrl.songs = ctrl.dashboard.songs;
    });
}]);