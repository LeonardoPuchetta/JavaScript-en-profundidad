$(document).ready(()=>{

// utilizaremos los metodos 
/*console.log('hola')
$("#mostrar").hide();

$("#mostrar").click(function(){

$(this).hide();
$("#ocultar").show();
$("#caja").fadeTo('slow',0.8) ; 


})
$("#ocultar").click(function(){
    $(this).fadeOut('slow');
    $("#mostrar").show();
    $("#caja").fadeTo('slow',0.2) ; 


})*/
/*$("#todoenuno").click(function(){
$("#caja").fadeToggle('slow');


})*/

$("#animame").click(function(){
$("#caja").animate({marginLeft:300 , 
                     fontSize:40 , 
                     height:110,

                              
}, 'fast').animate({marginLeft:300 , 
    borderRadius:900 , 
    marginTop:80,

             
}, 'slow').animate({marginLeft:300 , 
    borderRadius:0 , 
    marginLeft:0,

             
}, 'slow')


})

})