import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Zapato{
  /*  public nombre: string ;
    public precio: number;
    public marca: string;
    public color: string;
    public stock: boolean;


    constructor(nombre,marca,color,precio,stock){
this.color = color;
this.marca = marca;
this.precio = precio;
this.stock = stock;
this.nombre = nombre;
    }
*/
constructor(public nombre: string ,
    public precio: number,
    public marca: string,
    public color: string,
    public stock: boolean){

    }

}