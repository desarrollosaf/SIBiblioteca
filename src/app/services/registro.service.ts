import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private myAppUrl: string = 'http://localhost:3001/';
  private myAPIUrl: string = 'api/registro/insert';
  
  constructor(private http: HttpClient) {


  }
}