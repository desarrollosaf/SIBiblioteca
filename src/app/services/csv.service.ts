import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
 private myAppUrl: string;
  private myAPIUrl: string = 'api/registros';

  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
  }

  addCsv(formData: FormData){
       const url = `${this.myAppUrl}${this.myAPIUrl}/csv`;
    return this.http.post(url,formData)
    }
}
