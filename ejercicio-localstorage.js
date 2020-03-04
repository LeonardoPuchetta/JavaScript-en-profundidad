'use strict'

var formulario = document.querySelector("#formpelicula") ; 

formulario.addEventListener('submit',function(){

    // agregar pelicula 

    var titulo = document.querySelector("#addpelicula").value ; 

    localStorage.setItem(titulo,titulo) ;


} )

// recorro el LS para mostrar las peliculas guardadas 


var ul = document.querySelector("#peliculas-list")
for (var i in localStorage){

console.log(localStorage[i]);

if (typeof localStorage[i]== 'string') {

    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li)


}



}

var formulariob = document.querySelector("#formBorrarPelicula") ; 

formulariob.addEventListener('submit',function(){

    // borrar pelicula 

    var titulo = document.querySelector("#borrarPelicula").value ; 

    localStorage.removeItem(titulo,titulo) ;


} )