$(document).ready(function () {
    console.log("hola amigo") ; 

    //Draggable , mover elementos por la pagina
    $('.elemento').draggable() ; 

//redimensionar 

$('.elemento').resizable() ; 

//seleccionar elementos 

//$('.lista_seleccionable').selectable();
$('.lista_seleccionable').sortable({
update : function(event,ui) {
    console.log('a cambiado la lista ')  
}

});

//metodo droppable (metodo de interaccion )
$("#elemento_movido").draggable();   // elemento a mover 
$("#area").droppable({               // elemento sobre el que vamos a mover 
drop: function() {
    console.log('Soltaste')
}


})              

//EFECTOS

$("#mostrar").click(function() {
    //$(".caja_efectos").toggle("fade");     // muestra u oculta el elemento 
    $(".caja_efectos").effect('explode');     // muestra y explota elemento 
    $(".caja_efectos").toggle('explode');     // muestra y une elemento 
    $(".caja_efectos").toggle('blind');  // mueve el cuadro hacia arriba y hacia abajo  
    $(".caja_efectos").toggle('slide');//mueve el cuadro de un lado 
    $(".caja_efectos").toggle('drop');  // oculata el cuadro lateralmente 

    $(".caja_efectos").toggle('puff');
    $(".caja_efectos").toggle('scale');  //oculta el cuadro cambiando de tamano 
    $(".caja_efectos").toggle('drop'); 
    $(".caja_efectos").toggle('fold'); 
    $(".caja_efectos").toggle('shake','slow'); 



})

//TOOLTIPS
$(document).tooltip() ; // se aplica a todos los elementos que tengan un link 
                           // desplegando el mensaje que se especifica en 
                            // title 
//Dialog 
$('#lanzar').click(function() {
$('#popup').dialog() ;      // aparecera un cuadro de dialogo 
                             // tambien se puede dispara el cuadro mediante un evento 
 })

 //calendario
 $('#calendario').datepicker();

 //Tabs 
$('#pestanas').tabs();

    
})