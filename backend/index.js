'use strict'
// creamos una variable para importar el modulo de mongoose
// utilizamos la funcion require () para importar mongoose 
var mongoose = require('mongoose') ;

var app = require('./app') ; 

//para indicar el puerto del servidor 
var port = 3700 ; 


// conexion a la base de datos 
mongoose.Promise = global.Promise ; 
mongoose.connect('mongodb://localhost:27017/portafolio')

//esto es una promesa asi que utilizaremos then() 
//para comprobar si hubo una conexion a la base de datos
.then(()=> {

    console.log(' Conexion a la base de datos establecida exitosamente ');

    // CREACION DEL SERVIDOR :
    // utilizamos el objeto app que es donde esta express 

    app.listen(port, ()=>{
    //simplemente indicamos si la conexion se hizo correctamente 
    console.log('Servidor corriendo correctamente en la url : localhost :3700 ');

    });




})

// ademas podemos capturar el error 
.catch(error => console.log(error));
// ----------------------------------------------------------------------------------------------