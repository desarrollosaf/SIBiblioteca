import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  private myAppUrl: string = 'https://bibliolex.gob.mx/repositorio/backend/';
  private myAPIUrl: string = 'api/buscador/';


  constructor(private http: HttpClient) { 

  }
    getBusqueda(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}${id}`;
      return this.http.get(url)
    }
}
