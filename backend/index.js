'use strict'
// creamos una variable para importar el modulo de mongoose
// utilizamos la funcion require () para importar mongoose 
var mongoose = require('mongoose') ;

mongoose.Promise = global.Promise ; 

// conexion a la base de datos 
mongoose.connect('mongodb://localhost:27017/portafolio')

//esto es una promesa asi que utilizaremos then() 
//para comprobar si hubo una conexion a la base de datos
.then(()=> {
    console.log(' Conexion a la base de datos establecida exitosamente ')
})

// ademas podemos capturar el error 
.catch(error=>console.log(error));
// ----------------------------------------------------------------------------------------------