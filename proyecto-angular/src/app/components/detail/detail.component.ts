import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project' ;
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global';
// para poder recoger el id
import { Router, ActivatedRoute , Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})

export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route : ActivatedRoute
  ) {
    this.url = Global.url ;
    this.confirm = false ;


  }

  ngOnInit(): void {
    // recogemos parametros que llegan x url
    this._route.params.subscribe(params => {
      let id = params.id ;
      this.getProject(id);
    });
  }

  getProject(id): void{

    // peticion ajax al backend
    // utilizamos el metodo getProject() del servicio
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project ;
    },
      error => {
        console.log(error);
    }
    );


  }
  deleteProject(id): void{
  this._projectService.deleteProject(id).subscribe(
    response => {
      if (response.project){
        // hacemos una redireccion a la ruta de projectos
        this._router.navigate(['/proyectos']);
      }
  },
    error => {
      console.log(error);
  }
  );

  }
  setConfirm(confirm): void{
    this.confirm = confirm ;
  }
}
