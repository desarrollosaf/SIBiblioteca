import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secciones } from '../interfases/secciones';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  private myAppUrl: string = 'http://localhost:3001/';
  private myAPIUrl: string = 'api/catalogos';

  constructor(private http: HttpClient ) {

  }

    getSecciones():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/getSecciones`;
      return this.http.get<[]>(url)
    }

    addSeccion(seccion: any){
       const url = `${this.myAppUrl}${this.myAPIUrl}/addSeccion`;
    return this.http.post(url,seccion)
    }

    editSeccion(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/editSeccion/${id}`;
      return this.http.get(url)
    }

    updateSeccion(seccion: Secciones){
      const url = `${this.myAppUrl}${this.myAPIUrl}/updateSeccion`;
      return this.http.post(url,seccion)
    }

    actDescSeccion(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/actDescSeccion/${id}`;
      return this.http.get(url)
    }
}
