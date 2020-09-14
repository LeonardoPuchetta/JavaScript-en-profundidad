'use strict'
//objeto para crear rutas
var express = require('express');

//cargamos la clase controlador y sus metodos  
var ProjectController = require('../controllers/project');

// variable para cargar el router 
var router =  express.Router();

//configuracion de middleware para poder subir imagenes 
var multipart = require('connect-multiparty');
//le indico donde se van a subir los archivos 
var multipartMiddleware = multipart({ uploadDir: './uploads' });

//creacion de ruta por get 
//definicion de objeto a utilizar y su metodo 
router.get('/home', ProjectController.home) ; 
router.post('/test', ProjectController.test) ;
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);

//para que se ejecute un Middleware antes de una accion lo paso como 
//segundo parametro en el archivo de rutas 
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage );
router.get('/get-image/:image', ProjectController.getImageFile);

//exportacion de la variable routes y su configuracion \

module.exports = router;