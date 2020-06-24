
$(document).ready(function(){

//metodo load 
//nos permite hacer una peticion ajax por get 
//e incrustar el resultado en la pagina 

// $("#datos").load("https://reqres.in/");

//metodos  Get y Post 

 $.get("https://reqres.in/api/users" ,{page: 2 } , function (response){

console.log(response) ; 
response.data.forEach((element,index) => {

    $("#datos").append("<p>" +  element.first_name +" " +  element.last_name  +"</p>") ; 
    
});

})  


var usuario = { 
"name" :"Rolo" ,
"apellido" : "Panflin " , 
"web": "https://twitter.com/home" 

// estos datos se van a enviar y guardar por post 
};
   

$.post("https://reqres.in/api/users ", usuario , function(response){

console.log(response) ; 


})

//capturamos el evento submit para anadir al formulario 
$("#formulario").submit(function(e){
e.preventDefault() ; //para que no me redirija a la web externa

    var usuario = { 

        //en los campos del json recogemos los 
        //input correspondientes 

        "name" :$('input[name="name"]').val(),
         
        "web": $('input[name="web"]').val(), 
        
        // estos datos se van a enviar y guardar por post 
        };
        console.log(usuario);
           
        $.post($(this).attr("action"), usuario , function(response){
        
        console.log(response) ; 
        
        
        });
        return false ; 




})

/*

//trabajando con ajax 
$.ajax({

type: 'POST'  , // se especifica el tipo de peticion 
dataType : 'json' ,    // tipos de datos a enviar o recibir
contentType :'application/json', // formato en que viajan los datos 
url:$(this).attr("action"),     //se puede especificar una url 
data: usuario ,    // los datos a enviar o recibir 
beforeSend:function(){   // realiza una accion antes del envio 
    console.log("Enviando")
},
success:function(response){       // 
   console.log(response) ; 
},
error : function(){
    console.log("ocurrio un error ") ;
},
timeout : 2000 , // indicamos cuantos ms queremos eur tarde 
                  // en realizarse la peticion 


})

})*/



} )