import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Project} from '../models/project';
import {Global} from './global';

/*Inyectamos el servicio con el decorador
definimos el servicio */
// le decimos que es un servicio que vamos a estar inyectando

@Injectable ()
export class ProjectService{
    public url: string ;   // url de la api

    constructor(
        private _http: HttpClient
    )
    {
        this.url = Global.url;
    }
    /*metodo de prueba */

    testService(): string {
        return 'probando el servicio de Angular';
    }
// para guardar en la base de datos , tendremos 2 saveProject()
// uno en el backend (controlador )y otro en nuestro servicio project.service.ts
    saveProject(project: Project): Observable <any> {
          /*necesitamos que tome un JSON , usamos stringify*/
          // parametros a enviar
        let params = JSON.stringify(project);

           /*establecemos las cabeceras , las pasamos por set  */
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

           /*hacemos la peticion por POST */
         /*le concatenamos la url mas el metodo de la API a usar  */

        return this._http.post( this.url + 'save-project', params , {headers:headers});
                     /*luego tenemos que utilizarlo en la parte del submit del componente  */


    }

    // listado de proyectos
    getProjects(): Observable <any> { // devuelve observable de cualquier tipo

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get( this.url + 'projects' , {headers : headers});

    }
     // devuelve un proyecto
     getProject(id): Observable <any> { // devuelve observable de cualquier tipo

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get( this.url + 'project/' + id  , {headers : headers});

    }

      // borrar proyectos
    deleteProject(id): Observable <any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // le tenemos que pasar al metodo las cabeceras
        return this._http.delete( this.url + 'projects/' + id  , {headers : headers});

}
  // actualizar proyectos
  updateProject(project): Observable <any> {

    // convertimos el proyecto a un json string
    let params = JSON.stringify(project);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // le tenemos que pasar al metodo las cabeceras
    return this._http.put( this.url + 'projects/' + project._id , params , {headers : headers});

}

}


