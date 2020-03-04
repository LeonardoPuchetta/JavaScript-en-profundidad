'use strict'

// local storage (LS)
//se guarda informacion en el navegador web a modo de sesion 

//comprobacion de compatibilidad del navegador (si esta disponible el LS )

if (typeof(Storage) !=='undefined'){

    console.log("el local storage esta disponible") ; 
}else  {
    console.log("incompatible con local storage ")
}

// almacenar datos en el local storage 

localStorage.setItem("titulo" , "valor : curso de Javascript");

//recuperar elementos del local storage
//y ponerlos en la pagina web 

console.log(localStorage.getItem("titulo")); 
document.querySelector("#cine").innerHTML=localStorage.getItem("titulo") ; 

//guardar objetos en local storage 

var usuario = {
nombre : "Leonardo", 
correo : "lopo@gmail.com" , 
web : "leonardo.uy" 

}
//los datos en jason se convierten en string o en un numero 
localStorage.setItem("usuario" ,JSON.stringify(usuario ));

// Recuperar objetos del LS  
// utilizamos un metodo JSON.parse 

var userjs = JSON.parse(localStorage.getItem("usuario")) ; 

console.log(userjs) ; 
document.querySelector("#datos").append(" WEB : " + userjs.web+ "  " + userjs.nombre) ; 

// remover elementos del Local Storage 

localStorage.removeItem("usuario") ; 

//eliminar local storage totalmente 

localStorage.clear();
