'use strict'


//importamos el modelo  project en el controlador 
var Project = require('../models/project');
//una de las formas de crear un controlador 
var fs = require('fs');
var path = require('path');    //para cambiar rutas fisicas de nuestro sistema de archivos 

var controller = {
    //metodos + logica
    home: function(req , res){
       return res.status(200).send({
           message: "Soy la home "
       });
    },
    test: function(req,res){
        return res.status(200).send({
            message: "Soy el metodo o accion test del Controlador"
    });
    },
    //------------------------------------------------------------------------------------------------------
    saveProject: function(req , res){            //GUARDAR UN PROYECTO

        //creacion de un objeto de proyecto 
        var params = req.body;

        var project = new Project ();
        // acciones del controlador
        // guardamos en params los parametros que llegan por 
        //peticion desde el Postman 

        project.name = params.name;
        project.description = params.description;
        project.category= params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = params.image;
    

        //guardar el objeto en la base de datos 
        //con el metodo save 
        project.save((err, projectStored) => {  
            if (err) return res.status(500).send({message: 'Error al guardar '});
            if (!projectStored) return res.status(404).send({message:'No se ha podido guardar la info'});
           
            return res.status(200).send({project: projectStored})
       });

      
    
    },   
// -----------------------------------------------------------------------------------------------------------
    getProject: function(req , res){         // OBTENER UN PROYECTO DE LA BASE 
        var projectId = req.params.id ;
           // (esta parte parece no funcionar )
        if (projectId == null) {return res.status(404).send({message:'El proyecto no existe '})};
        
        //utilizamos el modelo y sus metodos 
        Project.findById(projectId,(err , project)=>{
            if (err) return res.status(500).send({message: 'Error al devolver los datos '});
            if (!project) return res.status(404).send({message:'El proyecto no existe '});
            return res.status(200).send({project});
        });

    
    },
    //---------------------------------------------------------------------------------------------------------
    getProjects: function(req , res){           // LISTADO DE PROYECTOS

        //utilizamos el modelo y sus metodos , en este caso find ( ) 
        Project.find({}).sort('-year').exec((err,projects)=>{

            if (err) return res.status(500).send({message: 'Error al devolver los proyectos '});
            if (!projects) return res.status(404).send({message:'No hay proyectos para mostrar '});
            return res.status(200).send({projects})
        })

    },
    //----------------------------------------------------------------------------------------------------------
    updateProject: function(req , res){   // ACTUALIZAR PROYECTOS       
         // capturamos projectId por url 
        var projectId = req.params.id; 
        //tomamos todo el objeto a actualizar de la base de datos 
        //el objeto completo con los datos ya actualizados
        var update = req.body ; 

        Project.findByIdAndUpdate( projectId , update , {new:true} , ( err , projectUpdated ) => {
              
              if (err) return res.status(500).send({message: 'Error al devolver los proyectos '});
              if (!projectUpdated) return res.status(404).send({message:'No existe el proyecto para actualizar'});
                        
              if (projectUpdated) return res.status(200).send({project : projectUpdated});
           
        
                        
        });  
       
    
    
    },
    //-------------------------------------------------------------------------------------------------------
    
    deleteProject: function( req , res ){   // BORRAR PROYECTOS  

        // capturamos projectId por url , el proyecto a borrar 
       var projectId = req.params.id ;  
      
       Project.findByIdAndRemove(projectId , ( err , projectDelete ) => {

           if (err) return res.status(500).send({message: 'Error al borrar el proyecto '});
           if (!projectDelete) return res.status(404).send({message:'No se puede eliminar ese proyecto'});
          
          return res.status(200).send({project :projectDelete})
            })
         
       },

   
   //---------------------------------------------------------------------------------------------------
   uploadImage : function(req, res) {        // SUBIR IMAGENES 
   // capturamos el id del proyecto por url 
   // en el cual guardaremos la imagen  
    var projectId = req.params.id ; 
    var fileName = 'imagen no subida' ; 
    
    if (req.files){   // de connect multi-party
         var filePath = req.files.image.path ;
         //separamos el path  
         var fileSplit = filePath.split('\\');
         // asignamos a fileName el valor cortado 
         fileName = fileSplit[1];

         //para chequear extension del archivo 
         var extSplit = fileName.split('\.');
         var fileExt = extSplit[1] ; 
         
        if (fileExt == 'png' ||fileExt == 'jpg' || fileExt == 'gif'|| fileExt == 'jpeg' ) {


         Project.findByIdAndUpdate(projectId,{image:fileName},{new : true },(err , projectsUpdated )=> {
             if (err) return res.status(500).send({message: 'la imagen no se ha subido'});
             if (!projectsUpdated) return res.status(404).send({message: 'el proyecto no existe '});
             return res.status(200).send({ project : projectsUpdated})

         })
        }  else {
                  // utilizamos libreria para borrar archivo (fs) 
                  //le pasamos la ruta completa del archivo 
                    fs.unlink(filePath , (err)=> { 
                    return res.status(200).send({ message: 'la extension no es valida'});
                    })
                
                }
        
    } else return res.status(200).send({ message: fileName}) ;

},

//----------------------------------------------------------------------------------
getImageFile : function( req , res){
      //archivo
    var file = req.params.image;
       // ruta de la imagen 
    var path_file = './uploads/' + file ; 
    // utilizamos la libreria fs para 
    //devolver el archivo ,primero comprobamos si existe el archivo 
    
    fs.exists(path_file , (exists)=>{
        if (exists) {return res.sendFile(path.resolve(path_file));}
        else {return res.status(200).send({ message : 'no existe la imagen '})}
        
    })

  }
  
};

// y para devolver los metodos creados
// exportamos un json de metodos 

module.exports = controller;
