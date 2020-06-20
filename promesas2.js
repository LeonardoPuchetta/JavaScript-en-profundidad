'use strict'

//fetch (sustituto de ajax , hace peticiones asincronas a un servidor ) peticiones a servicios / apis rest 

var div_usuarios = document.querySelector("#usuarios"); 

var div_howell = document.querySelector("#howell"); 

var usuarios = [] ; 

 
getUsuarios().then (data =>        // utilizamos .then() porque es una promesa 
    { return  data.json() } ) 
 
.then(data => {

    usuarios = data ; 
    // puedo hacer esto porque data es un array de usuarios 
    console.log(usuarios) ; 

     //utilizacion de la funcion map 
    listadoUsuarios(usuarios) ; 

    return getHowell();
     
     })              // tercer promesa dentro de getHowell()
     .then(data => data.json())

                      // cuarta promesa 
     .then( data =>  {
     
   mostrarHowell(data);
    
    // return getInfo()})  // arroja la quinta promesa 

    //.then(data => {
      //  console.log(data)
    }) .catch (error => {
console.log(error + " error malo ") 

    })
     
     
      

function getUsuarios(){   // encapsulamiento del fetch 

    return fetch('https://jsonplaceholder.typicode.com/users') 
}

function getHowell(){     // nos da un usuario en concreto el segundo 

    return fetch('https://jsonplaceholder.typicode.com/users') 





}

function listadoUsuarios (usuarios) {    // encapsulamos el mapeo del array 

    usuarios.map( (usuario, i ) => {

        let nombre = document.createElement('h2'); 
        nombre.innerHTML = i + " -" +  usuario.name + " ; " +  "email : " + usuario.email ; 
        div_howell.appendChild(nombre) ; 

        // oculta el " Espera pibe ..." el primero de la pagina 
        document.querySelector(".loading").style.display = 'none' ;


     })
    }
function mostrarHowell(usuarios) {    // encapsulamos el mapeo del array 

            
    
            let nombre = document.createElement('h2'); 
            nombre.innerHTML = usuarios[1].name + " ; " +  "email : " + usuarios[1].email ; 
            div_howell.appendChild(nombre) ; 
    
            // oculta el " Espera pibe ..." el primero de la pagina 
            document.querySelector(".loading").style.display = 'none' 

}

function getInfo (){  // creamos una Promesa dentro de getInfo  
   
    var profesor = {
        nombre : 'Leopoldo' ,
        apellido :' Rizo' , 
        materia : 'Geografia' 
        
        };

    return new Promise((resolve , reject ) => 
{  // que hacemos en caso de Promise resolve : 
// convierto el objeto js a string 
var profesor_string = JSON.stringify(profesor) ; 
if (typeof profesor_string != 'string') return reject('error') ; 
return resolve(profesor_string)  
}                      )



}


    
    
    
