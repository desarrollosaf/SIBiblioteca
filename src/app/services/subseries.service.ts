import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subseries } from '../interfases/subseries';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubseriesService {

  // private myAppUrl: string = 'http://localhost:3006/';
  private myAppUrl: string;
  private myAPIUrl: string = 'api/catalogos';

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.appUrl;
  }

    getSubseries():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/getSubseries`;
      return this.http.get<[]>(url)
    }

    addSubserie(subserie: Subseries){
        const url = `${this.myAppUrl}${this.myAPIUrl}/addSubserie`;
    return this.http.post(url,subserie)
    }

    editSubserie(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/editSubserie/${id}`;
      return this.http.get(url)
    }

    updateSubserie(subserie: Subseries){
      const url = `${this.myAppUrl}${this.myAPIUrl}/updateSubserie`;
      return this.http.post(url,subserie)
    }

    actDescSubserie(id: any){
      const url = `${this.myAppUrl}${this.myAPIUrl}/actDescSubserie/${id}`;
      return this.http.get(url)
    }

    getSeries():Observable<[]>{
      const url = `${this.myAppUrl}${this.myAPIUrl}/getComnboSeries`;
      return this.http.get<[]>(url)
    }
}
