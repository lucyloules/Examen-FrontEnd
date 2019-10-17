app.controller('tiendaController',['Producto','Auth',
'Compra','rutas','sessionStorage',function(Producto,Auth,Compra,rutas,sessionStorage){

    var ctrl = this;
    ctrl.rutas = rutas;
    ctrl.comprado = false;
    ctrl.productos = Producto.query(function(){});
    ctrl.carritoStorage = function(){
        if(Object.entries(sessionStorage.getObject('carrito')) === null){
            ctrl.carrito = {
                fecha: new Date(),
                precioTotal: 0,
                cantidadTotal:0,
                moneda: "CLP",
                usuario: Auth.parseToken(Auth.getToken()).email,
                estado: "enviada",
                items:[]
            };
        }else{
            ctrl.carrito =sessionStorage.getObject('carrito');
        }
    }
    ctrl.carritoStorage();

    ctrl.agregarProducto = function(index){
        var productoCarrito =  ctrl.carrito.items.findIndex(function(item){
             return item.id == ctrl.productos[index].id;
         })
         if(productoCarrito==-1){
             var item =ctrl.productos[index];
             item.cantidad =ctrl.quantity[index];
             ctrl.carrito.items.push(item);
         }else{
             ctrl.carrito.items[productoCarrito].cantidad +=ctrl.quantity[index];
         }
         ctrl.carrito.cantidadTotal += ctrl.quantity[index]
         ctrl.carrito.precioTotal += (ctrl.quantity[index] * ctrl.productos[index].precio)
         sessionStorage.setObject('carrito', ctrl.carrito);
     }

    ctrl.eliminarProducto = function(index){
        var item = ctrl.carrito.items[index];
        ctrl.carrito.cantidadTotal -= item.cantidad;
        ctrl.carrito.precioTotal -= item.cantidad*item.precio;
        ctrl.carrito.items.splice(index,1);
        sessionStorage.setObject('carrito', ctrl.carrito);
    }

    ctrl.comprarProducto = function(){
        Compra.save(ctrl.carrito,function(){
               sessionStorage.removeItem('carrito');
                ctrl.comprado = true;
                ctrl.carritoStorage();
              
           });
       }
    }])




















/* for(var i=0; i< ctrl.carrito.length; i++){
          var precio = ctrl.carrito[i].precio;
          total += precio;
    }
    return total;*/