app.controller("loginController", ["Auth", "rutas", "$location", "$scope", function(Auth, rutas, $location, $scope){
    var ctrl = this;
    ctrl.errorMessage;

    ctrl.login = function(){

        Auth.login(ctrl.form.email, ctrl.form.password)
        .then(function(response){
            return response.json();
        })
        .then(function(success){

            if(success.access_token){
                Auth.saveToken(success.access_token);
                ctrl.errorMessage = undefined;
                $location.url(rutas.dashboard);
            } else {
                ctrl.errorMessage = success.message;
            }
            $scope.$apply();
        });
        
    };
}])