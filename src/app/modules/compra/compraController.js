app.controller("compraController",["Compra","rutas",function(Compra,rutas){
   // logica del controller
    var ctrl = this;
    ctrl.rutas = rutas;
    ctrl.title = "Bienvenido a Tus Compras";
    ctrl.compras = [];
    ctrl.compras = Compra.query();
    console.log(ctrl.compras)
}]);