import {Component , OnInit} from '@angular/core' ;
import {Zapato} from '../models/zapato' ;
import {ZapatoService} from '../services/zapato.service';

@Component({
selector: 'zapatos',
templateUrl: './zapatos.component.html',
providers: [ZapatoService]
})

export class ZapatosComponent implements OnInit {
public titulo: string ="Componente de zapatos";
public zapatos: Array<Zapato>;
public marcas: String[];
public color: string;
public mi_marca: string;

constructor(
    private _zapatoService:ZapatoService
){
    this.mi_marca = 'Fila';
    this.color = 'yellow';
    this.marcas = new Array();
   
}

ngOnInit(){
    this.zapatos = this._zapatoService.getZapatos();
    this.getMarcas();
}

getMarcas(){

this.zapatos.forEach((zapato , indice) => {

    if ( this.marcas.indexOf(zapato.marca) < 0 ){
this.marcas.push(zapato.marca);
}
    });

console.log(this.marcas);

}
getMarca(){
    alert(this.mi_marca)
}
agregarMarca(){
   this.marcas.push(this.mi_marca)
}

borrarMarca(indice){
   // delete this.marcas[indice];
   this.marcas.splice(indice, 1);
}

onBlur(){
console.log('Has salido del input');

}
mostrarPalabra(){
    alert(this.mi_marca);
}


}
