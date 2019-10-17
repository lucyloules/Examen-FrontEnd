app.controller("contactoController", ["$location", function($location){
    var ctrl = this;
    ctrl.greeting = 'Hola! Estas siendo controlado por el contactoController. ';
    ctrl.currentLocation = $location.path();
    ctrl.paises = [{
            nombre : "Chile",
            iso : "CL"
        }, {
            nombre : "Brasil",
            iso : "BR",
        }, {
            nombre : "Argentina",
            iso : "AR"
        }
    ];
    ctrl.motivos = [{
        nombre : "Felicitaciones",
            id : 1
        }, {
            nombre : "Reclamos",
            id : 2,
        }, {
            nombre : "Sugerencias",
            id : 3
        }
    ];

    ctrl.enviar = function(){
        console.log("ctrl.form : ", ctrl.form);
    };
}])