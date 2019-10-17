app.directive('formControlNumeroValidator', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, modelCtrl) {
            modelCtrl.$validators.formControlNumeroValidator = function valida(modelValue, viewValue) {
                var value = modelValue || viewValue;
                var reglas = attr.formControlNumeroValidator.split(" ");// ejemplos : "> 18" , "< 18"
                var regla = reglas[0];
                var numero = parseInt(reglas[1]);

                if(regla == "<"){
                    if(value < numero){
                        return true;
                    } else {
                        return false;
                    }
                } else if(regla == "<="){
                    if(value < numero){
                        return true;
                    } else {
                        return false;
                    }
                } else if (regla == ">"){
                    if(value > numero){
                        return true;
                    } else {
                        return false;
                    }
                } else if (regla == ">="){
                    if(value >= numero){
                        return true;
                    } else {
                        return false;
                    }
                }

            };
        }
    };
});