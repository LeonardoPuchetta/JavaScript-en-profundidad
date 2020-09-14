'use strict'

// cargamos en variables los objetos para 
// ambas librerias
var express = require('express') ; 
var bodyParser = require('body-parser');

var app = express(); // ejecutamos la funcion express 

//cargar archivos de rutas 
var project_routes = require('./routes/project');
//const project = require('./models/project');

//middlewares (metodos que se ejecutan antes de ejecutar la 
// accion de un controlador o resultado de una peticion )
//en este caso creamos un middleware global 

app.use(bodyParser.urlencoded({extended:false}))
//utilizamos bodyParser para convertir cualquier 
//dato de peticion  que nos llegue a json 
app.use(bodyParser.json()) ; // todo lo que llega va a json 

// cors
// Configurar cabeceras y cors
// se ejecutara siempre antes de cada peticion 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// rutas 
//sobreescribimos una ruta para que se cargue dentro de app 
//estamos agregando un segmento de ruta 
//por ejemplo para acceder a test : http://localhost:3700/api/test
app.use('/api' , project_routes) ;

// exportar el modulo 
module.exports= app;