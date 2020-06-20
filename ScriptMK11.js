'use strict'

alert(" Bienvenido a MK11 ") ;
//confirm("estas seguro que quieres continuar ? ");
//var edad = prompt("que edad tienes ?", 16) ;

//var nombre = prompt("introduce tu nombre");
//var apellido = prompt("introduce tu apellido")

//var datos_ingresados =` <h3>Nombre : ${nombre}</h3>
//<h3>Apellido : ${apellido}</h3>
//<h3>Edad : ${edad} años </h3>`;   

var combatientes = new Array("Jade","Sonia","Scarlet","Nightwolf","Scorpion","Sub-Zero","Liu Kang","Kano","Kitana","Spawn","Shang Tsung","Frost");

combatientes.sort() ;

for (var i=0 ;i < combatientes.length  ; i++ ) {

document.writeln("<li>" + combatientes[i] + "</li>") ;

}

//document.write(datos_ingresados);

var cambiaTexto = document.getElementById("1");
cambiaTexto.innerHTML = "GUIAS DE PERSONAJE" ;

cambiaTexto.style.background = "RED" ; 
cambiaTexto.style.padding="30px" ;


function cambiaColor ( id , color) {

document.getElementById(id).style.background = color ; 

}

var boton = document.querySelector("#boton") ;



boton.addEventListener('click' , function (){cambiarColor2()}) ; 



function cambiarColor2 () {

    var bg = boton.style.background ; 
  if (bg == 'green') {
      bg = 'red'
  } else {
    bg ='green'
  }
  boton.style.background = bg ; 
  return true   
    }


cambiaColor("1" , "green") ;
cambiaColor("2" , "yellow");
cambiaColor("3" , "red");

