import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitudes } from '../interfases/solicitudes';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  // private myAppUrl: string = 'http://localhost:3006/';
  private myAppUrl: string;
  private myAPIUrl: string = 'api/buscador/';


  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.appUrl;
  }
    getBusqueda(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}${id}`;
      return this.http.get(url)
    }

    addSolicitud(solicitud: Solicitudes){
      const url = `${this.myAppUrl}${this.myAPIUrl}solicitud/addSolicitud`;
      return this.http.post(url,solicitud)
    }
}
