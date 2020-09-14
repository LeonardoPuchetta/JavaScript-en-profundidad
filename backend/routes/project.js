'use strict'

var express = require('express'); 

//creacion de rutas con express 
// imortamos de esta menera la variable u objeto controller
//y sus funcionalidades 
var ProjectController = require('../controllers/project');

// variable para cargar el router 
var router =  express.Router();

//middelware para subrir archivos 
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

//creacion de ruta por get 
// definicion de objeto a utilizar y su metodo 
router.get('/home', ProjectController.home) ; 
router.post('/test', ProjectController.test) ;
router.post('/save-project', ProjectController.saveProject) ;
router.get('/project/:id',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/projects/:id',ProjectController.updateProject);
router.delete('/projects/:id',ProjectController.deleteProject);
router.post('/upload-image/:id',  multipartMiddleware , ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);

// exportacion de la variable routes y su configuracion 

module.exports = router;

// toda esta config se debe cargar en el app.js 