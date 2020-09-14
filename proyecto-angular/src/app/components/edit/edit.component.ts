import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

import { Router, ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  // reutilizacion de la vista de otro componente
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService , UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string ;
  public filesToUpload: Array<File>;
  public save_project;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
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
  onSubmit(): void {
    console.log(this.project);

    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
           if (this.filesToUpload){

                // subir la imagen y guardarla
                this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id , [] , this.filesToUpload , 'image')
                .then((result: any) => {

                    this.save_project = result.project ;
                    this.status = 'success';


                     });

           }else {
                    this.save_project = response.project ;
                    this.status = 'success';
                  }
                   }
        else  {
             this.status = 'failed';
          }
             },
      error => {
        console.log(error);
               }
    );
  }

  fileChangeEvent( fileInput: any): void{
    console.log(fileInput);
    this.filesToUpload = fileInput.target.files ;
    // en esta propiedad vamos a guardar todos los archivos seleccionados

  }
}
