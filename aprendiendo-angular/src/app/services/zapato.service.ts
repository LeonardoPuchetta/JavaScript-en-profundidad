import {Injectable} from '@angular/core';
import {Zapato} from '../models/zapato' ;

@Injectable()

export class ZapatoService {
    public zapatos: Array<Zapato>;

    //metodos;
    constructor(){
        this.zapatos = [ new Zapato('V8',40,'Reebook','black',true),
        new Zapato('V8',552,'Reebook','black',true),
        new Zapato('V7',102,'Nike','black',true),
        new Zapato('V10',592,'Adidas','black',false)
     ];
    }
    getZapatos(): Array<Zapato> {
       return this.zapatos;
    }
    getTexto(){
        return "Hola mundo desde un servicio"
    }
}