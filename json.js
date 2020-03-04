'use strict'

 // definimos un json 

// contiene propiedades y valores 

var pelicula = {   
titulo: 'Titanic' , 
fecha: 1999 , 
director : 'Walter Wonka' , 
pais :'Colombia'


}

console.log(pelicula);
pelicula.titulo = 'Los locos Adams' ;
console.log(pelicula);

// podemos poner objetos en un array y viceversa  

var cine = [ {titulo: 'Canciones' , fecha: 1774} , pelicula] ; 


var caja_cine = document.querySelector("#cine") ; 


var indice ;

for (indice in cine ) {

var p = document.createElement("p") ;

p.append((cine[indice].titulo) + "  : " + cine[indice].fecha)
 
caja_cine.append(p) ; 

}