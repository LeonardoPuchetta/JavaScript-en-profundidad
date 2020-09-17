import { Component, OnInit , ViewChild } from '@angular/core';
declare var jQuery: any ;  // para usar el objeto jquery directamente
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean ;
  public autor: any;

  @ViewChild ('texto') textos ;

  constructor() {
    this.captions = true;

  }

  ngOnInit(): void {
console.log(this.textos);

  }
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;

  }
  resetearSlider(){
    this.anchuraToSlider = null;

  }
  getAutor(event){
    this.autor = event;  }

}
