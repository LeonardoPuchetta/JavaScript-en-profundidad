import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService{
    public url: string ;
    constructor(
        public _http: HttpClient
    ){
        this.url = 'https://reqres.in/';
    }

    getUser(userId): Observable <any> {

        return this._http.get(this.url + 'api/users/' + userId);
    }

    addUser(user): Observable <any> {
     // peticion ajax utilizando post
     // a este servicio tenemos que enviarle datos 
     // en formato json string
     // por lo tanto convertimos user a json-string
    let params = JSON.stringify(user) ;
    // seteamos la cabecera
    let headers = new HttpHeaders().set('Content-Type' , 'application/json');
      
    // enviamos la peticion por post
    return this._http.post( this.url + 'api/users/' , params , {headers : headers} ) ;
    }
}