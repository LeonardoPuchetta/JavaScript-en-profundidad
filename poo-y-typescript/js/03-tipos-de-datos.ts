//string 

let cadena: string = "Leonardo" ; 


//number

let numero: number = 8 ; 

//boolean 

let bola : boolean = true;

//Any puede tomar cualquier tipo 

let cualquiera : any = "hola "
cualquiera = 12 ; 

//Arrays 

let arreglo: Array<string> = ['hola','como_estamos']; 

let years: number[] = [12,15,19,20] ;

//tipado multiple 

let cadena2: string | boolean = "Leonardo" ; 


//nuevo tipo de dato personalizado 

type letrasonumeros = String|number ; 

let hola: letrasonumeros = 8 ; 
hola = "hola";

console.log(cadena , numero , bola ,cualquiera,arreglo,years)