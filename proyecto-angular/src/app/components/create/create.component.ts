import { Component, OnInit } from '@angular/core';

import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService , UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string ;
  public filesToUpload: Array<File>;
  public save_project;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,

  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '' , '', 2020, '');
        // faltan propiedades a definir en el constructor
   }

  ngOnInit(): void {
  }


onSubmit(form): void {

console.log(this.project);
/*subscribe nos permite recoger lo que devuelve el apires */
// guardar datos
this._projectService.saveProject(this.project).subscribe(
  response => {
        if (response.project) {
          if (this.filesToUpload){
          // subir la imagen y guardarla
          this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id , [] , this.filesToUpload , 'image')
          .then((result: any) => {
              this.save_project = result.project ;
              this.status = 'success';
              console.log(result);
          });


          form.reset();
        } else {
          this.save_project = response.project ;
          this.status = 'success';
          form.reset();

        }}
           else  {
             this.status = 'failed';
          }
             },
  error => {
    console.log( error );
           }
);
                }


fileChangeEvent( fileInput: any): void{
    console.log(fileInput);
    this.filesToUpload = fileInput.target.files ;
    // en esta propiedad vamos a guardar todos los archivos seleccionados

  }

}
