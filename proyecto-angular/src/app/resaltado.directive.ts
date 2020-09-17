import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el: ElementRef ) {
   var element = el.nativeElement ;
   element.style.background = 'blue';
   
   }

}
