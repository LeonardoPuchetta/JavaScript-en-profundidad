

import {Component, OnInit , DoCheck , OnDestroy} from '@angular/core';

@Component({
     selector: 'videojuego',
     templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit , DoCheck ,OnDestroy{

//propiedades de clase 
public titulo: string ;
public listado: string ;


constructor() {
this.titulo = 'Componente de videojuegos';
this.listado = 'Listado de los juegos mas populares ';
//console.log('se ha cargado el componete de videojuego,component.ts');

}
 ngOnInit(): void {
    //console.log('OnInit ejecutado');

                  }
ngDoCheck(): void {
     //console.log('DoCheck ejecutado');
                                      }

ngOnDestroy(): void {
          //console.log('OnDestroy ejecutado');
                                                                         }



cambiarTitulo(){
     this.titulo ='Titulo cambiado';
}

}
