

// CLASES (molde para instanciar objetos)

//la clase debe llamarse igual que el fichero y 
//se denomima comenzando con mayusculas  

//Interfaz : 

interface CamisetaBase{
//metodos obligatorios 
setColor(color);
getColor();

}
//Decoradores 

function estampar (logo:string){

    return function (target:Function){   // retorna funcion anonima
            target.prototype.estampacion = function():void {   // metodo a agregar en la clase objetivo
                                                              // cuando es void no retorna nada 
             console.log('Camiseta estampada con el logo de : '+ logo) ; // cuerpo del metodo a agregar 

            }       
    }

} ;




@estampar('Nike') 
class Camiseta implements CamisetaBase { 
//Propiedades o atributos del objeto 

    private color: string ; 
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number ; 
//Metodos o funciones asociadas al objeto 


//Constructores 
constructor(color,modelo,marca,talla,precio){

this.color=color;
this.precio=precio;
this.talla=talla;
this.modelo=modelo;
this.marca=marca;

}

//creacion de un metodo para cambiar un atributo 
//private 

public setColor(color:string){

this.color=color;

}
 
//metodo para devolver el color 

public getColor(){

return this.color; 

}

}

// Clase Hija 

class Camisa extends Camiseta {
// podemos agregar caracteristicas 

public botones:string;
//public cuello:string;

setBotones(botones){

    this.botones=botones;
}
getBotones(){

    return this.botones;

}


}


var cami=new Camiseta("rojo",'Manga_Larga',"Hering",'L',150,) ; 
console.log(cami)

var Hola=new Camisa('rojo','Cam','Hering','L',150) ;
Hola.setColor('Amarillo')
console.log(Hola) ;

//cami.estampacion()



