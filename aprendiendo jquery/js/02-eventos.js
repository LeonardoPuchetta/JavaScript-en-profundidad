$(document).ready(()=> {

//alert('eventos cargado')
//Mouseover y mouseout 
var caja =$("#caja") ; 

caja.mouseover(()=>{
  
$(this).css("background","red") ;
console.log("hola")
})

caja.mouseout(()=>{
  
    $(this).css("background","white") ;
    console.log("hola")
    })

    function cambiaBlanco (){
  
        $(this).css("background","white") ;
        console.log("hola")
        }

    function cambiaVerde (){
  
            $(this).css("background","green") ;
            console.log("hola")
            }


// evento hover 
//se le puede meter 2 funciones de callback 

caja.hover(cambiaBlanco , cambiaVerde ) ; 

//click y doble click 

caja.click(()=> {
$(this).css("background","red")

})

caja.dblclick(()=> {
$(this).css("background","blue")

})

//focus y blur 
var nombre = $("#nombre")
//acciones dentro y fuera de cierto elemento del 
//html 

 nombre.focus(()=>{

console.log("foco");
$(this).css("border","2px solid green");


})

nombre.blur(()=>{

    console.log("foco");
    $(this).css("border","2px solid transparent");
    
    //$("#datos").text($(this).val()).show();
    
    }) 
var datos = $("#datos") ; 
    // Mousedown y mouseup 

datos.mousedown(()=>{
$(this).css('border color', 'gray')

})

datos.mouseup(()=>{
    $(this).css('border color', 'black')
    
    })


    // Mouse move , captura el movimiento del raton . 

    $(document).mousemove(()=>{
        $('body').css("cursor","none") ; 
console.log("Coordenada x : " + event.clientX);
console.log("Coordenada y : " + event.clientY);
$("#sigueme").css("left", event.clientX)
$("#sigueme").css("top", event.clientY)

    })


})