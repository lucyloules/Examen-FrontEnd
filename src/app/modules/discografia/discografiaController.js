app.controller("discografiaController", ["$routeParams", "rutas", "Disco", function($routeParams, rutas, Disco){
    var ctrl = this;
    ctrl.greeting = 'Hola! Estas siendo controlado por el discografiaController. ';
    ctrl.current = new Date();
    ctrl.fechaActual = ctrl.current.getDate() + "/"+ ctrl.current.getMonth() + "/" + ctrl.current.getFullYear();
    $routeParams.disco = $routeParams.disco == undefined ? "Queen" : $routeParams.disco;
    ctrl.discos = [];
    ctrl.links = [];
    ctrl.discoSeleccionado = {};
    
    ctrl.discos = Disco.query(function(value){

        ctrl.discos.unshift({
            nombre : "Queen",
            urlImagen : "./img/queen-albums.jpg",
            desc : "Queen es y sera la banda mas popular de todos los tiempos...Tuvo muchos discos y puros exitasos!"
        });

        for (var i = 0; i<ctrl.discos.length; i++){
            var disco = ctrl.discos[i];
            //Anadimos nueva property href en cada objeto de discos.
            if(disco.nombre == "Queen"){
                disco.href = rutas.appBaseUrl+rutas.discografia;
            } else {
                disco.href = rutas.appBaseUrl+rutas.discografia+"/"+disco.nombre;
            }
            //Conformamos links para directiva de public-aside
            var link = {
                text : disco.nombre,
                href : disco.href,
                active : disco.nombre == $routeParams.disco ? true : false
            }
            ctrl.links.push(link);
        }

        ctrl.discoSeleccionado = ctrl.discos.filter(function(disco){
            return disco.nombre == $routeParams.disco;
        })[0];

    }, function(httpResponse){
        //error
    });

}]);