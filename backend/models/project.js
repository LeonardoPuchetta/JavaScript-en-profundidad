'use strict'

// primero debemos importar mongoose 
var mongoose = require('mongoose');

//tenemos que definir el esquema de un modelo 
var Schema = mongoose.Schema ; 

//creacion del esquema 
var ProjectSchema = new Schema ({
    name: String ,
    description: String ,
    category: String  ,
    year: Number ,
    langs: String ,
    image: String
});

//hacemos el modulo exportable 
//y lo dejamos como modelo 
module.exports = mongoose.model('project', ProjectSchema);
//parametros de model : (1) en la base de datos se 
//generara una coleccion llamada 'projects'
//(2) esquema 

