'use srict'

// dom : document object model 

// podemos definir funciones que actuen sobre el html 
// y que son invocadas en consola 

function cambiaColor(color){

    caja.style.background = color ; 
}

// seleccionar elementos con un id concreto 




//seleccionar elementos por su clase (css)

var divsRojos = document.getElementsByClassName('rojo');

var divsAmarillos = document.getElementsByClassName('amarillo');

for(  var i= 0 ; i < divsRojos.length ; i++){

divsRojos[i].style.background = "red" ; 

}
console.log(divsRojos);

for(  var i= 0 ; i < divsAmarillos.length ; i++){

    divsAmarillos[i].style.color = "blue" ; 
    
    }
    console.log(divsAmarillos);



//seleccionar elementos por su etiqueta 

var todosLosDivs = document.getElementsByTagName('div');

// podemos recorrer todo el array de divs 
// mediante un for in
/*
var valor ; 

for (valor in todosLosDivs) {
    
    
    if (typeof todosLosDivs[valor].textContent == 'string') {

// creamos un nodo  para cada elemento seleccionado
var parrafo = document.createElement("p") ; 

// tomamos el texto dentro de la etiqueta div y lo ponemos en una variable 
//estamos creando un nodo tipo text 
var texto = document.createTextNode(todosLosDivs[valor].textContent);

//ponemos el texto en el parrafo 
parrafo.appendChild(texto);

//ponemos el parrafo resultante dentro de #miSeccion 
document.querySelector("#miSeccion").appendChild(parrafo);


}
}


*/
//para poner separaciones en la pagina 
//de manera sencilla 

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");


var valor ; 

for (valor in todosLosDivs) {
    
    
    if (typeof todosLosDivs[valor].textContent == 'string') {

// creamos un nodo  para cada elemento seleccionado
var parrafo = document.createElement("p") ; 

// tomamos el texto dentro de la etiqueta div y lo ponemos en una variable 
//estamos creando un nodo tipo text 
var texto = document.createTextNode(todosLosDivs[valor].textContent);

//ponemos el texto en el parrafo 
parrafo.append(texto);

//ponemos el parrafo resultante dentro de #miSeccion 
document.querySelector("#miSeccion").append(parrafo);


}
}

seccion.append(hr);

























//los estamos poniendo en una array 

console.log(todosLosDivs);

todosLosDivs[2].style.color= "blue " ; 
//todosLosDivs[3].style.background="black";
todosLosDivs[3].style.color="white";

var contenido1=todosLosDivs[4];
console.log(contenido1);

contenido1.innerHTML="Ya hemos cambiado la caja " ; 






//desde el js puedo seleccionar un elemento 
//del html por etiqueta con : 

//var caja = document.getElementById("micaja");


// seleccionando elementos mediante queryselector 

var caja = document.querySelector("#micaja");

console.log(caja);

// se puede capturar el codigo HTML dentro de un id 

var caja = document.getElementById("micaja").innerHTML;
console.log(caja);

// o podemos cambiar el texto dentro del div 

var caja = document.getElementById("micaja");

caja.innerHTML="Texto cambiado por js "

console.log(caja);

// cambiar el estilo del texto seleccionado 

caja.style.background = "red" ; 
caja.style.padding = "30px" ; 
caja.style.color = "white" ; 

// agregar una propiedad de clase al elemento 

caja.className = "cajitas" ; 


// sellecionar elementos con Query Selector 

var id = document.querySelector("#encabezado") ; 

console.log(id); 

//var id2= document.querySelector("#otro") ; 

//console.log(id2) ; 

//id2.style.background = "green" ; 

//para obtener todos los elementos con querySellectorAll

var id2 = document.querySelectorAll("#encabezado") ; 

console.log(id2);

