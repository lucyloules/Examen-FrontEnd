var app = angular.module("queen", ["ngRoute", "ngResource", "ui.bootstrap"])
    .config(["$routeProvider", "rutas", "$httpProvider", function($routeProvider, rutas, $httpProvider){

        /* Rutas */
        $routeProvider
            .when(rutas.home, {
                controller : "homeController",
                controllerAs : "homeCtrl",
                templateUrl : "./app/modules/home/homeView.html"
            })
            .when(rutas.banda, {
                controller : "bandaController",
                controllerAs : "bandaCtrl",
                templateUrl : "./app/modules/banda/bandaView.html"
            })
            .when(rutas.banda+"/:integrante", {
                controller : "bandaController",
                controllerAs : "bandaCtrl",
                templateUrl : "./app/modules/banda/bandaView.html"
            })
            .when(rutas.discografia, {
                controller : "discografiaController",
                controllerAs : "discografiaCtrl",
                templateUrl : "./app/modules/discografia/discografiaView.html"
            })
            .when(rutas.discografia+"/:disco", {
                controller : "discografiaController",
                controllerAs : "discografiaCtrl",
                templateUrl : "./app/modules/discografia/discografiaView.html"
            })
            .when(rutas.obituario, {
                controller : "obituarioController",
                controllerAs : "obituarioCtrl",
                templateUrl : "./app/modules/obituario/obituarioView.html"
            })
            .when(rutas.contacto, {
                controller : "contactoController",
                controllerAs : "contactoCtrl",
                templateUrl : "./app/modules/contacto/contactoView.html"
            })
            .when(rutas.login, {
                controller : "loginController",
                controllerAs : "loginCtrl",
                templateUrl : "./app/modules/login/loginView.html"
            })
            .when(rutas.logout, {
                resolve: {
                    logout: ['Auth', '$location', function (Auth, $location) {
                        Auth.logout();
                        $location.url(rutas.home);
                    }]
                }
            })
            .when(rutas.dashboard, {
                controller : "dashboardController",
                controllerAs : "dashboardCtrl",
                templateUrl : "./app/modules/dashboard/dashboardView.html",
                data : {
                    authNeeded : true
                }
            })
            .when(rutas.tienda, {
                controller : "tiendaController",
                controllerAs : "tiendaCtrl",
                templateUrl : "./app/modules/tienda/tiendaView.html",
                data : {
                    authNeeded : true
                }
            })
            .when(rutas.compra, {
                controller : "compraController",
                controllerAs : "compraCtrl",
                templateUrl : "./app/modules/compra/compraView.html",
                data : {
                    authNeeded : true
                }
            })
            .otherwise({
                redirectTo: rutas.home
            });

            /*Interceptamos $http para anadir JWT Authorization header*/ 
	        $httpProvider.interceptors.push('AuthInterceptor');
    }])
    .run(["$rootScope", "$location", "rutas", "Auth", function($rootScope, $location, rutas, Auth){
        
        /*Configuracion de transiciones de rutas*/
        $rootScope.$on("$routeChangeStart", function(evt, to, from){
            //Check de rutas con login requerido
            if (to && to.data 
                    && to.data.authNeeded
                    && Auth.isAuthed() == false) {
                $location.path(rutas.home);
            }
            //Si la ruta es publica, enviar al dashboard si el usuario esta logueado
            if (to && (!to.data || !to.data.authNeeded) && Auth.isAuthed() && to.$$route.originalPath!=rutas.logout) {
                $location.path(rutas.dashboard);
            }
        });                        
    }]);