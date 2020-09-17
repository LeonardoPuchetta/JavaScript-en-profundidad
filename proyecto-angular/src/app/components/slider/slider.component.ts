import { NumberFormatStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
declare var jQuery: any ;  // para usar el objeto jquery directamente
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();


  public autor: any ;

  constructor() {
    this.autor = {
      nombre: 'Roberto Rodriguez',
      website: 'google.com',
      youtube: 'youtube.com'
    };
  }

  ngOnInit(): void {

    $('#logo').click( () => {
    $('header').css('background', 'green');
    console.log('click');
 });

 $('.galery').bxSlider({
   mode: 'fade',
   captions: this.captions,
   slideWidth: this.anchura
 });

  }
  lanzarEvento(event) {
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
