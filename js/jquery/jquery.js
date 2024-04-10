$(document).ready(function(){
    
})
//Mostrar , ocultar reloj
$("#ocultar").on("click",function(){   
    $(".reloj").slideUp();
})
$("#mostrar").on("click",function(){
    $(".reloj").slideDown(); 
})
//Validaciones Agregar productos
$(function(){
    $("#miFormulario1").validate({
        rules:{
            txtSku:{
                required: true,
                minlength:3
            },
            txtPrecio:{
                required: true,
                minlength:6
            },
            txtNombre:{
                required: true,
                minlength:5
            },
            TxtDescripcion:{
                required: true,
                minlength:10,
                
            },
            txtCantidad:{
                required: true,
                minlength:1,
                
            }
        },
        
    })  
})
//cambia de color con style css
$(function(){
    $(".primero").css({"background-color" : "red"});
    $(".segundo").css({"background-color" : "blue"});

})
