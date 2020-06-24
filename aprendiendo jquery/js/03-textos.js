$(document).ready(()=> {

reloadLinks();

$('#add_button').click(function(){
//seleccionamos el menu y con el metodo html() incrustamos 
//el valor rescatado del link al menu  

    $('#menu').append('<li><a href="' +$('#add_link').val()+'"></a></li>');
reloadLinks();

})


function reloadLinks(){


    $('a').each(function(indice){     // con each()recorremos los elementos del html 
        //con la etiqueta seleccionada

var that=$(this);
var enlace = that.attr("href");

// con attr("etiqueta") seleccionamos del texto del href
that.text(enlace);
//con text()  incluimos el texto de enlace en los 'a' 
that.attr('target','_blank') ; // para que se habran los links en nuevas pestanas 


})


}
})

