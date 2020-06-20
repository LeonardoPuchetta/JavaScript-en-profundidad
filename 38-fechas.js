'use strict'

var fecha = new Date(); 
console.log (fecha); 

// tengo que crear las variables primero para descomponer la fecha 
var year = fecha.getDate() ;
var mes = fecha.getMonth() ; 
var dia = fecha.getDate() ; 
var hora = fecha.getHours(); 

var milisegundos = fecha.getMilliseconds ;


var textoHora = ` 

El ano es : ${year}
El mes es : ${mes} 
El dia es : ${dia}
La hora es : ${hora}
`;

console.log(textoHora) ; 