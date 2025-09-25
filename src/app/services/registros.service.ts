import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../interfases/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private myAppUrl: string = 'https://bibliolex.gob.mx/repositorio/backend/';
  private myAPIUrl: string = 'api/registros';

  constructor(private http: HttpClient) {

   }

     getRegistros():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/getRegistros`;
      return this.http.get<[]>(url)
    }

    actDescRegistros(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/actDescRegistros/${id}`;
      return this.http.get(url)
    }

    getComboSecciones():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/comboSecciones`;
      return this.http.get<[]>(url)
    }

    getComboSeries(id: any):Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/comboSeries/${id}`;
      return this.http.get<[]>(url)
    }

    getComboSubseries(id: any):Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/comboSubseries/${id}`;
      return this.http.get<[]>(url)
    }

    getAccesos():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/comboAccesos`;
      return this.http.get<[]>(url)
    }

    addRegistro(registro: Registro){
       const url = `${this.myAppUrl}${this.myAPIUrl}/addRegistro`;
    return this.http.post(url,registro)
    }

    updateRegistro(registro: Registro){
       const url = `${this.myAppUrl}${this.myAPIUrl}/updateRegistro`;
    return this.http.post(url,registro)
    }

    editRegistro(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/editRegistro/${id}`;
      return this.http.get(url)
    }
}
