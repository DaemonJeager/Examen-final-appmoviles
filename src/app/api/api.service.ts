import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base_url = "https://dummyjson.com/users";
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/?limit=10`);
  }
  

}