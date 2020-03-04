'use strict'




window.addEventListener('load', function () {

console.log("DOM cargado ");

var formulario= document.querySelector("#formulario")

var box_dashed=document.querySelector(".dashed"); 

box_dashed.style.display = "none";

formulario.addEventListener('submit' , function(){

    console.log("evento submit capturado ");


    // con la propiedad value extraemos el valor dentro del campo

    var nombre= document.querySelector("#nombre").value ; 
    var apellidos = document.querySelector("#apellidos").value; 
    var edad =parseInt( document.querySelector("#edad").value);


if (nombre.trim()== null ||nombre.trim().lenght==0  ) {
//estamos comprobando si el nombre no tiene nada adentro 
console.log("hola revise el nombre ")

alert('el nombre no es valido ');
return false ;

}   

if (apellidos.trim() == null || apellidos.trim.lenght == 0) {

  //estamos comprobando si el nombre no tiene nada adentro 
  alert('los apellidos no son validos ');
  return false ;
  
  } 

if (edad==null || edad <= 0 || isNaN(edad)== true ) {
//estamos comprobando que el nombre no tiene nada adentro 
alert('la edad no es valida ');
return false ;
    
}


    box_dashed.style.display = "block";
    var datos_usuario=[nombre , apellidos , edad] ; 
    //console.log(nombre , apellidos , edad ); 


    var i ;
    for(i in datos_usuario){
    var parrafo = document.createElement("p");
    
    parrafo.append(datos_usuario[i]);
    box_dashed.append(parrafo);
                       }
    

      })


    })




