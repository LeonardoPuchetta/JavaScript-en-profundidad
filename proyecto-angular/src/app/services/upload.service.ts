import {Injectable} from '@angular/core';
import {Global} from './global';

// definimos el servicio con el injectable
@Injectable()
export class UploadService{

    public url: string;

    constructor(){
        this.url = Global.url;
    }

    // metodo para hacer una peticion ajax clasica
    // en la cual vamos a adjuntar un archivo

     makeFileRequest(url: string , params: Array<string> , files: Array<File> , name: string): any{
         // creamos una promesa
         return new Promise ( function( resolve , reject) {
            // en la promesa definimos la peticion ajax
            // para subir archivos, necesitamos SIMULAR un formulario clasico

            var formData: any = new FormData();

            // objeto de peticiones asincronas de JS
            var xhr = new XMLHttpRequest();

             // hacemos un for para recorrer el array de archivos
             // tslint:disable-next-line:prefer-for-of
            for (var i = 0 ; i < files.length ; i ++ ){
                formData.append( name , files[i], files[i].name);
              }

             // hacemos la peticion ajax
             // tslint:disable-next-line:align
             xhr.onreadystatechange = function (){
                 if (xhr.readyState == 4){
                     if (xhr.status == 200){
                         resolve(JSON.parse(xhr.response));
                     } else {
                            reject(xhr.response);
                     }
                 }
             };
            // finalmente hacemos la peticion por post
            xhr.open('POST', url , true);
            xhr.send(formData);
         });

     }

}
