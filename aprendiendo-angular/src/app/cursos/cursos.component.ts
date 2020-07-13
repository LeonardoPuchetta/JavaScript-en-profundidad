import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params} from '@angular/router';




@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

public nombre: string;
public followers: number;
  constructor(
private _route: ActivatedRoute,
private _router: Router,

  )
  { }

  ngOnInit(): void {

    //para recoger los parametros con la url : ;
    this._route.params.subscribe((params: Params) => {
    //se puede pasar el atributo aludiendo a params como un array;
    this.nombre = params['nombre'] ;
    this.followers = +params['followers'] ;
    console.log(this.nombre + ' ' + this.followers);

    if (this.nombre == 'ninguno'){
      this._router.navigate(['/home']);

    }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatos']);
  }

}
