

$(document).ready(function (){
    // selectores 
    // selectores de id : 

   var rojo =  $("#rojo").css("background", "red")  
                     
 ; // guardo el selector en una variable #=id
   // utilizo el metodo css para cambiar el background del parrafo 
   //se pueden encadenar las llamadas a metodos 
   verde =  $("#verde").css("background", "green")  
   .css("color","black")  ; // guardo el selector en una variable 

   var amarillo =  $("#amarillo").css("background", "yellow")  
   .css("color","black")  ; // guardo el selector en una variable 

// selectores de clase 

var mi_clase = $('.mochos')  // nos genera un array de elementos con esa clase 

mi_clase.css("color", "black")


mochos= $('.mochos').css("background", "red")  
.css("color","black") ;

mochos.click(() => {

var hola = $(this) ; 
console.log("click");
hola.removeClass('mochos');
console.log("hola");
hola.addClass('zebra');

    })

// selectores de etiqueta 

var parrafo = $('p').css('cursor' , 'pointer')    ///seleccion de los parrafos 

parrafo.click(()=>{


console.log('zebra')

})

//selectores de atributo 

$('[title ="js"]').css('background', 'green')
$('[title ="google"]').css('background', 'green')


//otros 

$('p,a').addClass('margen_superior') ; 

var busqueda = $("#caja").find('.resaltado')  ; 
console.log(busqueda) ; 
var busqueda2 = $("#caja .resaltado")  ; 
console.log(busqueda2) ; 
var busqueda3 = $("#caja .resaltado").eq(0).parent().parent()  ; 
console.log(busqueda3) ; 
var busqueda4 = $("#caja .resaltado").eq(0).parent().parent().parent().parent()  ; 
console.log(busqueda4) ; 

})





