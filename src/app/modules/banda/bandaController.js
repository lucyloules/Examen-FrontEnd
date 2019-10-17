app.controller("bandaController", ["$location", "$routeParams", "rutas", "Integrante", function($location, $routeParams, rutas, Integrante){
    var ctrl = this;
    ctrl.greeting = 'Hola! Estas siendo controlado por el bandaController. ';
    ctrl.current = new Date();
    ctrl.fechaActual = ctrl.current.getDate() + "/"+ ctrl.current.getMonth() + "/" + ctrl.current.getFullYear();
    ctrl.currentLocation = $location.path();
    $routeParams.integrante = $routeParams.integrante !== undefined ? $routeParams.integrante : 'Queen';
    ctrl.integrantes = [];
    ctrl.links = [];
    ctrl.integranteSeleccionado = {};

    ctrl.integrantes = Integrante.query(function(value){

        ctrl.integrantes.unshift({
            nombre : "Queen",
            descripcion : "Es la mejor banda de todas..."
        });

        for (var i = 0; i<ctrl.integrantes.length; i++){
            
            var integrante = ctrl.integrantes[i];
    
            //Anadimos nueva property href en cada objeto de integrantes.
            if(integrante.nombre == "Queen"){
                integrante.href = rutas.appBaseUrl+rutas.banda;
            } else {
                integrante.href = rutas.appBaseUrl+rutas.banda+"/"+integrante.nombre;
            }
    
            //Conformamos links para directiva de public-aside
            var link = {
                text : integrante.nombre,
                href : integrante.href,
                active : integrante.nombre == $routeParams.integrante ? true : false
            }
            ctrl.links.push(link);
    
        }
    
        ctrl.integranteSeleccionado = ctrl.integrantes.filter(function(integrante){
            return integrante.nombre == $routeParams.integrante;
        })[0];

    }, function(httpResponse){
        //error
    });

}]);