'use strict'

//fetch y peticiones a servicios / apis rest 

var div_usuarios = document.querySelector("#usuarios"); 

var usuarios = [] ; 

fetch('https://jsonplaceholder.typicode.com/users')

.then (data => data.json())      //funcion de callback que recibe parametro data y lo convierte a json
                                  // estamos capturando los datos de la url . estamos a la espera (then)

.then(users =>{                    

usuarios = users; 

console.log(usuarios);

usuarios.map((user , i ) => {

    let nombre = document.createElement('h3') ; 

    nombre.innerHTML= i + ".  "+ user.name + " " + " , " + "user_name : " + user.username ; 

    div_usuarios.appendChild(nombre) ; 

    document.querySelector(".loading").style.display = 'none' ;
})

// ver clase 79 . 

} )
