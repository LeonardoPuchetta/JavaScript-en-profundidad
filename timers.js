'use strict'

window.addEventListener('load' , function() {

// timers 
function intervalo() {


 var tiempo = setInterval(function(){

console.log('set interval ejecurado ') ;
var encabezado =document.querySelector("h1");

if (encabezado.style.fontSize == "50px") {

    encabezado.style.fontSize = "20px" 
} else {

    encabezado.style.fontSize = "50px" 
}

} , 1000) ;

return tiempo ; 

}

var tiempo = intervalo() ; 
 
var stop = document.querySelector("#stop");

stop.addEventListener('click' , function(){

    alert("se paro el intervalo en bucle");
    clearInterval(tiempo);

})

var start = document.querySelector("#start");

start.addEventListener('click' , function(){

    console.log('se inicio el bucle') ; 
    intervalo(); 

})

 });