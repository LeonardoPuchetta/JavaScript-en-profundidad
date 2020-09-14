import { Component } from '@angular/core';
declare var jQuery: any ;  // para usar el objeto jquery directamente
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
}
