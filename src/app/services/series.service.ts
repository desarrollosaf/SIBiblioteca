import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../interfases/series';
import { environment } from '../../enviroments/environment';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  // private myAppUrl: string = 'http://localhost:3006/';
  private myAppUrl: string;
  private myAPIUrl: string = 'api/catalogos';

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.appUrl;
  }

    getSeries():Observable<[]>{
        const url = `${this.myAppUrl}${this.myAPIUrl}/getSeries`;
        return this.http.get<[]>(url)
      }
  
      addSerie(serie: Series){
         const url = `${this.myAppUrl}${this.myAPIUrl}/addSerie`;
      return this.http.post(url,serie)
      }
  
      editSerie(id: any){
        const url = `${this.myAppUrl}${this.myAPIUrl}/editSerie/${id}`;
        return this.http.get(url)
      }
  
      updateSerie(serie: Series){
        const url = `${this.myAppUrl}${this.myAPIUrl}/updateSerie`;
        return this.http.post(url,serie)
      }
  
      actDescSerie(id: any){
        const url = `${this.myAppUrl}${this.myAPIUrl}/actDescSerie/${id}`;
        return this.http.get(url)
      }

      getSecciones():Observable<[]>{
        const url = `${this.myAppUrl}${this.myAPIUrl}/getComnboSecciones`;
        return this.http.get<[]>(url)
      }
}
