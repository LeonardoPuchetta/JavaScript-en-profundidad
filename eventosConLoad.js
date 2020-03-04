'use strict'



window.addEventListener('load' ,() =>  {

//EVENTOS
//funciones que se ejecutan cuando algo ocurre 

// eventos del raton 

var boton = document.querySelector("#botones");

function cambiarColor () {

var br = boton.style.background;

if (br == 'red') {
    boton.style.background = 'green'
    boton.style.padding = '10px'
    boton.style.border = '1px solid #ccc'
} else 
{
    boton.style.background = 'red'
    boton.style.padding = '5px'
    boton.style.border = '1px solid #ccc'
}

return true;

}

//Click 

var boton = document.querySelector("#botones");

boton.addEventListener('click' , function (){cambiarColor()});

// Mouse over 
//cambios en el pasaje sobre el elemento   

boton.addEventListener('mouseover' , function (){boton.style.background= "#ccc"});

//mouse out
//cuando salgo del elemento 

boton.addEventListener('mouseout' , function (){boton.style.background= "black"});


// mas eventos 

// focus (se utiliza para generar un evento al seleccionar el objeto )

 var input= document.querySelector("#campo_nombre") ; 

input.addEventListener('focus' , function(){

console.log("estas dentro del input ");

});



// blur (se utiliza para generar un evento al deseleccionar el objeto )

var input2= document.querySelector("#campo_nombre") ; 

input2.addEventListener('blur' , function(){

console.log("estas fuera del input ");


});

//keydown 
//se utiliza para generar un evento al pulsar una tecla 

var input2= document.querySelector("#campo_nombre") ; 

input2.addEventListener('keydown' , function(event){

console.log("se ah presionado la tecla :" , String.fromCharCode(event.keyCode));


});



//keypress

//se utiliza para generar un evento al presionar  una tecla 

var input2= document.querySelector("#campo_nombre") ; 

input2.addEventListener('keypress' , function(event){

console.log("se ah presionado la tecla :" , String.fromCharCode(event.keyCode));


});

//keyup 


//se utiliza para generar un evento al soltar una tecla 

var input2= document.querySelector("#campo_nombre") ; 

input2.addEventListener('keyup' , function(event){

console.log("se ah soltado la tecla :" , String.fromCharCode(event.keyCode));


});

}) ; 