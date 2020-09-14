import { Component, OnInit } from '@angular/core';
declare var jQuery: any ;  // para usar el objeto jquery directamente
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  $('#logo').click( () => {
     $('header').css('background', 'green');
     console.log('click');
  });
  $('.galery').bxSlider({
    mode: 'fade',
    captions: 'false',
    slideWidth: '200'
  });
  }

}
