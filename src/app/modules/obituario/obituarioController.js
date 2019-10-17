app.controller("obituarioController", ["$location", "Post", function($location, Post){
    var ctrl = this;
    ctrl.greeting = 'Hola! Estas siendo controlado por el obituarioController. ';
    ctrl.current = new Date();
    ctrl.fechaActual = ctrl.current.toLocaleString();
    ctrl.currentLocation = $location.path();
    ctrl.posts = Post.query();

    ctrl.addPost = function(){

        //Seteamos el dato que no es seteado en el ng-model
        ctrl.nuevoPost.fechaCreacion = ctrl.fechaActual;

        //Guardamos un nuevo Post en db.json
        ctrl.nuevoPost = Post.save(ctrl.nuevoPost, function(value){
            
            //actualizamos la lista con lo que se ha insertado en db.json
            ctrl.posts = Post.query();

            //reseteamos el model para limpiar el formulario
            ctrl.nuevoPost = null;

        }, function(httpResponse){
            console.log("hubo un error : ", httpResponse);
        });
    };
}]);